import { INewsContentProps } from "@/types/DetailedPage/news-content.type";
import React from "react";

const NewsContent: React.FC<INewsContentProps> = ({
  imageUrl,
  title,
  date,
  content,
}) => {
  return (
    <article className="flex-1 p-8 bg-white rounded-lg shadow-sm">
      <img
        src={imageUrl}
        alt={title}
        className="w-full h-[446px] object-cover mb-[24px]"
      />
      <div className="max-w-[747px]">
        <h1 className="mb-4 text-3xl font-bold leading-10 text-sky-950">
          {title}
        </h1>
        <time className="block mb-6 text-sm text-slate-400">{date}</time>
        {content.map((paragraph, index) => (
          <p
            key={index}
            className={`text-base leading-5 text-sky-950 ${
              index < content.length - 1 ? "mb-6" : ""
            }`}
          >
            {paragraph}
          </p>
        ))}
      </div>
    </article>
  );
};

export default NewsContent;
