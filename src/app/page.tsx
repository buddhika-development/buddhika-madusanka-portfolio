import HeroSection from "./components/layouts/HeroSection";
import SecondUISection from "./components/layouts/SecondUISection";

export default function Home() {
  return (
    <div className="w-full h-full">

      {/* hero section */}
      <div className="lg:p-10 w-full h-full">
        <HeroSection />
      </div>


      {/* secondary section */}      
      <div className="px-10">
        <SecondUISection />
      </div>
      
      
    </div>
  );
}
