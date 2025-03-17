import React from "react";
import { StoryCard } from "@/components/ListingPage/StoryCard";
import {
  IBigStoriesProps,
  IFilteredStories,
} from "@/types/ListingPage/big-stories.type";

export function BigStories({ filteredStories }: IBigStoriesProps) {
  return (
    <aside className="flex overflow-hidden flex-col grow px-3.5 pt-6 w-full bg-white rounded-lg shadow-sm max-md:mt-9 max-md:max-w-full">
      <img
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/c29b0b504f37a02ed6fdc77f089d6adf5d2724870f36e8bcab59e2ed5d4b78fb"
        alt="Decoration"
        className="object-contain z-10 self-center aspect-square w-[13px]"
      />
      <div className="mt-0">
        <h2 className="text-xl font-bold leading-tight text-indigo-900">
          THE BIG STORIES
        </h2>

        {filteredStories.map((story: IFilteredStories) => (
          <div key={story.id} className="w-full max-w-[410px] min-h-[170px]">
            <StoryCard
              image={story.image}
              title={story.title}
              institution={story.institution}
              date={story.date}
            />
          </div>
        ))}
      </div>
    </aside>
  );
}
