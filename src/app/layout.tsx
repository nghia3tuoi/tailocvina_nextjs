import type { Metadata } from "next";
import "./globals.css";

import Header from "./components/header/header";
import Footer from "./components/footer/footer";
import PhoneDynamic from "./components/phone-dynamic/phone-dynamic";
import ZaloDynamic from "./components/zalo-dynamic/zalo-dynamic";

export const metadata: Metadata = {
  title: "Thu Mua Phế Liệu Tài Lộc Vi Na",
  description:
    "Công Ty TNHH Tài Lộc Vi Na chuyên thu mua phế liệu, vãi vụn giá cao, thu gôm và xử lý rác thải công nghiệp giá rẻ với mức giá cạnh tranh nhất trên thị trường.",
  keywords:
    "thu mua phế liệu, thu mua hàng tồn, thu mua vãi vụn, giá phế liệu, công ty thu mua phế liệu, thu gom phế liệu tận nơi, thu mua phế liệu giá cao, thu mua vải vụn giá cao, thu mua hàng tồn giá cao",
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

        <Footer />
      </body>
    </html>
  );
}
