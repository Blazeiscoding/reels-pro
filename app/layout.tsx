import "./globals.css";
import { Inter } from "next/font/google";
import Providers from "./components/Providers";
import Header from "./components/Header";


const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: "ImageKit Next.js Integration",
  description: "Demo of ImageKit integration with Next.js",
  openGraph: {
    title: "ImageKit Next.js Integration",
    description: "Demo of ImageKit integration with Next.js",
    url: "https://your-domain.com",
    siteName: "ImageKit Demo",
    images: [
      {
        url: "https://ik.imagekit.io/your-imagekit-id/social-preview.jpg",
        width: 1200,
        height: 630,
        alt: "ImageKit and Next.js Integration Preview",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "ImageKit Next.js Integration",
    description: "Demo of ImageKit integration with Next.js",
    images: ["https://ik.imagekit.io/your-imagekit-id/social-preview.jpg"],
  },
};

export const viewport = {
  themeColor: "#ffffff",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased min-h-screen flex flex-col`}>
        <Providers>
          {/* Skip navigation link for accessibility */}
          <a
            href="#main-content"
            className="sr-only focus:not-sr-only focus:absolute focus:p-2 focus:m-2 focus:bg-white focus:text-black focus:rounded-lg transition-all"
          >
            Skip to main content
          </a>
          
          <Header />
          
          <main
            id="main-content"
            className="flex-1 max-w-7xl mx-auto w-full px-4 py-8 lg:py-12"
          >
            {children}
          </main>
          
          
        </Providers>
      </body>
    </html>
  );
}