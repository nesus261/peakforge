import React from "react";

export default function Websites(params: any) {
  const dict = params.dict.home.websites;

  return (
    <div className="snap-start min-h-screen flex flex-col md:flex-row items-center justify-center min-h-screen bg-gradient-to-b from-gray-900 via-gray-900/40 to-fuchsia-950 p-6 ">
      <div className="flex flex-col md:flex-row items-center justify-center min-h-screen p-6 max-w-7xl">
        <div className="relative w-full md:w-1/2 flex justify-center p-4">
          <div className="absolute bottom-0 -mb-8 ml-20 w-11/12 h-4/5 bg-sky-800 rounded-2xl shadow-lg"></div>

          <img
            src="11.png"
            alt={dict.altImg}
            className="w-11/12 max-w-full rounded-2xl shadow-lg relative z-10 transform transition-transform duration-500 hover:scale-105 hover:-translate-y-2"
          />
        </div>
        <div className="mx-8 my-16 mb-96 md:mb-14 w-full md:w-5/12 bg-blue-900 text-white p-6 rounded-2xl shadow-lg transform transition-transform duration-500 hover:scale-105 hover:translate-x-2 hover:-translate-y-2">
          <h1 className="text-2xl md:text-3xl font-bold mb-4">
            {dict.websites}
          </h1>
          <p className="text-lg mb-2">{dict.descTitle}</p>
          <ul className="">
            <li>
              <strong>WordPress:</strong> {dict.wordpress}
            </li>
            <li>
              <strong>React:</strong> {dict.react}
            </li>
            <li>
              <strong>Django:</strong> {dict.django}
            </li>
            <li>
              <strong>Next.js:</strong> {dict.nextjs}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
