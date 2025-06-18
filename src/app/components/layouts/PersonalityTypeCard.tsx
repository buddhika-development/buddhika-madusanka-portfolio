import Image from "next/image";
import React from "react";

const PersonalityTypeCard = ({
  image = "/characters/hiBuddhika.png",
  alt_text = "Hello buddhika",
  character = "Designer"
}) => {
  return (
    <div className="bg-primary h-fit md:h-[200px] lg:h-[300px] flex justify-center items-end lg:mt-[200px] rounded-2xl md:mt-[200px]">
      <div className="flex flex-row-reverse items-center justify-center md:flex md:flex-col md:items-center md:justify-center w-full">
        <Image
          src={image}
          width={900}
          height={900}
          alt= {alt_text}
          className="aspect-auto w-2/5 md:w-2/4"
        />
        <h1 className="font-anton text-3xl text-white my-5 text-shadow-lg">{character}</h1>
      </div>
    </div>
  );
};

export default PersonalityTypeCard;
