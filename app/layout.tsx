import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });
const meta = {
  title: "Nextjs Meta Demo Title",
  description: "Nextjs meta demo description.",
  image:
    "https://dummyimage.com/600x480/000/fff.jpg&text=this+home",
};

export const metadata: Metadata = {
  title: meta.title,
  description: meta.description,
  openGraph: {
    title: meta.title,
    description: meta.description,
    type: "website",
    images: [{ url: meta.image }],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
