import React from "react";

export default function WhyUs() {
  return (
    <div className="snap-start min-h-screen antialiased flex flex-col items-center justify-center py-8 bg-gradient-to-b from-[#181820] via-zinc-900/80 via-80% to-gray-900">
      <div className="max-w-6xl">
        <h1 className="text-center text-5xl text-4xl font-bold">
          Dlaczego My?
        </h1>
        <div className="m-5 mt-14">
          <div className="flex flex-row flex-wrap justify-center">
            <div className="basis-80 bg-sky-900 rounded-2xl p-6 m-5 mx-7 transform transition-transform duration-500 hover:scale-125 hover:-translate-x-12 hover:-translate-y-7">
              <h1 className="text-3xl font-bold">Profesjonalizm</h1>
              <h4 className="mt-1 text-slate-300 text-xl">
                Każdy projekt realizujemy z dbałością o najmniejsze szczegóły.
              </h4>
            </div>
            <div className="basis-96 bg-sky-700 rounded-2xl p-5 m-5 mx-7 transform transition-transform duration-700 hover:scale-125 hover:translate-x-12 hover:-translate-y-7">
              <h1 className="text-3xl font-bold">Innowacyjność</h1>
              <h4 className="mt-1 text-slate-300 text-xl">
                Zawsze jesteśmy na bieżąco z najnowszymi trendami i
                technologiami.
              </h4>
            </div>
            <div className="basis-80 bg-cyan-900 rounded-2xl p-5 m-5 mx-7 transform transition-transform duration-700 hover:scale-125 hover:-translate-x-12 hover:translate-y-7">
              <h1 className="text-3xl font-bold">Elastyczność</h1>
              <h4 className="mt-1 text-slate-300 text-xl">
                Dostosowujemy nasze rozwiązania do indywidualnych potrzeb
                klientów.
              </h4>
            </div>
            <div className="basis-72 bg-blue-900 rounded-2xl p-5 m-5 mt-9 mx-7 transform transition-transform duration-500 hover:scale-125 hover:translate-x-12 hover:translate-y-7">
              <div className="">
                <h1 className="text-3xl font-bold mt-2">Pasja</h1>
                <h4 className="mt-1 text-slate-300 text-xl">
                  Kochamy to, co robimy, i widać to w naszych realizacjach.
                </h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
