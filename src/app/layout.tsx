import type { Metadata } from "next";
import "./globals.css";

import Header from "./components/header/header";
import Footer from "./components/footer/footer";
import PhoneDynamic from "./components/phone-dynamic/phone-dynamic";
import ZaloDynamic from "./components/zalo-dynamic/zalo-dynamic";
import { GoogleAnalytics } from "@next/third-parties/google";
import BackTopDynamic from "./components/backtop-dynamic/backtop-dynamic";
import { Organization, WithContext } from "schema-dts";
import Head from "next/head";

export const metadata: Metadata = {
  title: "Tài Lộc Vi Na - Công Ty Thu Mua Phế Liệu Giá Cao",
  description:
    "Tài Lộc Vi Na - Công Ty Thu Mua Phế Liệu Giá Cao chuyên thu mua phế liệu, vãi vụn giá cao, thu gôm và xử lý rác thải công nghiệp giá rẻ với mức giá cạnh tranh nhất trên thị trường.",
  keywords:
    "Tài Lộc Vi Na - Công Ty Thu Mua Phế Liệu Giá Cao, công ty tnhh tài lộc vi na, công ty thu mua phế liệu tài lộc vi na, công ty phế liệu tài lộc vi na, phế liệu tài lộc vi na, thu mua phế liệu, tài lộc vi na, phế liệu, thua mua vải vụn, công ty phế liệu",
};

const jsonLd: WithContext<Organization> = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Thu Mua Phế Liệu Tài Lộc Vi Na",
  url: "https://www.phelieutailocvina.com",
  logo: "https://www.phelieutailocvina.com/favicon.ico",
  image: "https://www.phelieutailocvina.com/address.jpg",
  description:
    "Công ty Thu Mua Phế Liệu Tài Lộc Vi Na chuyên thu mua phế lệu các loại giá cao, thu mua vải vụn số lượng lớn, thu gôm và xử lí rác thải giá rẻ, uy tín, tận tình, chu đáo.",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Khu Phố Hòa Lân 2",
    addressLocality: "Thuận Giao",
    addressRegion: "Bình dương",
    postalCode: "75000",
    addressCountry: "VN",
  },
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+84-989-015-053",
    contactType: "Customer Service",
    availableLanguage: "Vietnamese",
    email: "phelieutailocvina@gmail.com",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </Head>
      <body>
        <Header />
        {children}
        <PhoneDynamic />
        <ZaloDynamic />
        <BackTopDynamic />
        <Footer />
      </body>
      <GoogleAnalytics gaId="G-02KZMDKPZ1" />
      
    </html>
  );
}
