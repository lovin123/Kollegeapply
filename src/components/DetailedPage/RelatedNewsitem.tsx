import { IRelatedNewsItemProps } from "@/types/DetailedPage/related-news-items.type";
import React from "react";

const RelatedNewsItem: React.FC<IRelatedNewsItemProps> = ({
  imageUrl,
  title,
  source,
  date,
}) => {
  return (
    <article className="flex gap-6">
      <img
        src={imageUrl}
        alt={title}
        className="w-[140px] h-[120px] object-cover"
      />
      <div className="flex flex-col gap-2.5">
        <h3 className="text-sm font-medium text-zinc-900">{title}</h3>
        <p className="text-xs text-slate-950 text-opacity-70">{source}</p>
        <time className="text-sm text-gray-400">⏱️ {date}</time>
      </div>
    </article>
  );
};

export default RelatedNewsItem;
