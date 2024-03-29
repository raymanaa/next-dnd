import { Inter } from "next/font/google";
import PlausibleProvider from "next-plausible";
import { getSEOTags } from "@/libs/seo";
import ClientLayout from "@/components/LayoutClient";
import config from "@/config";
import "./globals.css";
import {Analytics} from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next"

const font = Inter({ subsets: ["latin"] });

export const viewport = {
  // Will use the primary color of your theme to show a nice theme color in the URL bar of supported browsers
  themeColor: config.colors.main,
  width: "device-width",
  initialScale: 1,
};

// This adds default SEO tags to all pages in our app.
// You can override them in each page passing params to getSOTags() function.
export const metadata = getSEOTags();

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme={config.colors.theme} className={font.className}>
      {config.domainName && (
          <head>
            <script async
                    src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7178166368516222"
                    crossOrigin="anonymous">
            </script>

            <PlausibleProvider domain={config.domainName}/>
          </head>
      )}
      <body>
      {/* ClientLayout contains all the client wrappers (Crisp chat support, toast messages, tooltips, etc.) */}
      <Analytics />
        <SpeedInsights />
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
