import React from "react";
import { INewsCardProps } from "@/types/ListingPage/news-card.type";

export function NewsCard({ image, title, institution, date }: INewsCardProps) {
  return (
    <article className="grow p-3 w-full bg-white rounded-lg max-md:mt-3">
      <img
        src={image}
        alt={title}
        className="object-contain w-full aspect-[1.22]"
      />
      <div className="mt-5">
        <h3 className="text-sm font-medium leading-5 text-zinc-900">{title}</h3>
        <p className="mt-2.5 text-xs text-slate-950">{institution}</p>
        <time className="block mt-2.5 text-sm text-gray-400">⏱️ {date}</time>
      </div>
    </article>
  );
}
