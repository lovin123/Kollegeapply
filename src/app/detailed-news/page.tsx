import NewsArticlePage from "@/pages/DetailedPage";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Kollegeapply",
  description: "Detailed News Article Page",
};

export default function Home() {
  return <NewsArticlePage />;
}
