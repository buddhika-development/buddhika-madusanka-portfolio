import HeroSection from "./components/layouts/HeroSection";
import PersonalityTypes from "./components/layouts/PersonalityTypes";
import ProductionWorkflow from "./components/layouts/ProductionWorkflow";
import SecondUISection from "./components/layouts/SecondUISection";
import SelfIntroductionSection from "./components/layouts/SelfIntroductionSection";

export default function Home() {
  return (
    <div className="w-full h-full overflow-y-scroll">

      {/* hero section */}
      <div className="lg:p-10 w-full h-full">
        <HeroSection />
      </div>


      {/* secondary section */}      
      <div className="px-5 md:px-10">
        <SecondUISection />
      </div>


      {/* self introduction section 
        There incluede about the brief self introduciton and welcome to website
      */}
      <div className="md:px-10">
        <SelfIntroductionSection />
      </div>

      
      {/* product work flow section
        There introduce what is the workflow in product developemtn process
      */}
      <div className="px-5 md:px-10">
        <ProductionWorkflow />
      </div> 


      {/* Character introduction section
        There introduce about the personality types i play to make better products for users
      */}
      <div className="px-5 md:px-10">
        <PersonalityTypes />
      </div>
      
    </div>
  );
}
