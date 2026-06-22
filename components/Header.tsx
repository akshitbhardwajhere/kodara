import Image from "next/image";
import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <header className="w-full fixed top-0 left-0 z-50 h-16 border-b border-white/6 bg-white/7 backdrop-blur-md">
      <nav className="mx-auto flex h-full max-w-7xl items-center justify-between px-4 sm:px-6">
        <Link href="/">
          <Image
            width={100}
            height={100}
            src={"/logo.png"}
            alt=""
            className="h-9 w-auto rounded-md"
          />
        </Link>

        <div className="flex items-center gap-5">
            <Link href={"/projects"} className="text-[13px] font-medium text-white/40 transition-colors hover:text-white/80">Projects</Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;
