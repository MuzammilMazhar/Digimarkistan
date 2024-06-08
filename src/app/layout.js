import { Inter } from "next/font/google";
import "./globals.css";
import Footer from "@/components/Footer";
import Navigation from "@/components/Navigation";
import BlogSection from "@/components/BlogSection";
import Footer1 from "@/components/Footer1";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navigation />
        {children}
        <Footer1/>
        {/* <BlogSection/> */}
        {/* <Footer/> */}
        </body>
    </html>
  );
}
