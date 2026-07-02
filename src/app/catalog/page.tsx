import Navbar from "@/components/Navbar";
import ProductCatalog from "@/components/ProductCatalog";
import Footer from "@/components/Footer";
import WhatsAppFAB from "@/components/WhatsAppFAB";
import AIAssistant from "@/components/AIAssistant";
import Loader from "@/components/Loader";
import SmoothScroll from "@/components/SmoothScroll";
import CustomCursor from "@/components/CustomCursor";
import ScrollProgress from "@/components/ScrollProgress";

export const metadata = {
  title: "Showroom Catalog | Anas & Sons Jewellers",
  description: "Explore Okhla's largest collection of fine gold, diamond, and sterling silver jewellery. Filter by price, material, purity, and enquire directly on WhatsApp.",
};

export default function CatalogPage() {
  return (
    <SmoothScroll>
      <Loader />
      <CustomCursor />
      <ScrollProgress />
      <Navbar />
      <main className="w-full overflow-x-hidden pt-28 bg-noir">
        <ProductCatalog />
      </main>
      <Footer />
      <WhatsAppFAB />
      <AIAssistant />
    </SmoothScroll>
  );
}
