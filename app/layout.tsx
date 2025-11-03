import CookieConsent from "@/components/CookieConsent";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "خدمات دفع الفواتير وإعادة التعبئة",
  description:
    "سهولة، سرعة، وأمان في كل عملية, خدمات دفع الفواتير وإعادة التعبئة  ",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ar">
      <head>
        <head>
          <script
            async
            src="https://www.googletagmanager.com/gtag/js?id=AW-17685063189"
          />
          <script
            dangerouslySetInnerHTML={{
              __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'AW-17685063189');
            `,
            }}
          />
        </head>
      </head>
      <body>
        {children}
        <CookieConsent />
      </body>
    </html>
  );
}
