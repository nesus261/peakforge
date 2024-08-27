import React from "react";

export default function Websites() {
  return (
    <div className="snap-start min-h-screen flex flex-col md:flex-row items-center justify-center min-h-screen bg-gradient-to-b from-gray-900 via-gray-900/40 to-neutral-900 p-6 ">
      <div className="flex flex-col md:flex-row items-center justify-center min-h-screen p-6 max-w-7xl">
        <div className="relative w-full md:w-1/2 flex justify-center p-4">
          <div className="absolute bottom-0 -mb-8 ml-20 w-11/12 h-4/5 bg-sky-800 rounded-2xl shadow-lg"></div>

          <img
            src="11.png"
            alt="Obrazek"
            className="w-11/12 max-w-full rounded-2xl shadow-lg relative z-10 transform transition-transform duration-500 hover:scale-105 hover:-translate-y-2"
          />
        </div>
        <div className="mx-8 my-14 w-full md:w-5/12 bg-blue-900 text-white p-6 rounded-2xl shadow-lg transform transition-transform duration-500 hover:scale-105 hover:translate-x-2 hover:-translate-y-2">
          <h1 className="text-2xl md:text-3xl font-bold mb-4">
            Strony internetowe
          </h1>
          <p className="text-lg mb-2">
            Projektujemy i wdrażamy strony internetowe, które nie tylko
            wyglądają atrakcyjnie, ale także są funkcjonalne i responsywne.
            Specjalizujemy się w:
          </p>
          <ul className="">
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
              który pozwala tworzyć wydajne i skalowalne aplikacje internetowe z
              funkcjonalnościami takimi jak renderowanie po stronie serwera
              (SSR) oraz generowanie statycznych stron (SSG).
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
