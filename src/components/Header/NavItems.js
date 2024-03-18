"use client";
import Link from "next/link";
import { useState } from "react";
import {
  bookIcon,
  bookmarkIcon,
  chatingIcon,
  dashboardIcon,
  healthIcon,
  homeIcon,
  lightIcon,
} from "../utils/icon-svg";

export default function NavItems() {
  const [isCurrentState, setIsCurrentState] = useState("home");

  const items = [
    {
      id: "home",
      label: "Home",
      icon: homeIcon,
      link: "/",
      isCurrentState,
      click: () => setIsCurrentState("home"),
    },
    {
      id: "all-duas",
      label: "all duas",
      icon: dashboardIcon,
      link: "/all-duas",
      isCurrentState,
      click: () => setIsCurrentState("all-duas"),
    },
    {
      id: "memorize",
      label: "memorize",
      icon: lightIcon,
      link: "/memorize",
      isCurrentState,
      click: () => setIsCurrentState("memorize"),
    },
    {
      id: "bookmark",
      label: "bookmark",
      icon: bookmarkIcon,
      link: "/bookmark",
      isCurrentState,
      click: () => setIsCurrentState("bookmark"),
    },
    {
      id: "ruqyah",
      label: "ruqyah",
      icon: healthIcon,
      link: "/ruqyah",
      isCurrentState,
      click: () => setIsCurrentState("ruqyah"),
    },
    {
      id: "dua-info",
      label: "dua info",
      icon: chatingIcon,
      link: "/dua-info",
      isCurrentState,
      click: () => setIsCurrentState("dua-info"),
    },
    {
      id: "books",
      label: "books",
      icon: bookIcon,
      link: "/books",
      isCurrentState,
      click: () => setIsCurrentState("books"),
    },
  ];

  return (
    <>
      {/* nav items */}
      <div className="flex items-center justify-center flex-col gap-6 my-[27px]">
        {items.map((item, idx) => (
          <NavItem item={item} key={idx} />
        ))}
      </div>
    </>
  );
}

// Nav Item
function NavItem({ item, idx }) {
  const { id, label, icon, link, isCurrentState } = item;
  return (
    <Link
      href={link}
      className="flex items-center gap-4 justify-center w-10 h-10 rounded-full bg-iconBg text-iconColor"
    >
      <figure>{icon}</figure>
    </Link>
  );
}
