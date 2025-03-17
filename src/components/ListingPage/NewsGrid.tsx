import React from "react";
import { useMemo, useState } from "react";
import { NewsCard } from "@/components/ListingPage/NewsCard";
import newsItems from "@/mock-data/NewsGrid.json";
import { useRouter } from "next/navigation";

export function NewsGrid() {
  const [activeTab, setActiveTab] = useState("All News");
  const tabs = ["All News", "College News", "Exam News", "Admission 2024"];
  const router = useRouter();

  // Filter news items based on active tab
  const filteredNews = useMemo(() => {
    if (activeTab === "All News") {
      return newsItems;
    }
    return newsItems.filter((item) => item.category === activeTab);
  }, [activeTab]);

  // Create rows of news items (4 items per row)
  const createRows = (items: typeof newsItems) => {
    const rows = [];
    for (let i = 0; i < items.length; i += 4) {
      rows.push(items.slice(i, i + 4));
    }
    return rows;
  };

  const newsRows = createRows(filteredNews);

  return (
    <section className="flex flex-col justify-center items-center self-stretch px-20 py-12 mt-14 w-full max-md:px-5 max-md:mt-10 max-md:max-w-full">
      <div className="flex flex-col w-full max-w-[1268px] max-md:max-w-full">
        <nav className="flex flex-wrap gap-10 items-start self-center px-20 pt-6 max-w-full text-lg font-medium leading-tight text-center bg-white rounded-2xl shadow-[-4px_4px_14px_rgba(236,233,252,1)] text-zinc-700 w-[740px] max-md:px-5">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`grow cursor-pointer ${
                tab === activeTab ? "font-bold text-indigo-900" : ""
              }`}
            >
              {tab}
              {tab === activeTab && (
                <div className="shrink-0 mt-6 h-0.5 border-2 border-indigo-900 border-solid w-[122px] max-md:mr-1" />
              )}
            </button>
          ))}
        </nav>

        {newsRows.map((row, rowIndex) => (
          <div
            key={rowIndex}
            className={`${rowIndex === 0 ? "mt-9" : "mt-3"} max-md:max-w-full`}
          >
            <div className="flex gap-5 max-md:flex-col">
              {row.map((item, colIndex) => (
                <div
                  key={item.id}
                  className={`${
                    colIndex === 0 ? "" : "ml-5"
                  } w-1/4 max-md:ml-0 max-md:w-full cursor-pointer`}
                  onClick={() => router.push("/detailed-news")}
                >
                  <NewsCard
                    image={item.image}
                    title={item.title}
                    institution={item.institution}
                    date={item.date}
                  />
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
