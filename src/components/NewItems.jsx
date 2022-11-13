import React from "react";

export default function NewItems() {
  return (
    <div className="bg-[#00001a] grow px-6  text-white w-full self-stretch">
      <p className="text-4xl  pt-8 tracking-widest text-[#f1ab55] font-bold">
        New
      </p>
      <div className="mt-8  border-b border-b-[#5d5f79] pb-8">
        <h6 className="font-bold cursor-pointer hover:text-[#f1ab55] text-xl">
          Hydrogen VS Electric Cars
        </h6>
        <p className="mt-2 text-[#c1c2cf] ">
          Will hydrogen fueled cars ever catch up to EVs?
        </p>
      </div>
      <div className="mt-7  border-b border-b-[#5d5f79] pb-8">
        <h6 className="font-bold cursor-pointer hover:text-[#f1ab55] text-xl">
          The Downsides of AI Artistry
        </h6>
        <p className="mt-2 tracking-tight text-[#c1c2cf]">
          What are the possible adverse effect of on-demand AI image generation?
        </p>
      </div>
      <div className="mt-7   pb-8">
        <h6 className="font-bold cursor-pointer hover:text-[#f1ab55] text-xl ">
          Is VC Funding Drying Up?
        </h6>
        <p className="mt-2 tracking-tight text-[#c1c2cf]">
          Private funding by VC firms is down 50% YOY. We take a look at what
          that means
        </p>
      </div>
    </div>
  );
}
