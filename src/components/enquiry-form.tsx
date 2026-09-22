import { useState } from "react";
import { Check, Loader2, Send } from "lucide-react";
import { z } from "zod";
import { toast } from "sonner";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { supabase } from "@/integrations/supabase/client";
import { creations } from "@/lib/creations";

const enquirySchema = z.object({
  name: z.string().trim().min(1, { message: "Please share your name" }).max(100, { message: "Name must be under 100 characters" }),
  email: z.string().trim().email({ message: "Please enter a valid email address" }).max(255, { message: "Email must be under 255 characters" }),
  phone: z.string().trim().max(40, { message: "Phone must be under 40 characters" }).optional(),
  occasion: z.string().trim().max(120, { message: "Occasion must be under 120 characters" }).optional(),
  creation: z.string().trim().max(120).optional(),
  message: z.string().trim().min(1, { message: "Please tell us a little about the piece" }).max(2000, { message: "Message must be under 2000 characters" }),
});

type FieldName = keyof z.infer<typeof enquirySchema>;

const inputClass = "mt-2 h-11 rounded-lg border-border bg-background";

export function EnquiryForm() {
  const [errors, setErrors] = useState<Partial<Record<FieldName, string>>>({});
  const [submitting, setSubmitting] = useState(false);
  const [sent, setSent] = useState(false);

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = Object.fromEntries(new FormData(form)) as Record<string, string>;

    const parsed = enquirySchema.safeParse({
      name: data['name'] ?? "",
      email: data['email'] ?? "",
      phone: data['phone'] ?? "",
      occasion: data['occasion'] ?? "",
      creation: data['creation'] ?? "",
      message: data['message'] ?? "",
    });

    if (!parsed.success) {
      const next: Partial<Record<FieldName, string>> = {};
      for (const issue of parsed.error.issues) {
        const key = issue.path[0] as FieldName;
        if (!next[key]) next[key] = issue.message;
      }
      setErrors(next);
      toast.error("Please check the highlighted details.");
      return;
    }

    setErrors({});
    setSubmitting(true);

    const { error } = await supabase.from("enquiries").insert({
      name: parsed.data.name,
      email: parsed.data.email,
      phone: parsed.data.phone || null,
      occasion: parsed.data.occasion || null,
      creation: parsed.data.creation || null,
      message: parsed.data.message,
    });

    setSubmitting(false);

    if (error) {
      toast.error("Your enquiry could not be sent. Please try again in a moment.");
      return;
    }

    form.reset();
    setSent(true);
    toast.success("Thank you — your enquiry has been received.");
  }

  if (sent) {
    return (
      <div className="rounded-lg border border-border bg-card p-8 sm:p-10">
        <span className="grid size-10 place-items-center rounded-full bg-secondary">
          <Check className="size-5" />
        </span>
        <h2 className="mt-5 font-display text-3xl font-medium">Your enquiry is with us.</h2>
        <p className="mt-3 text-sm leading-6 text-muted-foreground">
          We read every note personally and will reply to the email you shared. In the meantime, recent work lives on Instagram.
        </p>
        <Button variant="outline" className="mt-6" onClick={() => setSent(false)}>
          Send another enquiry
        </Button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="rounded-lg border border-border bg-card p-6 sm:p-9">
      <h2 className="font-display text-3xl font-medium">Share your idea</h2>
      <p className="mt-2 text-sm leading-6 text-muted-foreground">
        A few details are enough to begin. We will reply by email.
      </p>

      <div className="mt-7 grid gap-5 sm:grid-cols-2">
        <div>
          <Label htmlFor="name">Your name</Label>
          <Input id="name" name="name" maxLength={100} autoComplete="name" placeholder="Anubhav" className={inputClass} />
          {errors.name && <p className="mt-1.5 text-xs text-destructive">{errors.name}</p>}
        </div>
        <div>
          <Label htmlFor="email">Email</Label>
          <Input id="email" name="email" type="email" maxLength={255} autoComplete="email" placeholder="you@example.com" className={inputClass} />
          {errors.email && <p className="mt-1.5 text-xs text-destructive">{errors.email}</p>}
        </div>
        <div>
          <Label htmlFor="phone">Phone or WhatsApp <span className="text-muted-foreground">(optional)</span></Label>
          <Input id="phone" name="phone" maxLength={40} autoComplete="tel" placeholder="+91" className={inputClass} />
          {errors.phone && <p className="mt-1.5 text-xs text-destructive">{errors.phone}</p>}
        </div>
        <div>
          <Label htmlFor="occasion">Occasion <span className="text-muted-foreground">(optional)</span></Label>
          <Input id="occasion" name="occasion" maxLength={120} placeholder="Wedding, birthday, anniversary" className={inputClass} />
          {errors.occasion && <p className="mt-1.5 text-xs text-destructive">{errors.occasion}</p>}
        </div>
        <div className="sm:col-span-2">
          <Label htmlFor="creation">Which creation</Label>
          <select
            id="creation"
            name="creation"
            defaultValue=""
            className="mt-2 h-11 w-full rounded-lg border border-border bg-background px-3 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
          >
            <option value="">Not sure yet</option>
            {creations.map((creation) => (
              <option key={creation.slug} value={creation.shortName}>
                {creation.shortName}
              </option>
            ))}
            <option value="Something else">Something else</option>
          </select>
        </div>
        <div className="sm:col-span-2">
          <Label htmlFor="message">Tell us about the piece</Label>
          <Textarea
            id="message"
            name="message"
            rows={5}
            maxLength={2000}
            placeholder="Names, dates, colours, photos you would like included, and when you hope to give it."
            className="mt-2 rounded-lg border-border bg-background"
          />
          {errors.message && <p className="mt-1.5 text-xs text-destructive">{errors.message}</p>}
        </div>
      </div>

      <Button type="submit" variant="tactile" size="lg" className="mt-8 w-full sm:w-auto" disabled={submitting}>
        {submitting ? <><Loader2 className="size-5 animate-spin" /> Sending</> : <>Send enquiry <Send className="size-5" /></>}
      </Button>
      <p className="mt-3 text-xs leading-5 text-muted-foreground">
        Your details are only used to reply to this enquiry.
      </p>
    </form>
  );
}
