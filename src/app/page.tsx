import ListingPage from "@/pages/ListingPage";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Kollegeapply",
  description: "News Listing Page",
};

export default function Home() {
  return <ListingPage />;
}
