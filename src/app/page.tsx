import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Collections from "@/components/Collections";
import FeaturedProducts from "@/components/FeaturedProducts";
import Heritage from "@/components/Heritage";
import Gallery from "@/components/Gallery";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import Showroom from "@/components/VisitUs";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import WhatsAppFAB from "@/components/WhatsAppFAB";
import AIAssistant from "@/components/AIAssistant";
import Loader from "@/components/Loader";
import SmoothScroll from "@/components/SmoothScroll";
import CustomCursor from "@/components/CustomCursor";
import ScrollProgress from "@/components/ScrollProgress";
import { testimonials } from "@/config/content";

export default function Home() {
  return (
    <SmoothScroll>
      <Loader />
      <CustomCursor />
      <ScrollProgress />
      <Navbar />
      <main className="w-full overflow-x-hidden">
        <Hero />
        {/* Gold accent divider — Hero → Collections */}
        <div className="gold-line opacity-30 mx-10 md:mx-20" />
        <Collections />
        <FeaturedProducts />
        <Heritage />
        <Gallery />
        {/* Only render Testimonials when real reviews exist */}
        {testimonials.length > 0 && <Testimonials />}
        {/* Gold accent divider — FAQ → Visit Us */}
        <FAQ />
        <div className="gold-line opacity-30 mx-10 md:mx-20" />
        <Showroom />
        <Contact />
      </main>
      <Footer />
      <WhatsAppFAB />
      <AIAssistant />
    </SmoothScroll>
  );
}

