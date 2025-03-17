import React from "react";
import { INewsCategoriesProps } from "@/types/ListingPage/news-categories.type";

export function NewsCategories({
  onCategoryChange,
  selectedCategory,
}: INewsCategoriesProps) {
  const categories = [
    { name: "All News" },
    { name: "Admission Alert" },
    { name: "College News" },
    { name: "Exam News" },
    { name: "Latest News" },
  ];

  return (
    <nav className="flex gap-1.5 items-start text-xs font-medium leading-none text-neutral-700 max-md:max-w-full">
      {categories.map((category) => (
        <button
          key={category.name}
          onClick={() => onCategoryChange(category.name)}
          className={`px-2.5 py-1.5 hover:cursor-pointer rounded-lg border border-solid ${
            category.name === selectedCategory
              ? "bg-zinc-100 border-neutral-200"
              : "bg-white border-neutral-200"
          }`}
        >
          {category.name}
        </button>
      ))}
    </nav>
  );
}
