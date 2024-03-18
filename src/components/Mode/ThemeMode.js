import { useEffect, useState } from "react";
import { FaMoon } from "react-icons/fa";
import { IoDesktopSharp } from "react-icons/io5";
import { LuSun } from "react-icons/lu";

export default function ThemeMode() {
  const [themeItems, setThemeItems] = useState([
    {
      icon: <IoDesktopSharp />,
      title: "system",
      active: true,
    },
    {
      icon: <LuSun />,
      title: "light",
      active: false,
    },
    {
      icon: <FaMoon />,
      title: "dark",
      active: false,
    },
  ]);
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") ? localStorage.getItem("theme") : "system"
  );
  const [openDrop, setOpenDrop] = useState(false);
  const darkQuery = window.matchMedia("(prefers-color-scheme: dark)");
  const element = document.documentElement;

  // active function
  const activeFunction = (title) => {
    setTheme(title);
    setThemeItems(
      themeItems.map((item) => {
        if (item.title === title) {
          return {
            ...item,
            active: true,
          };
        } else {
          return {
            ...item,
            active: false,
          };
        }
      })
    );
    setOpenDrop(false);
  };

  // systems change call the function
  darkQuery.addEventListener("change", (e) => {
    if (!("theme" in localStorage)) {
      element.classList.add("dark");
    } else {
      element.classList.remove("dark");
    }
  });

  // window match color
  function onWindowMatch() {
    if (
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) && darkQuery.matches)
    ) {
      element.classList.add("dark");
    } else {
      element.classList.remove("dark");
    }
  }
  onWindowMatch();

  // theme changes re-call use Effect
  useEffect(() => {
    switch (theme) {
      case "dark":
        element.classList.add("dark");
        localStorage.setItem("theme", "dark");
        break;

      case "light":
        element.classList.remove("dark");
        localStorage.setItem("theme", "light");
        break;

      default:
        localStorage.removeItem("theme");
        onWindowMatch();
        break;
    }
  }, [theme]);

  return (
    <>
      <div className="shadow-md backdrop-blur-md relative group">
        {/* active button */}
        <div className="flex flex-col items-center justify-center ml-2 gap-3">
          {themeItems?.map((themeItem, index) =>
            themeItem?.active ? (
              <button
                className={`transition duration-300 rounded-md dark:text-white ${
                  themeItem?.active
                    ? "min-w-max min-h-max visible opacity-100 text-lg md:text-2xl p-2"
                    : "w-0 h-0 overflow-hidden invisible opacity-0"
                }`}
                key={index}
                onClick={() => {
                  setOpenDrop(!openDrop);
                  activeFunction(themeItem.title);
                }}
              >
                {themeItem.icon}
              </button>
            ) : null
          )}
        </div>

        {/* system button */}
        <div
          className={`absolute right-0 -top-1/2 transition-all duration-300 group-hover:top-full group-hover:z-0 opacity-0 z-[99999999] group-hover:opacity-100 invisible group-hover:visible scale-0 group-hover:scale-100 origin-bottom ${
            openDrop ? "" : ""
          }`}
        >
          <div className="flex flex-col items-end justify-center mt-2 gap-3">
            {themeItems?.map((themeItem, index) =>
              !themeItem?.active ? (
                <button
                  className={`capitalize shadow-xl text-2xl p-2 rounded-md ${
                    themeItem.title === "dark"
                      ? "bg-slate-900 text-white"
                      : themeItem.title === "light"
                      ? "bg-slate-100 text-black"
                      : "bg-gradient-to-r from-50% dark:text-black from-slate-200 to-50% to-slate-800 "
                  } `}
                  key={index}
                  onClick={() => activeFunction(themeItem.title)}
                >
                  <div className="flex items-center gap-2">
                    <figure className="text-lg md:text-2xl">
                      {themeItem.icon}
                    </figure>
                    <span
                      className={`text-base  ${
                        themeItem.title === "system"
                          ? "drop-shadow-lg shadow-black bg-gradient-to-r from-slate-800 to-gray-50 bg-clip-text text-transparent"
                          : ""
                      }`}
                    >
                      {themeItem.title}
                    </span>
                  </div>
                </button>
              ) : null
            )}
          </div>
        </div>
      </div>
    </>
  );
}
