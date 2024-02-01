import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { GeistSans } from 'geist/font/sans';
import { GeistMono } from 'geist/font/mono';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Animesh Nepal",
  description: "Backend Engineer",
};

const cx = (...classes: string[]) => classes.filter(Boolean).join(' ');

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en"
    className={cx(
      'text-white bg-[#111010] dark:text-white dark:bg-[#111010]',
      GeistSans.variable,
      GeistMono.variable
    )}
    >
      <body className="antialiased max-w-3xl mb-40 flex flex-col md:flex-row mx-4 mt-8 lg:mx-auto">
        <main className="flex-auto min-w-0 mt-6 flex flex-col px-2 md:px-0">
            {children}
        </main>
      </body>
      
    </html>
  );
}