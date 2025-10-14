import { Inter, Mona_Sans } from "next/font/google";
import { ReactLenis } from 'lenis/react'
import "./globals.css";

const inter = Inter({
  variable: "--font-inter-sans",
  subsets: ["latin"],
});

const monaSans = Mona_Sans({
  variable: "--font-mona-sans",
  subsets: ["latin"],
});

export const metadata = {
  title: "Venus Studio - A Creative Agency Based in Mumbai",
  description: "A Creative Agency which develop product up to your expectation.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${monaSans.variable} antialiased`}
      >
        <ReactLenis />
        {children}
      </body>
    </html>
  );
}
