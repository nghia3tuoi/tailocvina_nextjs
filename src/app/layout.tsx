import type { Metadata } from "next";
import "./globals.css";

import Header from "./components/header/header";
import Footer from "./components/footer/footer";
import PhoneDynamic from "./components/phone-dynamic/phone-dynamic";
import ZaloDynamic from "./components/zalo-dynamic/zalo-dynamic";
import { GoogleAnalytics } from "@next/third-parties/google";
import BackTopDynamic from "./components/backtop-dynamic/backtop-dynamic";

export const metadata: Metadata = {
  title: "Tài Lộc Vi Na - Công Ty Thu Mua Phế Liệu Giá Cao",
  description:
    "Tài Lộc Vi Na - Công Ty Thu Mua Phế Liệu Giá Cao chuyên thu mua phế liệu, vãi vụn giá cao, thu gôm và xử lý rác thải công nghiệp giá rẻ với mức giá cạnh tranh nhất trên thị trường.",
  keywords:
    "Tài Lộc Vi Na - Công Ty Thu Mua Phế Liệu Giá Cao, công ty tnhh tài lộc vi na, công ty thu mua phế liệu tài lộc vi na, công ty phế liệu tài lộc vi na, phế liệu tài lộc vi na, thu mua phế liệu, tài lộc vi na, phế liệu, thua mua vải vụn, công ty phế liệu",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
        <PhoneDynamic />
        <ZaloDynamic />
        <BackTopDynamic/>
        <Footer />
      </body>
      <GoogleAnalytics gaId="G-02KZMDKPZ1" />
    </html>
  );
}
