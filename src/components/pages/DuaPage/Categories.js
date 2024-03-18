"use client";

import categoryItemImage from "@/assets/fever-man.png";
import Box from "@/components/regular/Carts/Box";
import { magnifyGlassIcon } from "@/components/utils/icon-svg";
import Image from "next/image";

export default function Categories() {
  return (
    <Box className="!p-0 max-w-[400px]">
      <h2 className="py-[18px] text-center bg-primary rounded-t-[10px] text-white text-lg">
        Categories
      </h2>

      {/* search categories input */}
      <div className="px-4">
        <SearchCategories />
      </div>

      {/* show items */}
      <div className="p-4 pt-0 flex items-center justify-center flex-col">
        <CategoriesItem />
        <CategoriesItem />
      </div>
    </Box>
  );
}

// categories items
function CategoriesItem({}) {
  return (
    <button className="w-full p-3 flex items-center justify-between gap-7 hover:bg-secondary rounded-[10px] divide-x-2">
      <div className="w-full flex items-center justify-start gap-5 text-left">
        <figure className="w-[60px] h-[60px] rounded-[10px] bg-semiGray p-2.5">
          <Image src={categoryItemImage} alt="category item" />
        </figure>
        <div>
          <h3 className={`text-primary text-lg font-semibold`}>
            Introduction to Dua
          </h3>
          <p>Subcategory: {`11`} </p>
        </div>
      </div>

      <div className="pl-2.5">
        <h4 className="text-lg font-semibold">15</h4>
        <p>Duas</p>
      </div>
    </button>
  );
}

// Search Categories
function SearchCategories({}) {
  return (
    <div className="flex items-center justify-center p-1 rounded-[10px] border border-lightGray/30 my-4">
      <label
        htmlFor="searchInput"
        className="p-2.5 cursor-pointer rounded-[10px]"
      >
        {magnifyGlassIcon}
      </label>
      <input
        id="searchInput"
        className="text-lg focus:outline-none p-3"
        type="text"
        placeholder="Search by Categories"
      />
    </div>
  );
}
