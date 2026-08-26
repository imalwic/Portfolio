import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "../components/ThemeProvider";

export const metadata: Metadata = {
  title: "Imal Wickrama Arachchi",
  description: "Portfolio of Imal Wickrama Arachchi, Computer Science Undergraduate at University of Moratuwa. Full Stack Developer.",
  icons: {
    icon: '/profile.jpeg',
  },
  openGraph: {
    title: "Imal Wickrama Arachchi",
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
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider attribute="data-theme" defaultTheme="dark" enableSystem={false}>
          <div className="noise" aria-hidden="true"></div>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
