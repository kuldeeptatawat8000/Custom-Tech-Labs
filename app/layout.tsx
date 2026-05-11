import type { Metadata } from "next";
import { Inter, Albert_Sans, ABeeZee } from "next/font/google";
import "./globals.css";
import Header from './../components/Header';
import Footer from "@/components/Footer";
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

const albert = Albert_Sans({
  subsets: ["latin"],
  variable: "--font-albert",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

const abeezee = ABeeZee({
  subsets: ["latin"],
  variable: "--font-abeezee",
  weight: "400", // ❗ Only available weight
});;

export const metadata: Metadata = {
  title: "Home Page",
  description: `Technology Built for the Way People Actually Work`,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${albert.variable} ${abeezee.variable} h-full antialiased`}
    >
      <body>
        <div className="w-full min-h-full ">
          <div className="w-[90%] mx-auto bg-white text-black">
            <Header />
            {children}
            <Footer />
          </div>
        </div>
      </body>
    </html>
  );
}
