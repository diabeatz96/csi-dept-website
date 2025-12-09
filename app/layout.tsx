import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import TopBanner from "@/components/top-banner";
import SmoothScrollHandler from "@/components/smooth-scroll-handler";
import NavbarEdu from "@/components/navbar-edu";
import { SearchProvider, SearchCommand } from "@/components/search";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#0f172a" },
  ],
};

export const metadata: Metadata = {
  metadataBase: new URL('https://csi-cs-dept.vercel.app'),
  title: {
    default: "Computer Science Department | CUNY College of Staten Island",
    template: "%s | CSI Computer Science"
  },
  description: "The Computer Science Department at CUNY College of Staten Island offers undergraduate and graduate programs in Computer Science, Information Systems, and related fields. Explore our degree programs, faculty research, student resources, and career opportunities.",
  keywords: [
    "CUNY College of Staten Island",
    "CSI Computer Science",
    "Computer Science Department",
    "Computer Science Degree",
    "BS Computer Science",
    "MS Computer Science",
    "PhD Computer Science",
    "Information Systems",
    "Computer Science Programs",
    "CUNY CS",
    "Staten Island Computer Science",
    "Computer Science Education",
    "CS Faculty",
    "Computer Science Research",
    "ABET Accredited",
    "Computer Science Courses",
    "CS Undergraduate",
    "CS Graduate Programs"
  ],
  authors: [{ name: "CUNY College of Staten Island - Computer Science Department" }],
  creator: "CUNY College of Staten Island",
  publisher: "CUNY College of Staten Island",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://csi-cs-dept.vercel.app",
    siteName: "CSI Computer Science Department",
    title: "Computer Science Department | CUNY College of Staten Island",
    description: "Explore undergraduate and graduate programs in Computer Science at CUNY College of Staten Island. ABET-accredited programs, cutting-edge research, and career-focused education.",
    images: [
      {
        url: "/csi-blue-logo.png",

        alt: "CUNY College of Staten Island - Computer Science Department",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Computer Science Department | CUNY College of Staten Island",
    description: "Explore undergraduate and graduate programs in Computer Science at CUNY College of Staten Island.",
    images: ["/csi-blue-logo.png"],
    creator: "@CUNY",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [
      '/csi-blue-logo.png'
    ],
    apple: [
      { url: "/csi-blue-logo.png", sizes: "180x180", type: "image/png" },
    ],
  },
  alternates: {
    canonical: "https://csi-cs-dept.vercel.app",
  },
  category: "Education",
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <SearchProvider>
          {/* Skip Navigation Link - Accessibility */}
          <a
            href="#main-content"
            className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:bg-white focus:px-4 focus:py-2 focus:text-slate-900 focus:font-semibold focus:rounded-md focus:shadow-lg focus:ring-2 focus:ring-blue-600"
          >
            Skip to main content
          </a>

          <SmoothScrollHandler />
          {/* <TopBanner /> */}
          <NavbarEdu />
          <main id="main-content" tabIndex={-1}>
            {children}
          </main>
          <Footer />
          <SearchCommand />
        </SearchProvider>
      </body>
    </html>
  );
}
