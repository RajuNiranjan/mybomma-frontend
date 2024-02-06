import { Inter } from "next/font/google";
import "./globals.css";
import { GlobalContextProvider } from "@/context/context";
import Navbar from "@/components/navbar/navbar";
import Footer from "@/components/footer/footer";
import ShowNavBar from "@/components/showNavBar/showNavBar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "mybomma",
  description: "watch latest movies here",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <GlobalContextProvider>
          <div className="container m-auto flex flex-col h-screen justify-between">
            <ShowNavBar>
              <Navbar />
            </ShowNavBar>
            <div className="px-5">{children}</div>
            <ShowNavBar>
              <Footer />
            </ShowNavBar>
          </div>
        </GlobalContextProvider>
      </body>
    </html>
  );
}
