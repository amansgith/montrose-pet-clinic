import Footer from "@/components/Footer";
import Navbar from "../components/Navbar";
import "./styles/globals.css";


export const metadata = {
  title: "",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body >
        <Navbar/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
