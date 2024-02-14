import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Todo App | Dima",
  description: "A simple fullstack todo app",

  openGraph: {
    title: "Todo App | Dima",
    description: "A simple fullstack todo app",
    images: [
      {
        url: "https://og-image.vercel.app/Todo%20App%20%7C%20Dima.png?theme=dark&md=1&fontSize=100px&images=https%3A%2F%2Fog-image.vercel.app%2F%2FTodo%2520App%2520%257C%2520Dima.png%3Ftheme%3Ddark%26md%3D1%26fontSize%3D100px",
        width: 1200,
        height: 630,
        alt: "Todo App | Dima",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} bg-slate-800 text-slate-100 container mx-auto p-4`}
      >
        {children}
      </body>
    </html>
  );
}
