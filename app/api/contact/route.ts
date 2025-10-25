import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const { name, email, service, message } = await req.json();

    // Create email transporter
    const transporter = nodemailer.createTransport({
      service: "gmail", // using Gmail
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // Send the email
    await transporter.sendMail({
      from: `"Zea.lify Contact Form" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_TO, // your inbox
      subject: `New message from ${name}`,
      text: `
Name: ${name}
Email: ${email}
Service: ${service}
Message: ${message}
      `,
    });

    return new Response(JSON.stringify({ success: true }), { status: 200 });
  } catch (error) {
    console.error("Email error:", error);
    return new Response(
      JSON.stringify({ success: false, error: "Email failed" }),
      {
        status: 500,
      }
    );
  }
}
