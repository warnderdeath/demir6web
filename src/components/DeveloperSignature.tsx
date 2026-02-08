"use client";

import { useEffect } from "react";

const DeveloperSignature = () => {
  useEffect(() => {
    // Console'da gösterilecek mesajlar
    const styles = {
      title: "color: #BF0303; font-size: 24px; font-weight: bold; text-shadow: 2px 2px 4px rgba(191, 3, 3, 0.3);",
      subtitle: "color: #FF4444; font-size: 16px; font-weight: bold;",
      text: "color: #888; font-size: 14px;",
      highlight: "color: #BF0303; font-size: 14px; font-weight: bold;",
    };

    console.log("%c🔴 Demir6 Web Application", styles.title);
    console.log("%c━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━", styles.text);
    console.log("%c👨‍💻 Developed by: Atakan Oral", styles.highlight);
    console.log("%c🏢 Company: Mentalsoft", styles.text);
    console.log("%c📅 Year: 2026", styles.text);
    console.log("%c💼 Project: Demir6 - Steel & Iron Management System", styles.text);
    console.log("%c━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━", styles.text);
    console.log("%c⚠️  Bu konsol yalnızca geliştiriciler içindir!", styles.subtitle);
    console.log("%c🚫 Bilinmeyen komutları çalıştırmayın!", styles.subtitle);
    console.log("%c━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━", styles.text);

    // ASCII Art imza
    console.log(`
    ╔═══════════════════════════════════════╗
    ║                                       ║
    ║        █████╗ ████████╗ █████╗       ║
    ║       ██╔══██╗╚══██╔══╝██╔══██╗      ║
    ║       ███████║   ██║   ███████║      ║
    ║       ██╔══██║   ██║   ██╔══██║      ║
    ║       ██║  ██║   ██║   ██║  ██║      ║
    ║       ╚═╝  ╚═╝   ╚═╝   ╚═╝  ╚═╝      ║
    ║                                       ║
    ║          Atakan Oral - 2026           ║
    ║                                       ║
    ╚═══════════════════════════════════════╝
    `);

    console.log("%c💡 İletişim: atakan@mentalsoft.net", styles.text);
  }, []);

  return null;
};

export default DeveloperSignature;
