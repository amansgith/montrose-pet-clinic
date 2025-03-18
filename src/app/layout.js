import Footer from "@/components/Footer";
import Navbar from "../components/Navbar";
import "./styles/globals.css";

export const metadata = {
  title: "Montrose Pet Clinic - Beaumont, AB",
  description: "Montrose Pet Clinic provides top-notch veterinary care for your beloved pets in Beaumont, AB. From routine check-ups to emergency services, our experienced team is dedicated to ensuring your pets receive the best care possible.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
      </head>
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}