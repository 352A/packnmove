import Footer from "./_components/Footer";
import Header from "./_components/Header";
import { MobileNavbar } from "./_components/Navbar";
import "./globals.css";
import { Inter } from "next/font/google";

export const inter = Inter({
  weight: ["400", "600", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>
        <Header />
        <div className="fixed -bottom-1 left-0 z-50 w-full bg-white py-2 shadow-md dark:bg-zinc-900 lg:hidden">
          <MobileNavbar />
        </div>
        <main className="relative dark:bg-zinc-900 dark:bg-gradient-to-r dark:from-zinc-900 dark:to-zinc-800">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
