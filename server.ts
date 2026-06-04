import express from "express";
import path from "path";
import nodemailer from "nodemailer";
import dotenv from "dotenv";
import { createServer as createViteServer } from "vite";

dotenv.config();

const app = express();
const PORT = 3000;

app.use(express.json());

// API route first: Submit inquiry and dispatch email
app.post("/api/submit-inquiry", async (req, res) => {
  const { name, email, company, helpWith, message } = req.body;

  if (!name || !email || !helpWith || !message) {
    return res.status(400).json({
      success: false,
      error: "Missing required fields: name, email, helpWith, and message are required."
    });
  }

  const smtpHost = process.env.SMTP_HOST;
  const smtpPort = process.env.SMTP_PORT;
  const smtpUser = process.env.SMTP_USER;
  const smtpPass = process.env.SMTP_PASS;
  const smtpFrom = process.env.SMTP_FROM || smtpUser;

  // If SMTP configuration is missing, send a demo response with instructions
  if (!smtpHost || !smtpUser || !smtpPass) {
    console.warn("⚠️ [Geekstab Mailer] SMTP credentials are not configured in system environment variables (.env).");
    console.warn("Please add SMTP_HOST, SMTP_PORT, SMTP_USER, and SMTP_PASS to .env to send real emails.");
    
    return res.json({
      success: true,
      simulated: true,
      message: "Request processed successfully (Simulated mode).",
      instructions: "To send real emails to your inbox, please provide SMTP configurations (SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS) in the settings or .env file of your workspace."
    });
  }

  try {
    // 1. Configure the SMTP transporter securely
    const transporter = nodemailer.createTransport({
      host: smtpHost,
      port: parseInt(smtpPort || "465", 10),
      secure: smtpPort === "465", // true for 465, false for 587 or other ports
      auth: {
        user: smtpUser,
        pass: smtpPass,
      },
    });

    // 2. Draft the beautiful custom email template for the customer
    const customerMailOptions = {
      from: `"Geekstab Support" <${smtpFrom}>`,
      to: email,
      subject: `Geekstab Salesforce Consultation Confirmed — ${name}`,
      html: `
        <div style="background-color: #030712; color: #f3f4f6; font-family: 'Inter', system-ui, sans-serif; padding: 32px 16px; min-height: 100%;">
          <div style="max-width: 600px; margin: 0 auto; background-color: #0d1527; border: 1px solid rgba(255, 255, 255, 0.1); border-radius: 12px; overflow: hidden; box-shadow: 0 10px 25px rgba(0, 0, 0, 0.5);">
            <!-- Header -->
            <div style="padding: 24px; border-b: 1px solid rgba(255, 255, 255, 0.1); text-align: center; background-color: #050b18;">
              <h1 style="color: #00c2ff; margin: 0; font-size: 24px; letter-spacing: 0.1em; font-weight: bold; text-transform: uppercase;">GEEKSTAB</h1>
              <p style="color: rgba(255, 255, 255, 0.5); margin: 4px 0 0 0; font-size: 10px; font-family: monospace; letter-spacing: 0.2em; text-transform: uppercase;">Enterprise Systems refactored</p>
            </div>
            
            <!-- Body -->
            <div style="padding: 32px 24px;">
              <h2 style="font-size: 18px; color: #ffffff; margin-top: 0; margin-bottom: 16px;">Hello ${name},</h2>
              <p style="font-size: 14px; color: #9ca3af; line-height: 1.6; margin-bottom: 24px;">
                Thank you for reaching out to Geekstab. We have successfully received your inquiry about <strong style="color: #00c2ff;">${helpWith}</strong>.
              </p>
              
              <div style="background-color: #050b18; border: 1px solid rgba(255, 255, 255, 0.05); border-radius: 8px; padding: 16px; margin-bottom: 24px;">
                <h3 style="font-size: 12px; text-transform: uppercase; color: rgba(255, 255, 255, 0.4); margin: 0 0 12px 0; font-family: monospace; letter-spacing: 0.1em;">Inquiry Specifications</h3>
                <table style="width: 100%; font-size: 13px; text-align: left; border-collapse: collapse;">
                  <tr>
                    <td style="padding: 6px 0; color: rgba(255, 255, 255, 0.5); width: 120px;">Company:</td>
                    <td style="padding: 6px 0; color: #ffffff; font-weight: 500;">${company || "Not specified"}</td>
                  </tr>
                  <tr>
                    <td style="padding: 6px 0; color: rgba(255, 255, 255, 0.5);">Requirement:</td>
                    <td style="padding: 6px 0; color: #00c2ff; font-weight: 500;">${helpWith}</td>
                  </tr>
                  <tr>
                    <td style="padding: 6px 0; color: rgba(255, 255, 255, 0.5); vertical-align: top;">Your Message:</td>
                    <td style="padding: 6px 0; color: #d1d5db; italic; line-height: 1.4;">"${message}"</td>
                  </tr>
                </table>
              </div>

              <!-- Next Actions -->
              <h3 style="font-size: 12px; text-transform: uppercase; color: #10b981; margin: 0 0 16px 0; font-family: monospace; letter-spacing: 0.1em;">Next Reconnaissance Actions</h3>
              <div style="font-size: 13px; line-height: 1.5; color: #9ca3af; margin-bottom: 28px;">
                <div style="margin-bottom: 12px;">
                  <span style="color: #00c2ff; font-weight: bold; margin-right: 8px;">[1]</span>
                  Lead Architect assigned to analyze your tech profile (${company || "Your Enterprise Theme"}).
                </div>
                <div style="margin-bottom: 12px;">
                  <span style="color: #00c2ff; font-weight: bold; margin-right: 8px;">[2]</span>
                  Baseline sandbox architecture security review checklist prepared.
                </div>
                <div>
                  <span style="color: #00c2ff; font-weight: bold; margin-right: 8px;">[3]</span>
                  Reach out to arrange a focused 45-minute technical deep dive.
                </div>
              </div>

              <!-- Signature -->
              <p style="font-size: 13px; color: rgba(255, 255, 255, 0.6); margin-top: 32px; border-top: 1px solid rgba(255, 255, 255, 0.05); padding-top: 20px;">
                Best regards,<br/>
                <strong style="color: #ffffff;">Geekstab Technical Council</strong><br/>
                <span style="font-size: 11px; color: rgba(255, 255, 255, 0.4); font-family: monospace;">refactoring-ops@geekstab.com</span>
              </p>
            </div>
            
            <!-- Footer -->
            <div style="padding: 16px 24px; background-color: #050b18; border-top: 1px solid rgba(255, 255, 255, 0.05); text-align: center; font-size: 11px; color: rgba(255, 255, 255, 0.4);">
              This is an automated operational inquiry receipt. Geekstab complies with standard enterprise security protocols.
            </div>
          </div>
        </div>
      `
    };

    // 3. Draft email notification for the Geekstab Administration
    const adminMailOptions = {
      from: `"Geekstab Lead Generation" <${smtpFrom}>`,
      to: smtpUser, // Sends to system administrator
      subject: `🔥 NEW COLLABORATION REQUEST: ${company} (${name})`,
      html: `
        <div style="background-color: #111827; color: #ffffff; font-family: sans-serif; padding: 24px;">
          <h2 style="color: #10B981;">New Enterprise Project Inquiry Captured</h2>
          <table style="width: 100%; border-collapse: collapse; margin: 16px 0;">
            <tr style="border-bottom: 1px solid #374151;">
              <td style="padding: 8px; font-weight: bold; width: 150px;">Contact Name:</td>
              <td style="padding: 8px;">${name}</td>
            </tr>
            <tr style="border-bottom: 1px solid #374151;">
              <td style="padding: 8px; font-weight: bold;">Business Email:</td>
              <td style="padding: 8px;"><a href="mailto:${email}" style="color: #3B82F6;">${email}</a></td>
            </tr>
            <tr style="border-bottom: 1px solid #374151;">
              <td style="padding: 8px; font-weight: bold;">Corporate Domain:</td>
              <td style="padding: 8px;">${company || "Not Provided"}</td>
            </tr>
            <tr style="border-bottom: 1px solid #374151;">
              <td style="padding: 8px; font-weight: bold;">Core Competency focus:</td>
              <td style="padding: 8px; color: #10B981; font-weight: bold;">${helpWith}</td>
            </tr>
            <tr>
              <td style="padding: 8px; font-weight: bold; vertical-align: top;">Detailed briefing:</td>
              <td style="padding: 8px; background: #1F2937; border-radius: 4px; font-style: italic;">"${message}"</td>
            </tr>
          </table>
          <p style="font-size: 12px; color: #9CA3AF;">Timestamp: ${new Date().toISOString()}</p>
        </div>
      `
    };

    // Send both emails concurrently
    await Promise.all([
      transporter.sendMail(customerMailOptions),
      transporter.sendMail(adminMailOptions),
    ]);

    return res.json({ success: true, simulated: false, message: "Inquiry emails dispatched successfully." });
  } catch (error: any) {
    console.error("❌ Error dispatching SMTP emails:", error);
    return res.status(500).json({
      success: false,
      error: `Failed to dispatch inquiry mail: ${error.message || error}`
    });
  }
});

// Vite middleware flow or production static routing setup
async function startServer() {
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`🚀 [Full-Stack] Server running at http://localhost:${PORT}`);
  });
}

startServer();
