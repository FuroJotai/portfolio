import type { Metadata } from "next"
import { Inter, Sora } from "next/font/google"
import "./globals.css"
import SpotlightBackground from "@/components/SpotlightBackground"

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
        <SpotlightBackground /> {/* ✅ глобальный фон */}
        {children}
      </body>
    </html>
  )
}
