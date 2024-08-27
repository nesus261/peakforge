import React from "react";

export default function WhyUs(params: any) {
  const dict = params.dict.home.whyUs;

  return (
    <div className="snap-start min-h-screen antialiased flex flex-col items-center justify-center py-8 bg-gradient-to-b from-indigo-950 via-zinc-900/80 via-80% to-gray-900">
      <div className="max-w-6xl">
        <h1 className="text-center text-5xl text-4xl font-bold">
          {dict.whyUs}
        </h1>
        <div className="m-5 mt-14 mb-96 md:mb-5">
          <div className="flex flex-row flex-wrap justify-center">
            <div className="basis-80 bg-sky-900 rounded-2xl p-6 m-5 mx-7 transform transition-transform duration-500 hover:scale-105 md:hover:scale-125 hover:-translate-x-5 md:hover:-translate-x-12 hover:-translate-y-7">
              <h1 className="text-3xl font-bold">{dict.professionalism}</h1>
              <h4 className="mt-1 text-slate-300 text-xl">
                {dict.professionalismDesc}
              </h4>
            </div>
            <div className="basis-96 bg-sky-700 rounded-2xl p-5 m-5 mx-7 transform transition-transform duration-700 hover:scale-105 md:hover:scale-125 hover:translate-x-5 md:hover:translate-x-12 hover:-translate-y-7">
              <h1 className="text-3xl font-bold">{dict.innovation}</h1>
              <h4 className="mt-1 text-slate-300 text-xl">
                {dict.innovationDesc}
              </h4>
            </div>
            <div className="pt-6 basis-80 bg-cyan-900 rounded-2xl p-5 m-5 mx-7 transform transition-transform duration-700 hover:scale-105 md:hover:scale-125 hover:translate-x-5 md:hover:-translate-x-12 hover:translate-y-7">
              <h1 className="text-3xl font-bold">{dict.flexibility}</h1>
              <h4 className="mt-1 text-slate-300 text-xl">
                {dict.flexibilityDesc}
              </h4>
            </div>
            <div className="mb-10 basis-72 bg-blue-900 rounded-2xl p-5 m-5 mt-9 mx-7 transform transition-transform duration-500 hover:scale-105 md:hover:scale-125 hover:translate-x-5 md:hover:translate-x-12 hover:translate-y-3 md:hover:translate-y-7">
              <div className="">
                <h1 className="text-3xl font-bold mt-2">{dict.passion}</h1>
                <h4 className="mt-1 text-slate-300 text-xl">
                  {dict.passionDesc}
                </h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
