import Image from "next/image";
import Header from "./components/Header";
import HeroBanner from "./components/HeroBanner";
import FeaturedCategories from "./components/FeaturedCategories";
import EducationalContent from "./components/EducationalContent";

export default function Home() {
  return (
    <div>
      <main>
        <Header />
        <HeroBanner/>
        <FeaturedCategories />


        <EducationalContent />
      </main>
      
    </div>
  );
}
