import React from "react";
import { useRouter } from "next/navigation";

export function TrendingSection() {
  const router = useRouter();
  return (
    <section className="flex flex-wrap gap-10 px-4 py-2 bg-indigo-50 rounded-lg border-indigo-900 border-opacity-40 max-md:max-w-full">
      <div className="flex flex-auto gap-1.5 text-xs text-neutral-950">
        <h2 className="font-semibold">⚡ ️Trending Now:</h2>
        <p className="flex-auto">
          CBSE Class 12 Physics Question Paper 2024 Set 3
        </p>
      </div>
      <a
        href="#"
        className="flex gap-1.5 my-auto text-xs font-semibold text-indigo-900"
      >
        <span onClick={() => router.push("/detailed-news")} className="grow">
          Check Now
        </span>
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/ab3c28ba13a6d196ab160969ce7a57cb5e7f059823d82c3cc17128675cfe4d5e?placeholderIfAbsent=true&apiKey=4594016852c24eaaa8178ee1589854e1"
          alt="Arrow"
          className="object-contain shrink-0 w-3 aspect-[1.5]"
        />
      </a>
    </section>
  );
}
