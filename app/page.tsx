import Navbar from "@/components/navbar";
import Hero from "@/components/hero";
import Opportunities from "@/components/Opportunities";
import CityPreferenceSection from "@/components/citypreference";
import Featuredproperty from "@/components/Featuredproperty";
import ExploreCategories from "@/components/ExploreCategories";
import WhyChoose from "@/components/WhyChoose";
import { Footer } from "@/components/Footer";


export default function Home() {
  return (
    <main className="min-h-screen ">
      <Navbar />
      <Hero />
      <Opportunities />
      <CityPreferenceSection />
      <Featuredproperty/>
      <ExploreCategories/>
      <WhyChoose/>
      <Footer/>
    
    </main>
  );
}
