import type { Metadata } from "next";
import "./globals.css";
import Header from "./components/header/header";
import Footer from "./components/footer/footer";

export const metadata: Metadata = {
  title: "Thu Mua Phế Liệu Tài Lộc Vi Na",
  description:
    "Công Ty TNHH Tài Lộc Vi Na chuyên thu mua phế liệu, vãi vụn giá cao, hỗ trợ xử lý rác thải công nghiệp uy tín hàng đầu, hỗ trợ thu gom tận nơi với mức giá cạnh tranh nhất trên thị trường.",
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
        <Footer />
      </body>
    </html>
  );
}
