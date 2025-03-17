import React from "react";
import featuredItems from "@/mock-data/FeaturedNewsSection.json";
import { useRouter } from "next/navigation";

export function FeaturedNewsSection() {
  const router = useRouter();
  return (
    <section className="flex relative flex-col p-6 mt-14 w-full rounded-lg max-w-[1268px] min-h-[180px] max-md:px-5 max-md:mt-10 max-md:max-w-full">
      <img
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/0b8b2c5123f9c34677292d75d962a0cf96c7121e0accd9e224c396c5770102f5?placeholderIfAbsent=true&apiKey=4594016852c24eaaa8178ee1589854e1"
        alt="Background"
        className="object-cover absolute inset-0 size-full"
      />
      <div className="flex relative flex-wrap gap-5 justify-between w-full max-md:max-w-full">
        <h2 className="text-xl font-bold leading-tight text-orange-400">
          FEATURED NEWS
        </h2>
        <a href="#" className="flex gap-1.5 self-start text-base text-stone-50">
          <span className="grow">see all</span>
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/d6187480deb75e0e0c0f7d9cf4fc31ca51da30e577d4d4c4f506ef0823430f40?placeholderIfAbsent=true&apiKey=4594016852c24eaaa8178ee1589854e1"
            alt="Arrow"
            className="object-contain shrink-0 my-auto w-3.5 aspect-square"
          />
        </a>
      </div>
      <div className="flex relative flex-wrap gap-7 mt-8">
        {featuredItems.map((item) => (
          <article
            onClick={() => router.push("/detailed-news")}
            key={item.id}
            className="flex-1 bg-stone-50 p-2 rounded-md cursor-pointer"
          >
            <h3 className="text-sm font-medium leading-5 text-zinc-900">
              {item.title}
            </h3>
            <p className="mt-2.5 text-xs whitespace-nowrap text-ellipsis text-slate-950">
              {item.institution}
            </p>
            <time className="block mt-2.5 text-sm text-gray-400">
              ⏱️ {item.date}
            </time>
          </article>
        ))}
      </div>
    </section>
  );
}
