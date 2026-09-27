import { useState, useEffect } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { supabase } from "@/integrations/supabase/client";
import type { Tables } from "@/integrations/supabase/types";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  Lock,
  Eye,
  Mail,
  Phone,
  MessageSquare,
  Search,
  RefreshCw,
  LogOut,
  Calendar,
  Sparkles,
  Inbox,
  CheckCircle2,
  Copy,
  ExternalLink,
} from "lucide-react";
import { toast } from "sonner";

export const Route = createFileRoute("/admin")({
  component: AdminDashboard,
});

type Enquiry = Tables<"enquiries">;

function AdminDashboard() {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const [passcode, setPasscode] = useState("");
  const [loginError, setLoginError] = useState("");
  
  const [enquiries, setEnquiries] = useState<Enquiry[]>([]);
  const [loading, setLoading] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCreation, setSelectedCreation] = useState<string>("all");
  const [selectedEnquiry, setSelectedEnquiry] = useState<Enquiry | null>(null);

  // Check existing session
  useEffect(() => {
    if (typeof window !== "undefined") {
      const savedAuth = sessionStorage.getItem("thaddeus_admin_auth");
      if (savedAuth === "true") {
        setIsAuthenticated(true);
      }
    }
  }, []);

  // Fetch enquiries from Supabase when authenticated
  useEffect(() => {
    if (isAuthenticated) {
      fetchEnquiries();
    }
  }, [isAuthenticated]);

  async function fetchEnquiries() {
    setLoading(true);
    try {
      const { data, error } = await supabase
        .from("enquiries")
        .select("*")
        .order("created_at", { ascending: false });

      if (error) {
        toast.error("Failed to load enquiries from database.");
        console.error("Supabase fetch error:", error);
      } else {
        setEnquiries(data || []);
      }
    } catch (err) {
      toast.error("An unexpected error occurred while fetching data.");
      console.error(err);
    } finally {
      setLoading(false);
    }
  }

  function handleLogin(e: React.FormEvent) {
    e.preventDefault();
    const correctPassword = import.meta.env.VITE_ADMIN_PASSWORD || "thaddeus2026";

    if (passcode === correctPassword) {
      setIsAuthenticated(true);
      sessionStorage.setItem("thaddeus_admin_auth", "true");
      setLoginError("");
      toast.success("Welcome to Owner Dashboard");
    } else {
      setLoginError("Incorrect passcode. Please try again.");
      toast.error("Access denied");
    }
  }

  function handleLogout() {
    setIsAuthenticated(false);
    sessionStorage.removeItem("thaddeus_admin_auth");
    setPasscode("");
    toast.info("Dashboard locked");
  }

  function copyToClipboard(text: string, label: string) {
    navigator.clipboard.writeText(text);
    toast.success(`Copied ${label} to clipboard`);
  }

  // Filtered list
  const filteredEnquiries = enquiries.filter((item) => {
    const matchesSearch =
      item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (item.phone && item.phone.toLowerCase().includes(searchQuery.toLowerCase())) ||
      (item.message && item.message.toLowerCase().includes(searchQuery.toLowerCase())) ||
      (item.creation && item.creation.toLowerCase().includes(searchQuery.toLowerCase()));

    const matchesCreation =
      selectedCreation === "all" ||
      (item.creation && item.creation.toLowerCase() === selectedCreation.toLowerCase());

    return matchesSearch && matchesCreation;
  });

  // Unique creations for filter
  const creationList = Array.from(
    new Set(enquiries.map((e) => e.creation).filter(Boolean))
  ) as string[];

  // Stats
  const totalCount = enquiries.length;
  const last7DaysCount = enquiries.filter((e) => {
    const date = new Date(e.created_at);
    const now = new Date();
    const diffTime = Math.abs(now.getTime() - date.getTime());
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays <= 7;
  }).length;

  const uniqueCustomersCount = new Set(enquiries.map((e) => e.email.toLowerCase())).size;

  // Unauthenticated Password View
  if (!isAuthenticated) {
    return (
      <div className="flex min-h-[80vh] items-center justify-center px-4 py-12">
        <Card className="w-full max-w-md border-border bg-card shadow-lg">
          <CardHeader className="text-center">
            <div className="mx-auto mb-3 grid size-12 place-items-center rounded-full bg-primary/10 text-primary">
              <Lock className="size-6" />
            </div>
            <CardTitle className="font-display text-2xl font-medium">Owner Access</CardTitle>
            <CardDescription>
              Enter secret passcode to access the order & enquiry dashboard.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleLogin} className="space-y-4">
              <div>
                <Input
                  type="password"
                  placeholder="Enter passcode"
                  value={passcode}
                  onChange={(e) => setPasscode(e.target.value)}
                  className="h-11 border-border"
                  autoFocus
                />
                {loginError && <p className="mt-2 text-xs font-medium text-destructive">{loginError}</p>}
              </div>
              <Button type="submit" className="h-11 w-full font-medium">
                Unlock Dashboard
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    );
  }

  // Authenticated Owner Dashboard View
  return (
    <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      {/* Top Header */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between border-b border-border pb-6">
        <div>
          <div className="flex items-center gap-2">
            <h1 className="font-display text-3xl font-medium tracking-tight">Owner Dashboard</h1>
            <Badge variant="outline" className="gap-1 border-primary/30 text-primary">
              <Sparkles className="size-3" /> Live Supabase Connected
            </Badge>
          </div>
          <p className="mt-1 text-sm text-muted-foreground">
            Track, view, and respond to incoming customer enquiries and keepsake orders.
          </p>
        </div>

        <div className="flex items-center gap-3">
          <Button
            variant="outline"
            size="sm"
            onClick={fetchEnquiries}
            disabled={loading}
            className="gap-2"
          >
            <RefreshCw className={`size-4 ${loading ? "animate-spin" : ""}`} />
            Refresh
          </Button>
          <Button variant="ghost" size="sm" onClick={handleLogout} className="gap-2 text-muted-foreground hover:text-foreground">
            <LogOut className="size-4" />
            Lock Dashboard
          </Button>
        </div>
      </div>

      {/* Stats Summary Row */}
      <div className="mt-6 grid gap-4 sm:grid-cols-3">
        <Card className="border-border bg-card">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">Total Enquiries</CardTitle>
            <Inbox className="size-4 text-primary" />
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold font-display">{totalCount}</div>
            <p className="mt-1 text-xs text-muted-foreground">Stored in Supabase database</p>
          </CardContent>
        </Card>

        <Card className="border-border bg-card">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">Last 7 Days</CardTitle>
            <Calendar className="size-4 text-primary" />
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold font-display">{last7DaysCount}</div>
            <p className="mt-1 text-xs text-muted-foreground">Recent inquiries received</p>
          </CardContent>
        </Card>

        <Card className="border-border bg-card">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">Unique Customers</CardTitle>
            <CheckCircle2 className="size-4 text-primary" />
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold font-display">{uniqueCustomersCount}</div>
            <p className="mt-1 text-xs text-muted-foreground">Based on email addresses</p>
          </CardContent>
        </Card>
      </div>

      {/* Filter and Search Bar */}
      <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="relative flex-1 max-w-md">
          <Search className="absolute left-3.5 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
          <Input
            placeholder="Search by name, email, phone, or piece..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-10 h-10 border-border"
          />
        </div>

        {creationList.length > 0 && (
          <div className="flex items-center gap-2 overflow-x-auto pb-1 sm:pb-0">
            <Button
              variant={selectedCreation === "all" ? "default" : "outline"}
              size="sm"
              onClick={() => setSelectedCreation("all")}
              className="rounded-full text-xs"
            >
              All Pieces
            </Button>
            {creationList.map((item) => (
              <Button
                key={item}
                variant={selectedCreation === item ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedCreation(item)}
                className="rounded-full text-xs capitalize whitespace-nowrap"
              >
                {item}
              </Button>
            ))}
          </div>
        )}
      </div>

      {/* Table Section */}
      <div className="mt-6 rounded-lg border border-border bg-card overflow-hidden">
        {loading ? (
          <div className="flex min-h-[300px] flex-col items-center justify-center p-8 text-center">
            <RefreshCw className="size-8 animate-spin text-primary" />
            <p className="mt-3 text-sm text-muted-foreground">Loading customer enquiries...</p>
          </div>
        ) : filteredEnquiries.length === 0 ? (
          <div className="flex min-h-[300px] flex-col items-center justify-center p-8 text-center">
            <Inbox className="size-10 text-muted-foreground/50" />
            <h3 className="mt-3 text-lg font-medium">No enquiries found</h3>
            <p className="mt-1 text-sm text-muted-foreground">
              {searchQuery ? "Try clearing your search query or filters." : "No customer form submissions yet."}
            </p>
          </div>
        ) : (
          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow className="border-border bg-muted/40 hover:bg-muted/40">
                  <TableHead className="w-[140px]">Date</TableHead>
                  <TableHead>Customer</TableHead>
                  <TableHead>Interested Piece</TableHead>
                  <TableHead>Occasion</TableHead>
                  <TableHead>Contact Info</TableHead>
                  <TableHead className="text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredEnquiries.map((enquiry) => {
                  const formattedDate = new Date(enquiry.created_at).toLocaleDateString("en-IN", {
                    day: "numeric",
                    month: "short",
                    year: "numeric",
                  });
                  const formattedTime = new Date(enquiry.created_at).toLocaleTimeString("en-IN", {
                    hour: "2-digit",
                    minute: "2-digit",
                  });

                  // Sanitize phone for WhatsApp
                  const rawPhone = enquiry.phone ? enquiry.phone.replace(/[^0-9]/g, "") : "";
                  const whatsappPhone = rawPhone.length === 10 ? `91${rawPhone}` : rawPhone;

                  return (
                    <TableRow key={enquiry.id} className="border-border">
                      <TableCell className="align-top whitespace-nowrap">
                        <div className="font-medium text-xs text-foreground">{formattedDate}</div>
                        <div className="text-[11px] text-muted-foreground">{formattedTime}</div>
                      </TableCell>
                      <TableCell className="align-top">
                        <div className="font-medium text-sm text-foreground">{enquiry.name}</div>
                        <div className="text-xs text-muted-foreground">{enquiry.email}</div>
                      </TableCell>
                      <TableCell className="align-top">
                        {enquiry.creation ? (
                          <Badge variant="secondary" className="font-normal capitalize text-xs">
                            {enquiry.creation}
                          </Badge>
                        ) : (
                          <span className="text-xs text-muted-foreground">General</span>
                        )}
                      </TableCell>
                      <TableCell className="align-top">
                        <span className="text-xs text-foreground">
                          {enquiry.occasion || <span className="text-muted-foreground">—</span>}
                        </span>
                      </TableCell>
                      <TableCell className="align-top">
                        <div className="flex flex-col gap-1 text-xs">
                          <a
                            href={`mailto:${enquiry.email}?subject=Re:%20Enquiry%20with%20thaddeus%20creates`}
                            className="inline-flex items-center gap-1 text-primary hover:underline"
                          >
                            <Mail className="size-3" />
                            {enquiry.email}
                          </a>
                          {enquiry.phone && (
                            <a
                              href={`https://wa.me/${whatsappPhone}?text=Hi%20${encodeURIComponent(enquiry.name)},%20thank%20you%20for%20reaching%20out%20to%20thaddeus%20creates!`}
                              target="_blank"
                              rel="noreferrer"
                              className="inline-flex items-center gap-1 text-emerald-600 hover:underline"
                            >
                              <Phone className="size-3" />
                              {enquiry.phone}
                            </a>
                          )}
                        </div>
                      </TableCell>
                      <TableCell className="align-top text-right whitespace-nowrap">
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => setSelectedEnquiry(enquiry)}
                          className="gap-1.5 h-8 text-xs"
                        >
                          <Eye className="size-3.5" />
                          View Details
                        </Button>
                      </TableCell>
                    </TableRow>
                  );
                })}
              </TableBody>
            </Table>
          </div>
        )}
      </div>

      {/* Enquiry Detail Modal */}
      <Dialog open={!!selectedEnquiry} onOpenChange={(open) => !open && setSelectedEnquiry(null)}>
        {selectedEnquiry && (
          <DialogContent className="max-w-lg border-border bg-card">
            <DialogHeader>
              <div className="flex items-center gap-2">
                <DialogTitle className="font-display text-xl font-medium">Enquiry Details</DialogTitle>
                <Badge variant="outline" className="text-xs">
                  ID: {selectedEnquiry.id.slice(0, 8)}
                </Badge>
              </div>
              <DialogDescription className="text-xs">
                Submitted on {new Date(selectedEnquiry.created_at).toLocaleString("en-IN")}
              </DialogDescription>
            </DialogHeader>

            <div className="space-y-4 py-2 text-sm">
              <div className="grid grid-cols-2 gap-4 rounded-lg bg-muted/40 p-3">
                <div>
                  <span className="text-xs text-muted-foreground block">Customer Name</span>
                  <span className="font-medium text-foreground">{selectedEnquiry.name}</span>
                </div>
                <div>
                  <span className="text-xs text-muted-foreground block">Email Address</span>
                  <div className="flex items-center gap-1">
                    <span className="font-medium text-foreground">{selectedEnquiry.email}</span>
                    <button
                      onClick={() => copyToClipboard(selectedEnquiry.email, "Email")}
                      className="text-muted-foreground hover:text-foreground"
                    >
                      <Copy className="size-3" />
                    </button>
                  </div>
                </div>
                <div>
                  <span className="text-xs text-muted-foreground block">Phone / WhatsApp</span>
                  <div className="flex items-center gap-1">
                    <span className="font-medium text-foreground">{selectedEnquiry.phone || "Not provided"}</span>
                    {selectedEnquiry.phone && (
                      <button
                        onClick={() => copyToClipboard(selectedEnquiry.phone!, "Phone")}
                        className="text-muted-foreground hover:text-foreground"
                      >
                        <Copy className="size-3" />
                      </button>
                    )}
                  </div>
                </div>
                <div>
                  <span className="text-xs text-muted-foreground block">Piece / Creation</span>
                  <span className="font-medium text-foreground capitalize">
                    {selectedEnquiry.creation || "General Enquiry"}
                  </span>
                </div>
                {selectedEnquiry.occasion && (
                  <div className="col-span-2">
                    <span className="text-xs text-muted-foreground block">Occasion</span>
                    <span className="font-medium text-foreground">{selectedEnquiry.occasion}</span>
                  </div>
                )}
              </div>

              <div>
                <span className="text-xs font-medium text-muted-foreground block mb-1.5 flex items-center gap-1">
                  <MessageSquare className="size-3.5" /> Customer Message
                </span>
                <div className="rounded-lg border border-border bg-background p-3 text-xs leading-relaxed text-foreground whitespace-pre-wrap">
                  {selectedEnquiry.message}
                </div>
              </div>

              <div className="flex flex-wrap items-center justify-end gap-2 pt-2 border-t border-border">
                {selectedEnquiry.phone && (
                  <a
                    href={`https://wa.me/${selectedEnquiry.phone.replace(/[^0-9]/g, "")}?text=Hi%20${encodeURIComponent(selectedEnquiry.name)},%20thank%20you%20for%20reaching%20out%20to%20thaddeus%20creates!`}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 rounded-md bg-emerald-600 px-3 py-1.5 text-xs font-medium text-white hover:bg-emerald-700 transition-colors"
                  >
                    <Phone className="size-3.5" /> Chat on WhatsApp
                  </a>
                )}
                <a
                  href={`mailto:${selectedEnquiry.email}?subject=Re:%20Enquiry%20with%20thaddeus%20creates`}
                  className="inline-flex items-center gap-1.5 rounded-md bg-primary px-3 py-1.5 text-xs font-medium text-primary-foreground hover:bg-primary/90 transition-colors"
                >
                  <Mail className="size-3.5" /> Reply via Email
                </a>
              </div>
            </div>
          </DialogContent>
        )}
      </Dialog>
    </div>
  );
}
