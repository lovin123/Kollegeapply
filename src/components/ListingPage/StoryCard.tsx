import React from "react";
import { IStoryCardProps } from "@/types/ListingPage/story-card.type";
import { useRouter } from "next/navigation";

export function StoryCard({
  image,
  title,
  institution,
  date,
}: IStoryCardProps) {
  const router = useRouter();
  return (
    <article className="flex flex-1 gap-6 py-6 size-full">
      <img
        src={image}
        alt={title}
        className="object-contain shrink-0 self-start aspect-[1.17] w-[140px] cursor-pointer"
        onClick={() => router.push("/detailed-news")}
      />
      <div
        className="flex-1 shrink basis-0 min-w-60 cursor-pointer"
        onClick={() => router.push("/detailed-news")}
      >
        <div className="w-full">
          <h3 className="text-sm font-medium leading-5 text-zinc-900">
            {title}
          </h3>
          <p className="mt-2.5 text-xs text-ellipsis text-slate-950">
            {institution}
          </p>
          <time className="block mt-2.5 text-sm text-gray-400">⏱️ {date}</time>
        </div>
      </div>
    </article>
  );
}
