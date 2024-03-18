"use client";
import Box from "@/components/regular/Carts/Box";
import {
  boxUpBoxIcon,
  dashboardIcon,
  languageSelectIcon,
} from "@/components/utils/icon-svg";
import { useState } from "react";

const Settings = ({ className }) => {
  const [isCurrentState, setIsCurrentState] = useState("");

  const settingItems = [
    {
      id: "language-settings",
      label: "language settings",
      icon: languageSelectIcon,
      isCurrentState,
      click: () => setIsCurrentState("language-settings"),
      children: [],
    },
    {
      id: "general-settings",
      label: "general setting",
      icon: boxUpBoxIcon,
      isCurrentState,
      click: () => setIsCurrentState("general-settings"),
      children: [],
    },
    {
      id: "font-settings",
      label: "font setting",
      icon: dashboardIcon,
      isCurrentState,
      click: () => setIsCurrentState("font-settings"),
      children: [],
    },
    {
      id: "appearance-settings",
      label: "appearance setting",
      icon: dashboardIcon,
      isCurrentState,
      click: () => setIsCurrentState("appearance-settings"),
      children: [
        {
          id: "night-mode",
          label: "night mode",
          option: {
            type: "switch",
            value: true,
          },
        },
      ],
    },
  ];

  return (
    <Box
      className={`min-w-[300px] max-w-[330px] w-full !px-5 !py-6 rounded-[32px] min-h-full h-[calc(100vh_-_170px)] ${
        className ? className : ""
      }`}
    >
      <h2 className="py-2.5 my-2.5 text-xl font-semibold text-center">
        Settings
      </h2>

      {/* settings items */}
      <div className="space-y-4">
        {settingItems.map((item, idx) => {
          return <SettingItem key={idx} item={item} />;
        })}
      </div>
    </Box>
  );
};

export default Settings;

// settings items
function SettingItem({ item }) {
  const { id, label, icon, isCurrentState, click, children } = item;

  return (
    <div className="border rounded-[10px]">
      <div className="bg-secondary p-2.5 rounded-[10px] flex items-center justify-start gap-5 border-l-[5px] hover:border-primary group cursor-pointer border-l-transparent transition duration-300">
        <figure className="w-10 h-10 rounded-full bg-iconBg text-iconColor flex items-center justify-center p-2 group-hover:text-primary transition duration-300">
          {icon}
        </figure>
        <p className="text-lightGray capitalize font-medium group-hover:text-primary transition duration-300">
          {label}
        </p>
      </div>

      {/* Sub Items Setting */}
      {children?.length ? (
        <div className="px-4 py-8">
          {children.map((child, idx) => {
            return <SubItemSetting key={idx} item={child} />;
          })}
        </div>
      ) : (
        ""
      )}
    </div>
  );
}

// items sub item
function SubItemSetting({ item }) {
  const { id, label, option } = item;

  return (
    <div className="flex items-center justify-between">
      <label className="text-base capitalize"> {label} </label>
      <InputSwitch />
    </div>
  );
}

function InputSwitch({}) {
  return (
    <div className="relative inline-block w-8 h-4 rounded-full cursor-pointer">
      <input
        id="auto-update"
        type="checkbox"
        className="absolute w-10 h-4 transition-colors duration-300 rounded-full appearance-none cursor-pointer peer bg-secondary  peer-checked:border-primary peer-checked:before:bg-primary"
        defaultChecked
      />
      <label
        htmlFor="auto-update"
        className="before:content[''] absolute top-2/4 -left-1 h-5 w-5 -translate-y-2/4 cursor-pointer rounded-full border border-lightGray bg-lightGray shadow-md transition-all duration-300 before:absolute before:top-2/4 before:left-2/4 before:block before:h-10 before:w-10 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity hover:before:opacity-10 peer-checked:translate-x-full peer-checked:border-primary peer-checked:bg-primary peer-checked:before:bg-primary"
      >
        <div
          className="inline-block p-5 rounded-full top-2/4 left-2/4 -translate-x-2/4 -translate-y-2/4"
          data-ripple-dark="true"
        ></div>
      </label>
    </div>
  );
}
