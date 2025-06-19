import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-poppins',
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900']
});


export const metadata = {
  title: "Portfolio - Priyanshu Prajapti",
  description: "Its a portfolio of Priyanshu, A full stack dev.",
};

export default function RootLayout({ children }) {

  return (
    <html lang="en">
      
      <body
        className="overflow-x-hidden absolute top-0 z-[-2] h-screen max-w-[100vw] w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]">
          <div className="w-full max-w-[100vw] overflow-x-hidden">
        <Navbar/>
        {children}
        <Footer/>
            </div>
         
      </body>
    </html>
  );
}
