import React from "react";
import { INewsSidebarProps } from "@/types/DetailedPage/news-sidebar.type";
import RelatedNewsItem from "@/components/DetailedPage/RelatedNewsitem";

const NewsSidebar: React.FC<INewsSidebarProps> = ({
  bannerImageUrl,
  relatedNews,
}) => {
  return (
    <aside className="flex flex-col gap-3.5 w-[437px] max-md:w-full">
      <button className="h-12 text-base font-semibold text-white bg-indigo-900 rounded-md cursor-pointer flex items-center justify-center">
        Apply Now
      </button>

      <button className="h-12 text-base font-semibold text-indigo-900 rounded-md border border-indigo-200 cursor-pointer bg-[linear-gradient(120deg,#FFF_9.94%,#F1EEFE_70.52%)] flex items-center justify-center">
        Download Brochure
      </button>

      <img
        src={bannerImageUrl}
        alt="Advertisement"
        className="w-full h-[106px] rounded-[12px]"
      />

      <div className="relative w-full text-sm text-white bg-[#C3D7FF] rounded-xl h-[106px] flex items-center justify-center">
        ADVERTISEMENT BANNER
      </div>

      <div className="relative w-full text-sm text-white bg-[#FFEEC3] rounded-xl h-[106px] flex items-center justify-center">
        ADVERTISEMENT BANNER
      </div>

      <section className="p-6 bg-white rounded-lg shadow-sm">
        <h2 className="mb-6 text-xl font-bold text-indigo-900">NEWS</h2>

        <div className="flex flex-col gap-6">
          {relatedNews.map((newsItem, index) => (
            <React.Fragment key={index}>
              <RelatedNewsItem
                imageUrl={newsItem.imageUrl}
                title={newsItem.title}
                source={newsItem.source}
                date={newsItem.date}
              />

              {index < relatedNews.length - 1 && (
                <hr className="border-2 border-gray-200" />
              )}
            </React.Fragment>
          ))}
        </div>
      </section>
    </aside>
  );
};

export default NewsSidebar;
