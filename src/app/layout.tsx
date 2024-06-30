import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Mockmint",
  description: "Create mock data for your projects quickly and easily. Mockmint helps you generate fake data for testing and development. Save time and improve your workflow this easy-to-use mock data generator.",
  keywords: "mock data, data generator, fake data, test data, development tools",
  authors: [{ name: "Prateek Keshari" }],
  openGraph: {
    title: "Mockmint – mock data generator",
    description: "Generate mock data for your projects quickly and easily",
    type: "website",
    url: "https://mockmint.prateekkeshari.com",
    images: [
      "https://mockmint.prateekkeshari.com/mockmint-og.jpg"
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@prkeshari",
    creator: "@prkeshari",
  },
  icons: {
    icon: "/mockmint.svg",
    apple: "/apple-touch-icon.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href="https://mockmint.prateekkeshari.com" />
        <link rel="icon" href="/mockmint.svg" type="image/svg+xml" />
      </head>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}