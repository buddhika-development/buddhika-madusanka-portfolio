import React from "react";
import MainTitle from "../ui/Titles/MainTitle";
import ParagraphText from "../ui/ParagraphText";
import Image from "next/image";
import EmailSendMessage from "../ui/EmailSendMessage";

const HeroSection = () => {
  return (
    <div className="bg-primary w-full h-full rounded-4xl px-20 md:flex overflow-hidden">
      {/* text section 
      There need to include welcome text and attractive text about personality
      */}
      <div className="text-white h-full flex items-center w-3/5">
        {/* centerd text content
        make center text in height section
        */}
        <div>
          <div className="md:w-10/12">
            <MainTitle titleContent="LET’S RECREATE THE DIGITAL WORLD" />
          </div>
          <div className="mt-3 md:w-7/12">
            <ParagraphText textContent="I don’t just code—I question, imagine, and rebuild. From abstract ideas to living systems, I craft digital experiences that challenge convention and awaken possibility. This isn’t evolution. It’s reinvention." />
          </div>

          {/* Call to action butotons
            for engage with the users of the website */}
          <div className="mt-10">
            <EmailSendMessage />
          </div>
        </div>
      </div>

      {/* image section 
      There need to include image to get attraction with the background glow
      */}
      <div className="w-2/5 h-full flex justify-center items-end relative">
        <div className="background-glow"></div>
        <Image
          src={"/characters/heroSectionBoyImage.png"}
          width={894}
          height={768}
          alt="Hello! I am Buddhika Madusanka"
          className="aspect-auto w-full z-10"
        />
      </div>
    </div>
  );
};

export default HeroSection;
