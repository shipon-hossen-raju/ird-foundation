"use client";
import Image from "next/image";
import logoImg from "../../assets/logo.png";
import Box from "../regular/Carts/Box";
import { supportIcon } from "../utils/icon-svg";
import NavItems from "./NavItems";

export default function Header() {
  return (
    <header className="min-h-[calc(100vh_-_80px)]">
      <Box className="!px-[13px] h-full flex items-center justify-between flex-col">
        {/* logo */}
        <figure>
          <Image className="w-[73px]" src={logoImg} alt="dua ruqyah logo" />
        </figure>

        {/* nav items */}
        <NavItems />

        {/* support */}
        <button className="size-16 bg-primary text-white inline-flex items-center justify-center rounded-xl text-3xl">
          {supportIcon}
        </button>
      </Box>
    </header>
  );
}
