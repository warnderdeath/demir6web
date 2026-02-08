import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, phone, company, message } = body;

    // Validate required fields
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "İsim, email ve mesaj alanları zorunludur." },
        { status: 400 }
      );
    }

    // Create transporter with provided SMTP credentials
    const transporter = nodemailer.createTransport({
      host: "mail.kurumsaleposta.com",
      port: 587,
      secure: false, // Use STARTTLS
      auth: {
        user: "info@mentalsoft.net",
        pass: "@MErcado1313",
      },
      tls: {
        // Allow legacy TLS renegotiation for older servers
        rejectUnauthorized: false,
        minVersion: "TLSv1",
      },
    });

    // Email content
    const mailOptions = {
      from: "info@mentalsoft.net",
      to: "info@mentalsoft.net",
      subject: `Demir6 Web Sitesi - Yeni İletişim Mesajı: ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f9f9f9;">
          <div style="background-color: #F39C12; padding: 20px; text-align: center; border-radius: 8px 8px 0 0;">
            <h1 style="color: white; margin: 0;">Demir6 İletişim Formu</h1>
          </div>

          <div style="background-color: white; padding: 30px; border-radius: 0 0 8px 8px; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
            <h2 style="color: #333; border-bottom: 2px solid #F39C12; padding-bottom: 10px;">Yeni Mesaj Detayları</h2>

            <div style="margin: 20px 0;">
              <p style="margin: 10px 0;"><strong style="color: #F39C12;">Ad Soyad:</strong> ${name}</p>
              <p style="margin: 10px 0;"><strong style="color: #F39C12;">Email:</strong> <a href="mailto:${email}" style="color: #333;">${email}</a></p>
              ${phone ? `<p style="margin: 10px 0;"><strong style="color: #F39C12;">Telefon:</strong> ${phone}</p>` : ""}
              ${company ? `<p style="margin: 10px 0;"><strong style="color: #F39C12;">Firma:</strong> ${company}</p>` : ""}
            </div>

            <div style="margin: 20px 0;">
              <h3 style="color: #333; margin-bottom: 10px;">Mesaj:</h3>
              <div style="background-color: #f5f5f5; padding: 15px; border-left: 4px solid #F39C12; border-radius: 4px;">
                <p style="margin: 0; white-space: pre-wrap; color: #666;">${message}</p>
              </div>
            </div>

            <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #eee; text-align: center; color: #999; font-size: 12px;">
              <p>Bu mesaj Demir6 web sitesi iletişim formu aracılığıyla gönderilmiştir.</p>
              <p>Gönderim Tarihi: ${new Date().toLocaleString("tr-TR")}</p>
            </div>
          </div>
        </div>
      `,
      text: `
Demir6 Web Sitesi - Yeni İletişim Mesajı

Ad Soyad: ${name}
Email: ${email}
${phone ? `Telefon: ${phone}` : ""}
${company ? `Firma: ${company}` : ""}

Mesaj:
${message}

---
Gönderim Tarihi: ${new Date().toLocaleString("tr-TR")}
      `,
    };

    // Send email
    await transporter.sendMail(mailOptions);

    return NextResponse.json(
      { success: true, message: "Mesajınız başarıyla gönderildi!" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Email gönderim hatası:", error);
    return NextResponse.json(
      { error: "Mesaj gönderilirken bir hata oluştu. Lütfen daha sonra tekrar deneyin." },
      { status: 500 }
    );
  }
}
