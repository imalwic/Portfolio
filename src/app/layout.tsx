import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Imal Wickrama Arachchi - Portfolio",
  description: "Portfolio of Imal Wickrama Arachchi, Computer Science Undergraduate at University of Moratuwa. Full Stack Developer.",
  openGraph: {
    title: "Imal Wickrama Arachchi - Portfolio",
    description: "Portfolio of Imal Wickrama Arachchi, Computer Science Undergraduate at University of Moratuwa. Full Stack Developer.",
    url: "https://imalwic.github.io",
    siteName: "Imal Wickrama Arachchi",
    locale: "en_US",
    type: "website",
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
