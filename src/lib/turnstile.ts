import { createServerFn } from "@tanstack/react-start";

export const verifyTurnstileToken = createServerFn({ method: "POST" })
  .validator((token: string) => token)
  .handler(async ({ data: token }) => {
    // Cloudflare Turnstile test secret key fallback (always passes in development/testing)
    const secretKey =
      (typeof process !== "undefined" ? process.env?.TURNSTILE_SECRET_KEY : undefined) ||
      (typeof process !== "undefined" ? process.env?.VITE_TURNSTILE_SECRET_KEY : undefined) ||
      import.meta.env.VITE_TURNSTILE_SECRET_KEY ||
      (import.meta.env as Record<string, string>)["TURNSTILE_SECRET_KEY"] ||
      "1x0000000000000000000000000000000AA";

    if (!token) {
      return { success: false, error: "Please complete the bot verification check." };
    }

    try {
      const formData = new URLSearchParams();
      formData.append("secret", secretKey);
      formData.append("response", token);

      const res = await fetch("https://challenges.cloudflare.com/turnstile/v0/siteverify", {
        method: "POST",
        body: formData,
      });

      const outcome = (await res.json()) as { success: boolean; "error-codes"?: string[] };

      if (outcome.success) {
        return { success: true };
      }

      console.error("[Turnstile] Validation failed outcome:", outcome);
      return { success: false, error: "Security check failed. Please refresh and try again." };
    } catch (err) {
      console.error("[Turnstile] Verification server error:", err);
      return { success: false, error: "Security verification server error." };
    }
  });
