import { Geist, Geist_Mono } from "next/font/google";
import { Alumni_Sans } from "next/font/google";
import "./globals.css";
import  { Navbar } from './components/Navbar/Navbar';
import { Footer } from './components/footer/Footer';
import { CartProvider } from "./context/CartContext";



const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const alumniSansSC = Alumni_Sans({
  variable: "--font-alumni-sans",
  subsets: ["latin"],
})

export const metadata = {
  title: "Poppo Mini Mart",
  description: "Based off Yakuza Kiwami 2",
  icons: {
    icon: "/Images/favicon.ico",
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${alumniSansSC.variable} antialiased`}
      >
        <CartProvider>
          <div className='flex flex-col min-h-screen'>
            <Navbar />
            <main className='flex-grow'>{children}</main>
            <Footer />
          </div>
        </CartProvider>
        
      </body>
    </html>
  );
}
