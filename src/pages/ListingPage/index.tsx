"use client";
import { Header } from "@/components/common/Header";
import { TrendingSection } from "@/components/ListingPage/TrendingSection";
import { NewsCategories } from "@/components/ListingPage/NewsCategories";
import { MainNewsSection } from "@/components/ListingPage/MainNewsSection";
import { FeaturedNewsSection } from "@/components/ListingPage/FeaturedNewsSection";
import { NewsGrid } from "@/components/ListingPage/NewsGrid";
import stories from "@/mock-data/BigStories.json";
import { useState } from "react";

export default function ListingPage() {
  const [selectedCategory, setSelectedCategory] = useState("All News");
  const filteredStories = stories.filter((story) =>
    selectedCategory === "All News" ? true : story.category === selectedCategory
  );

  return (
    <main className="flex overflow-hidden flex-col items-center pb-20 bg-slate-50">
      <Header />

      <div className="flex flex-wrap gap-5 justify-between mt-8 w-full max-w-[1268px] max-md:max-w-full">
        <TrendingSection />
        <NewsCategories
          selectedCategory={selectedCategory}
          onCategoryChange={setSelectedCategory}
        />
      </div>

      <MainNewsSection filteredStories={filteredStories} />
      <FeaturedNewsSection />
      <NewsGrid />
    </main>
  );
}
