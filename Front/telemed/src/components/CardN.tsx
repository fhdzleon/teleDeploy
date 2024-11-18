import React from "react";

const CardN = ({ title, text }: { title: string; text: string }) => {
  return (
    <div className="bg-gray-200 w-full max-w-sm h-auto rounded-xl">
      <div className="flex flex-col items-center justify-center">
        <div className="bg-gray-300 h-32 w-32 rounded-full mt-10"></div>
        <div className="p-10 flex flex-col space-y-5">
          <h3 className="font-medium text-center">{title}</h3>
          <p className="text-center">{text}</p>
        </div>
      </div>
    </div>
  );
};

export default CardN;
