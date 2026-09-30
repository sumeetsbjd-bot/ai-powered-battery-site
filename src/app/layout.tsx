import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/context/LanguageContext";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter", display: "swap" });
const poppins = Poppins({ subsets: ["latin"], weight: ["400", "500", "600", "700", "800"], variable: "--font-poppins", display: "swap" });

export const metadata: Metadata = {
  title: "PowerCell Battery Malaysia | Car, Motorcycle & Truck Batteries",
  description: "Malaysia's trusted battery specialist. Car, motorcycle, truck & marine batteries with same-day installation in KL & Selangor. Free delivery, 24/7 emergency roadside service.",
  keywords: "car battery Malaysia, battery shop KL, Amaron battery, Century battery, motorcycle battery, truck battery, same day installation, bateri kereta, kedai bateri",
  openGraph: {
    title: "PowerCell Battery Malaysia",
    description: "Malaysia's Trusted Battery Specialist — Same-Day Installation in KL & Selangor",
    type: "website",
    locale: "en_MY",
    siteName: "PowerCell Battery Malaysia",
  },
  robots: "index, follow",
  alternates: { canonical: "https://powercellbattery.my" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${poppins.variable}`}>
      <head>
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        {/* Google Analytics placeholder */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              // Replace GA_MEASUREMENT_ID with your actual ID
              // gtag('js', new Date());
              // gtag('config', 'GA_MEASUREMENT_ID');
            `,
          }}
        />
        {/* Facebook Pixel placeholder */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              // Replace PIXEL_ID with your actual Facebook Pixel ID
              // !function(f,b,e,v,n,t,s){...}(window,document,'script','https://connect.facebook.net/en_US/fbevents.js');
              // fbq('init', 'PIXEL_ID');
              // fbq('track', 'PageView');
            `,
          }}
        />
        {/* Product Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "AutoPartsStore",
              name: "PowerCell Battery Malaysia",
              description: "Malaysia's trusted battery specialist",
              url: "https://powercellbattery.my",
              telephone: "+60123456789",
              address: {
                "@type": "PostalAddress",
                streetAddress: "No. 15, Jalan SS 15/4D",
                addressLocality: "Subang Jaya",
                addressRegion: "Selangor",
                postalCode: "47500",
                addressCountry: "MY",
              },
              priceRange: "RM85 - RM1100",
              openingHours: "Mo-Sa 08:30-19:00",
            }),
          }}
        />
      </head>
      <body className={`${inter.className} bg-mesh antialiased`}>
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
