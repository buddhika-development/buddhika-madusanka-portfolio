import React from "react";
import { GrValidate } from "react-icons/gr";

const WorkflowCard = ({
  title = "workflow",
  content = "this is workflow content",
  icon = <GrValidate />
}) => {
  return (
    <div className="flex flex-col items-center gap-3 bg-white/70 px-5 py-8 rounded-2xl">
      <div className="w-[100px] h-[100px] bg-background rounded-full flex justify-center items-center text-4xl">
        {icon}
      </div>
      <h3 className="font-anton text-2xl">{title}</h3>
      <p className="w-2/3 text-center">{content}</p>
    </div>
  );
};

export default WorkflowCard;
