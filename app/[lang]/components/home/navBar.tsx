import Link from "next/link";
import React from "react";

interface Props {
  dict?: any;
  navigation?: { name: string; href: string }[] | string[];
  fastLoad?: boolean;
}

export default function NavBar(params: Props) {
  const dict = params.dict;
  let navigation = params.navigation || ["about", "contact"];
  const fastLoad = params.fastLoad || false;
  navigation = navigation.map((item) => dict.home.navBar[item]);
  return (
    <nav
      className={
        "mb-16 " + (fastLoad ? " animate-fade-in-fast" : "animate-fade-in")
      }
    >
      <ul className="flex items-center justify-center gap-4">
        {navigation.map((item) => (
          <Link
            key={item.href}
            href={`/${dict.lang}/${item.href}`}
            className="text-sm duration-500 text-zinc-500 hover:text-zinc-300"
          >
            {item.name}
          </Link>
        ))}
      </ul>
    </nav>
  );
}
