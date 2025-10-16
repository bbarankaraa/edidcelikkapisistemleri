import { Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Topbar from "@/components/Topbar";
import CallBubble from "@/components/CallBubble";
import WPButton from "@/components/WPButton";
import { siteMetadata } from "@/lib/siteMetadata";

const poppins = Poppins({
  variable: "--font-poppins",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
});

export const metadata = {
  title: {
    template: `%s | ${siteMetadata.title}`,
    default: siteMetadata.title,
  },
  description: siteMetadata.description,
  keywords: siteMetadata.keywords,
  openGraph: {
    title: siteMetadata.title,
    description: siteMetadata.description,
    url: siteMetadata.siteUrl,
    siteName: siteMetadata.title,
    images: [`${siteMetadata.siteUrl}${siteMetadata.socialBanner}`],
    locale: siteMetadata.locale,
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="tr">
      <body className={`${poppins.variable} antialiased`}>
        <CallBubble />
        <WPButton />
        <Topbar />
        <Navbar />
        {children}
        <Footer />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              name: "Edid Çelik Kapı Sistemleri",
              url: "https://www.edidcelikkapisistemleri.com",
              telephone: ["+90 501 226 26 64"],
              address: {
                "@type": "PostalAddress",
                addressLocality: "İstanbul",
                addressCountry: "TR",
              },
              openingHours: "Mo-Su 00:00-23:59",
              areaServed: "İstanbul",
              priceRange: "₺₺",
              keywords:
                "çelik kapı, kapı sistemleri, çelik kapı modelleri, güvenlik kapısı, modern çelik kapı, daire kapısı, villa kapısı, dış kapı, iç kapı, İstanbul çelik kapı, özel ölçü kapı, dekoratif çelik kapı",
              description:
                "Edid Çelik Kapı Sistemleri — İstanbul genelinde güvenli, estetik ve dayanıklı çelik kapı çözümleri sunan profesyonel kapı sistemleri firması.",
              image: "https://www.edidcelikkapisistemleri.com/logo.png",
              sameAs: [
                "https://www.instagram.com/edidcelikkapi",
                "https://www.facebook.com/edidcelikkapi",
              ],
            }),
          }}
        />
      </body>
    </html>
  );
}
