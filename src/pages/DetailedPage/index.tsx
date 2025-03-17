"use client";

import React from "react";
import { Header } from "@/components/common/Header";
import Breadcrumb from "@/components/common/Breadcrumb";
import NewsContent from "@components/DetailedPage/NewsContent";
import NewsSidebar from "@components/DetailedPage/NewsSidebar";

const NewsArticlePage: React.FC = () => {
  return (
    <main className="w-full bg-slate-50 min-h-screen">
      <Header />
      <Breadcrumb
        items={[
          { label: "News Listing Page", isActive: false },
          { label: "Individual News", isActive: true },
        ]}
      />
      <section className="flex gap-9 px-32 max-md:flex-col max-md:px-10 max-sm:px-5">
        <NewsContent
          imageUrl="https://cdn.builder.io/api/v1/image/assets/TEMP/9c287282e227789f0ebfdfb7953d80b2ec43301e"
          title="Chitkara University MBA Admission Open; Check Direct List..."
          date="20 Sep 2023, 8:00pm"
          content={[
            "New Delhi: The State Common Entrance Test Cell, Government of Maharashtra, has issued the admit cards for the MArch, MHMCT, BEd, MEd, and MPEd Courses on February 27, 2024. To download the document",
            "We offer a diverse range of extracurricular activities aimed at enhancing personal growth, skill development, and building lasting connections. From cultural events to sports, competitions, and workshops, students have ample opportunities to refine their communication and critical thinking abilities while pursuing their passions. As individuals with dual responsibilities towards the institute and its students, our primary objective is to cultivate an enriching learning environment. We contribute to the institute by delivering high-quality education, aligning with institutional goals, and promoting a positive academic atmosphere. Towards students, we act as facilitators of learning, providing support, mentorship, and guidance for their intellectual, social, and emotional growth. Graduates from our institute, particularly those in nursing, have a wide array of career opportunities. With essential clinical skills, specialization options, and global practice opportunities, they are well-equipped for rewarding careers dedicated to improving health and well-being while making a meaningful impact on communities worldwide. The paramount strength of our institute lies in its ability to provide a transformative educational experience. With robust academic programs, committed faculty, and abundant resources, we empower students to cultivate critical thinking, broaden their knowledge, and become well-rounded, educated citizens prepared to make significant contributions to society. To the youth and aspiring students, I encourage adopting a growth mindset, setting clear goals, and mastering effective time management. Nurture curiosity, seek mentorship, and prioritize well-being while remaining adaptable in a rapidly evolving world. Remember, success is a continuous journey—embrace the process, seize opportunities, and never stop learning. To the youth and aspiring students, I encourage adopting a growth mindset, setting clear goals, and mastering effective time management. Nurture curiosity, seek mentorship, and prioritize well-being while remaining adaptable in a rapidly evolving world. Remember, success is a continuous journey—embrace the process, seize opportunities, and never stop learning.",
          ]}
        />
        <NewsSidebar
          bannerImageUrl="https://cdn.builder.io/api/v1/image/assets/TEMP/7421d8d9f79a0e1d31fcc46c897a5fffa170928d"
          relatedNews={[
            {
              imageUrl:
                "https://cdn.builder.io/api/v1/image/assets/TEMP/567a79f38d48a13b92d771955c2fb9c538edeb4e",
              title:
                "What is the latest program that you are offering in your institute...",
              source: "Lucknow Public College of Professional Studies...",
              date: "27 Dec 2020",
            },
            {
              imageUrl:
                "https://cdn.builder.io/api/v1/image/assets/TEMP/088760c64da8ef90c5462173854209dc47903b64",
              title:
                "What is the latest program that you are offering in your institute...",
              source: "Lucknow Public College of Professional Studies...",
              date: "27 Dec 2020",
            },
            {
              imageUrl:
                "https://cdn.builder.io/api/v1/image/assets/TEMP/82bde4cffebaac803f8be7a65db7656b168c6a34",
              title:
                "What is the latest program that you are offering in your institute...",
              source: "Lucknow Public College of Professional Studies...",
              date: "27 Dec 2020",
            },
          ]}
        />
      </section>
    </main>
  );
};

export default NewsArticlePage;
