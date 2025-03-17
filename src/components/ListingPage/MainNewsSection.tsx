import React from "react";
import { BigStories } from "@/components/ListingPage/BigStories";
import mainNewsData from "@mock-data/MainNewsSection.json";
import { IBigStoriesProps } from "@/types/ListingPage/big-stories.type";

export function MainNewsSection({ filteredStories }: IBigStoriesProps) {
  const { featuredStory } = mainNewsData;

  return (
    <section className="mt-8 w-full max-w-[1268px] max-md:max-w-full">
      <div className="flex gap-5 max-md:flex-col">
        <div className="w-[65%] max-md:ml-0 max-md:w-full">
          <article className="flex overflow-hidden grow gap-2.5 items-start py-8 w-full bg-white rounded-lg shadow-sm min-h-[721px] max-md:mt-9">
            <div className="flex flex-col items-center min-w-60 w-[795px]">
              <figure className="w-full">
                <img
                  src={featuredStory.imageUrl}
                  alt={featuredStory.imageAlt}
                  className="object-contain w-full aspect-[1.78] max-md:max-w-full"
                />
              </figure>
              <div className="mt-6 max-w-full w-[747px]">
                <h1 className="text-3xl font-bold leading-10 text-sky-950 max-md:max-w-full">
                  {featuredStory.title}
                </h1>
                <time className="block mt-4 text-sm text-slate-400 max-md:max-w-full">
                  {featuredStory.date}
                </time>
              </div>
              <p className="mt-6 max-w-full w-[747px] text-base leading-5 text-sky-950 max-md:max-w-full">
                {featuredStory.description}{" "}
                <a
                  href={featuredStory.readMoreLink}
                  style={{
                    fontWeight: 600,
                    textDecoration: "underline",
                    color: "rgba(64,52,125,1)",
                  }}
                  rel="noopener noreferrer"
                >
                  READ
                </a>
              </p>
            </div>
          </article>
        </div>
        <div className="ml-5 w-[35%] max-md:ml-0 max-md:w-full">
          <BigStories filteredStories={filteredStories} />
        </div>
      </div>
    </section>
  );
}
