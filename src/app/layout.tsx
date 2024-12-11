import type { Metadata } from "next";
import "./globals.css";

import Header from "./components/header/header";
import Footer from "./components/footer/footer";
import PhoneDynamic from "./components/phone-dynamic/phone-dynamic";
import ZaloDynamic from "./components/zalo-dynamic/zalo-dynamic";
import { GoogleAnalytics } from "@next/third-parties/google";
import BackTopDynamic from "./components/backtop-dynamic/backtop-dynamic";
import { Organization, WithContext } from "schema-dts";
import Script from "next/script";
import Head from "next/head";

export const metadata: Metadata = {
  title: "Công Ty Thu Mua Phế Liệu Giá Cao | Tài Lộc Vi Na",
  description:
    "Công Ty Thu Mua Phế Liệu Giá Cao | Tài Lộc Vi Na chuyên thu mua phế liệu, vãi vụn giá cao, thu gôm và xử lý rác thải công nghiệp giá rẻ với mức giá cạnh tranh nhất trên thị trường.",
  keywords:
    "thu mua phế liệu giá cao, thu mua sắt thép, thu mua vải vải vụn, xử lý rác thải",
  verification: {
    google:
      "google-site-verification=lbXrnx37vX692c1HSZ2XT12xQiSHbPvJEWenQxhJdjQ",
  },
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
    <html lang="vi">
      <Head>
        <meta
          name="google-site-verification"
          content="lbXrnx37vX692c1HSZ2XT12xQiSHbPvJEWenQxhJdjQ"
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
      <Script
        id="jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        strategy="lazyOnload"
      />
    </html>
  );
}
