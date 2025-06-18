import Image from "next/image";
import React from "react";
import Title from "../ui/Titles/Title";
import SmallTitle from "../ui/Titles/SmallTitle";
import EmailSendMessage from "../ui/EmailSendMessage";

const SelfIntroductionSection = () => {
  return (
    <div className="w-full mb-16">
      <div className="bg-primary md:h-fit md:py-8 lg:h-[450px] flex justify-end items-end lg:mt-[260px] rounded-2xl">
        {/* image section */}
        <div className=" lg:flex lg:justify-center hidden lg:w-3/8">
          <Image
            src={"/characters/hiBuddhika.png"}
            width={900}
            height={900}
            alt="Hi I am Buddhika Madusanka"
            className="aspect-auto w-2/3"
          />
        </div>

        {/* text content area */}
        <div className="text-white w-full py-10 px-10 md:py-0 lg:p-0 lg:w-5/8 lg:pb-7 lg:pr-10">
          <div>
            <SmallTitle titleContent="Hello! I am" />
            <SmallTitle titleContent="Buddhika Madusanka" />
          </div>
          <div className="mt-5">
            <p className="text-[14px] md:text-lg">I'm Buddhika Madusanka, an idea creator, designer, and developer passionate about solving real-world problems to improve lives. I transform innovative concepts into practical solutions using creative design and robust code. Embracing new technologies, I build user-focused, impactful applications that inspire. With clarity and purpose, I blend logic and expertise to create sustainable solutions that address everyday challenges. My goal is to craft meaningful experiences that drive progress and empower communities through technology.</p>
          </div>
          <div className="mt-5">
            <EmailSendMessage />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SelfIntroductionSection;
