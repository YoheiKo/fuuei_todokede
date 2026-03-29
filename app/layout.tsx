// app/layout.tsx
import type { Metadata, Viewport } from "next";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: "なないろ風営届出サポート | 映像送信型・無店舗型性風俗特殊営業の届出支援",
  description:
    "映像送信型性風俗特殊営業・無店舗型性風俗特殊営業の届出手続きを行政書士がサポート。書類作成から警察署への届出まで丁寧に対応。",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja" suppressHydrationWarning>
      <head>
        {/* Google Fonts */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@400;500;700&display=swap"
          rel="stylesheet"
        />

        {/* Font Awesome */}
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
        />
      </head>
      <body className="font-sans antialiased text-gray-700 bg-gray-50">
        <Header />
        <main className="pt-12 flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
