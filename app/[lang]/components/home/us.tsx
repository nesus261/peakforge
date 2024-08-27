import React from "react";

export default function Us(params: any) {
  const dict = params.dict;

  return (
    <div className="snap-start h-screen flex flex-col items-center antialiased bg-gradient-to-b from-black via-zinc-800/5 to-indigo-950">
      <h5 className="my-auto text-2xl text-center max-w-2xl mx-8 leading-9">
        {dict.home.us.text}
      </h5>
    </div>
  );
}
