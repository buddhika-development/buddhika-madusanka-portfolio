import React from "react";
import MainTitle from "../ui/Titles/MainTitle";
import ParagraphText from "../ui/ParagraphText";
import Image from "next/image";
import EmailSendMessage from "../ui/EmailSendMessage";

const HeroSection = () => {
  return (
    <div className="bg-primary w-full h-full p-8 flex md:px-20 md:flex-col md:overflow-x-scroll
                    lg:flex-row lg:rounded-4xl ">
      {/* text section 
      There need to include welcome text and attractive text about personality
      */}
      <div className="text-white h-full flex items-center w-full md:mb-[-00px] lg:mb-0 md:z-40 lg:w-3/5">
        {/* centerd text content
        make center text in height section
        */}
        <div>
          <div className="w-full lg:w-10/12">
            <MainTitle titleContent="LET’S RECREATE THE DIGITAL WORLD" />
          </div>
          <div className="mt-3 lg:w-7/12">
            <ParagraphText textContent="I don’t just code—I question, imagine, and rebuild. From abstract ideas to living systems, I craft digital experiences that challenge convention and awaken possibility. This isn’t evolution. It’s reinvention." />
          </div>

          {/* Call to action butotons
            for engage with the users of the website */}
          <div className="mt-10 w-full flex justify-center lg:justify-start">
            <EmailSendMessage />
          </div>
        </div>
      </div>

      {/* image section 
      There need to include image to get attraction with the background glow
      */}
      <div className="lg:w-2/5 h-full w-full justify-center items-end relative md:flex hidden md:z-0">
        <div className="background-glow w-[800px] h-[800px]"></div>
        <Image
          src={"/characters/heroSectionBoyImage.png"}
          width={894}
          height={768}
          alt="Hello! I am Buddhika Madusanka"
          className="aspect-auto md:w-2/3 lg:w-full z-10"
        />
      </div>
    </div>
  );
};

export default HeroSection;
