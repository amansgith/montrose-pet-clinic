import About from "@/components/homepage/About";
import BlogSection from "@/components/homepage/Blog";
import CTA from "@/components/homepage/CTA";
import Hero from "@/components/homepage/Hero";
import Services from "@/components/homepage/Services";
import Testimonials from "@/components/homepage/Testimonials";
import ClinicTour from "@/components/homepage/Tour";

export default function Home() {
  return (
    <>
    <Hero/>
    <About/>
    <Services/>
    <ClinicTour/>
    <Testimonials/>
    <BlogSection/>
    <CTA/>
    </>
  );
}
