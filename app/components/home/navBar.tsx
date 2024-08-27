import Link from "next/link";
import React from "react";

interface Props {
  navigation?: { name: string; href: string }[];
  fastLoad?: boolean;
}

export default function NavBar({
  navigation = [
    { name: "About us", href: "/about" },
    { name: "Contact", href: "/contact" },
  ],
  fastLoad = false,
}: Props) {
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
            href={item.href}
            className="text-sm duration-500 text-zinc-500 hover:text-zinc-300"
          >
            {item.name}
          </Link>
        ))}
      </ul>
    </nav>
  );
}
