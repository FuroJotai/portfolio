import type { Metadata, Viewport } from "next"
import { Inter, Sora } from "next/font/google"
import "./globals.css"
import SpotlightBackground from "@/components/SpotlightBackground"
import DisableScrollRestore from "@/components/DisableScrollRestore"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
})

const sora = Sora({
  subsets: ["latin"],
  variable: "--font-sora",
  display: "swap",
})

export const metadata: Metadata = {
  title: "Portfolio",
  description: "My portfolio website",
  icons: {
    icon: "/across_pixels_favicon.png",
  },
}

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${inter.variable} ${sora.variable} antialiased bg-background text-foreground`}
      >
        <SpotlightBackground />
        <DisableScrollRestore /> {/* 🔹 вот тут включаем сброс скролла */}
        <div className="mx-auto w-full max-w-none 3xl:max-w-wide 4xl:max-w-ultra ">
          {children}
        </div>
      </body>
    </html>
  )
}
