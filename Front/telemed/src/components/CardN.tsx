import Image from "next/image";
import React from "react";

const CardN = ({ title, text, url }: { title: string; text: string; url: string }) => {
  return (
    <div className="bg-white w-full max-w-sm h-auto rounded-xl shadow-xl">
      <div className="flex flex-col items-center justify-center">
        <div style={{backgroundColor: "#DEDCFF"}} className="h-32 w-32 rounded-full mt-10 flex justify-center items-center">
          <Image src={url} alt={`${url}icon`} width={50} height={50} />
        </div>
        <div className="p-10 flex flex-col space-y-5">
          <h3 className="font-bold text-center">{title}</h3>
          <p className="text-center font-normal">{text}</p>
        </div>
      </div>
    </div>
  );
};

export default CardN;
