console.log("RESEND KEY:", process.env.RESEND_API_KEY);

import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req) {
  try {
    const { name, email, message } = await req.json();

    // Basic validation
    if (!name || !email || !message) {
      return new Response(
        JSON.stringify({ success: false, error: "Missing fields" }),
        { status: 400, headers: { "Content-Type": "application/json" } }
      );
    }

    // Send email using Resend
    await resend.emails.send({
      from: "Portfolio Contact <onboarding@resend.dev>",
      to: "anthonycervi97@gmail.com", // 👈 Change this to your actual inbox
      subject: `New message from ${name}`,
      text: `
        Name: ${name}
        Email: ${email}

        Message:
        ${message}
      `,
    });

    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("❌ Email sending failed:", error);
    return new Response(JSON.stringify({ success: false, error: error.message }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}