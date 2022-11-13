import React from "react";

export default function NewItems() {
  return (
    <div className="bg-purple-900 grow px-6  text-white w-full self-stretch">
      <p className="text-4xl  pt-8 tracking-widest font-bold">New</p>
      <div className="mt-8  border-b border-b-white pb-8">
        <h6 className="font-bold text-xl">Hydrogen VS Electric Cars</h6>
        <p className="mt-2">Will hydrogen fueled cars ever catch up to EVs?</p>
      </div>
      <div className="mt-7  border-b border-b-white pb-8">
        <h6 className="font-bold text-xl">The Downsides of AI Artistry</h6>
        <p className="mt-2 tracking-tight">
          What are the possible adverse effect of on-demand AI image generation?
        </p>
      </div>
      <div className="mt-7  border-b border-b-white pb-8">
        <h6 className="font-bold text-xl">Is VC Funding Drying Up?</h6>
        <p className="mt-2 tracking-tight">
          Private funding by VC firms is down 50% YOY. We take a look at what
          that means
        </p>
      </div>
    </div>
  );
}
