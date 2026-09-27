export interface EnquiryNotificationData {
  name: string;
  email: string;
  phone?: string | null;
  occasion?: string | null;
  creation?: string | null;
  message: string;
}

export async function sendEnquiryNotificationEmail(data: EnquiryNotificationData) {
  const apiKey = import.meta.env.VITE_RESEND_API_KEY || (typeof process !== "undefined" ? process.env?.RESEND_API_KEY : undefined);
  const ownerEmail = import.meta.env.VITE_OWNER_EMAIL || "anubhavbaghel@gmail.com";

  if (!apiKey) {
    console.warn("[Notifications] VITE_RESEND_API_KEY is missing in environment variables. Email notification will trigger once API key is added.");
    return { success: false, reason: "missing_api_key" };
  }

  try {
    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: "thaddeus creates <onboarding@resend.dev>",
        to: [ownerEmail],
        reply_to: data.email,
        subject: `✨ New Enquiry from ${data.name} — thaddeus creates`,
        html: `
          <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; max-width: 600px; margin: 0 auto; padding: 24px; border: 1px solid #e2e8f0; border-radius: 12px; background-color: #ffffff;">
            <div style="text-align: center; border-bottom: 1px solid #f1f5f9; padding-bottom: 16px; margin-bottom: 20px;">
              <h2 style="color: #0f172a; margin: 0; font-size: 20px; font-weight: 600;">✨ New Keepsake Enquiry</h2>
              <p style="color: #64748b; font-size: 13px; margin: 4px 0 0 0;">thaddeus creates — Website Contact Form</p>
            </div>
            
            <div style="background-color: #f8fafc; padding: 18px; border-radius: 8px; margin-bottom: 20px;">
              <p style="margin: 8px 0; font-size: 14px; color: #334155;"><strong>Name:</strong> ${data.name}</p>
              <p style="margin: 8px 0; font-size: 14px; color: #334155;"><strong>Email:</strong> <a href="mailto:${data.email}" style="color: #0284c7; text-decoration: none;">${data.email}</a></p>
              <p style="margin: 8px 0; font-size: 14px; color: #334155;"><strong>Phone / WhatsApp:</strong> ${data.phone || 'Not provided'}</p>
              <p style="margin: 8px 0; font-size: 14px; color: #334155;"><strong>Piece Interested In:</strong> ${data.creation || 'General Enquiry'}</p>
              <p style="margin: 8px 0; font-size: 14px; color: #334155;"><strong>Occasion:</strong> ${data.occasion || 'Not specified'}</p>
            </div>

            <div style="margin-bottom: 24px;">
              <h3 style="color: #0f172a; font-size: 14px; margin-bottom: 8px;">Customer Message:</h3>
              <div style="background-color: #ffffff; padding: 14px; border: 1px solid #cbd5e1; border-left: 4px solid #0f172a; border-radius: 4px; color: #1e293b; font-size: 14px; white-space: pre-wrap; line-height: 1.6;">${data.message}</div>
            </div>

            <div style="text-align: center; border-top: 1px solid #f1f5f9; padding-top: 20px;">
              <a href="mailto:${data.email}?subject=Re:%20Enquiry%20with%20thaddeus%20creates" style="background-color: #0f172a; color: #ffffff; padding: 10px 20px; text-decoration: none; border-radius: 6px; font-weight: 500; font-size: 14px; display: inline-block;">Reply to ${data.name}</a>
            </div>
          </div>
        `,
      }),
    });

    if (!res.ok) {
      const errorText = await res.text();
      console.error("[Notifications] Resend API error:", errorText);
      return { success: false, error: errorText };
    }

    return { success: true };
  } catch (err) {
    console.error("[Notifications] Failed to send email notification:", err);
    return { success: false, error: err };
  }
}
