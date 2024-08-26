import Link from "next/link";
import React from "react";
import Particles from "./components/particles";

const navigation = [
  { name: "About us", href: "/about" },
  { name: "Contact", href: "/contact" },
];

export default function Home() {
  return (
    <div className="overflow-y-scroll h-screen scroll-smooth snap-y snap-mandatory w-screen">
      <div className="snap-start flex flex-col items-center justify-center h-screen bg-gradient-to-tl from-black via-zinc-600/20 to-black overflow-hidden">
        <nav className="mb-16 animate-fade-in">
          <ul className="flex items-center justify-center gap-4">
            {navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm duration-500 text-zinc-500 hover:text-zinc-300"
              >
                {item.name}
              </Link>
            ))}
          </ul>
        </nav>

        <Particles
          className="absolute inset-0 -z-10 animate-fade-in"
          quantity={100}
        />
        <img
          className="w-80 mb-0.5 animate-title rounded-3xl"
          src="logo2.png"
        />

        <div className="hidden mt-5 w-screen h-px animate-glow md:block animate-fade-left bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" />
        <h1 className="py-3.5 px-0.5 z-10 text-4xl text-transparent duration-1000 bg-white cursor-default text-edge-outline animate-title font-display sm:text-6xl md:text-9xl whitespace-nowrap bg-clip-text ">
          PeakForge
        </h1>
        <div className="hidden w-screen h-px animate-glow md:block animate-fade-right bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" />

        <div className="y-16 text-center animate-fade-in">
          <h2 className="text-sm text-zinc-500 ">
            A place where modern solutions for your business will be created
          </h2>
        </div>
      </div>
      <div className="snap-start h-screen flex flex-col items-center antialiased">
        <h5 className="my-auto text-2xl text-center max-w-2xl mx-8 leading-9">
          We are a dynamic software company specializing in creating modern
          solutions for your business. Our team of young and ambitious
          specialists are technology enthusiasts who are eager to implement
          projects at the highest level.
        </h5>
      </div>
      <div className="snap-start min-h-screen antialiased flex flex-col items-center justify-center py-8 bg-gradient-to-b from-neutral-900 via-zinc-800/20 to-neutral-900">
        <div className="max-w-6xl">
          <h1 className="text-center text-5xl text-4xl font-bold">
            Dlaczego My?
          </h1>
          <div className="m-5 mt-11">
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
      <div className="snap-start min-h-screen">
        <div className="flex flex-col md:flex-row items-center justify-center min-h-screen bg-gradient-to-b from-gray-900 via-zinc-600/20 to-gray-900 p-6">
          <div className="relative w-full md:w-1/2 flex justify-center p-4">
            <div className="absolute bottom-0 -mb-8 ml-16 w-11/12 h-4/5 bg-sky-800 rounded-lg shadow-lg"></div>

            <img
              src="11.png"
              alt="Obrazek"
              className="w-11/12 max-w-full rounded-xl shadow-lg relative z-10 transform transition-transform duration-500 hover:scale-105 hover:-translate-y-2"
            />
          </div>
          <div className="mx-8 my-14 w-full md:w-5/12 bg-blue-900 text-white p-6 rounded-xl shadow-lg transform transition-transform duration-500 hover:scale-105 hover:translate-x-2 hover:-translate-y-2">
            <h1 className="text-2xl md:text-3xl font-bold mb-4">
              Strony internetowe
            </h1>
            <p className="text-lg mb-2">
              Projektujemy i wdrażamy strony internetowe, które nie tylko
              wyglądają atrakcyjnie, ale także są funkcjonalne i responsywne.
              Specjalizujemy się w:
            </p>
            <ul className="list-disc list-inside">
              <li>
                <strong>WordPress:</strong> Idealny wybór dla prostych, jak i
                zaawansowanych stron, które możesz łatwo zarządzać samodzielnie.
              </li>
              <li>
                <strong>React:</strong> Tworzymy dynamiczne i interaktywne
                aplikacje webowe, które zapewniają wyjątkowe doświadczenie
                użytkownika.
              </li>
              <li>
                <strong>Django:</strong> Złożone, skalowalne aplikacje webowe,
                które rosną razem z Twoim biznesem.
              </li>
              <li>
                <strong>Next.js:</strong> Nowoczesny framework oparty na React,
                który pozwala tworzyć wydajne i skalowalne aplikacje internetowe
                z funkcjonalnościami takimi jak renderowanie po stronie serwera
                (SSR) oraz generowanie statycznych stron (SSG).
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
