import Footer from "./_components/Footer";
import Header2 from "./_components/Header2";
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
        <div className="block max-lg:hidden">
          <Header2 />
          <div className="dark:bg-zinc-900 dark:bg-gradient-to-r dark:from-zinc-900 dark:to-zinc-800">
            {children}
          </div>

          <Footer />
        </div>
        <div className="flex h-screen w-full items-center justify-center bg-zinc-900 bg-gradient-to-r from-zinc-900 to-zinc-800 text-center lg:hidden">
          <h1 className="w-11/12 text-6xl font-bold leading-relaxed text-zinc-100">
            Mobile version coming soon!
          </h1>
        </div>
      </body>
    </html>
  );
}
