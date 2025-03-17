import { ISearchResult } from "@/types/common/header.type";
import { useState } from "react";
import { CiSearch } from "react-icons/ci";
import { IoIosArrowDown } from "react-icons/io";

const menuItems = [
  { text: "University" },
  { text: "Colleges" },
  { text: "Exams" },
  { text: "Courses" },
  { text: "News" },
];

export function Header() {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState<ISearchResult[]>([]);
  const [showResults, setShowResults] = useState(false);

  const handleSearch = (query: string) => {
    setSearchQuery(query);
    setShowResults(true);

    // This is a mock search implementation. In a real application,
    // you would fetch results from your data source
    const results = mockSearchNews(query);
    setSearchResults(results);
  };

  return (
    <header className="flex flex-col items-center self-stretch px-16 pt-6 w-full text-sm bg-white shadow-[0px_3px_4px_rgba(234,234,234,0.47)] max-md:px-5 max-md:max-w-full relative">
      <div className="flex flex-wrap gap-5 justify-between w-full max-w-[1268px] max-md:max-w-full">
        <nav className="flex flex-wrap gap-10 items-start my-auto font-medium whitespace-nowrap text-neutral-700 max-md:max-w-full">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/5346fb9aac999aceed1f2b975d2931b9c8454171cc3f18afe6f71d1db02fe19c?placeholderIfAbsent=true&apiKey=4594016852c24eaaa8178ee1589854e1"
            alt="Logo"
            className="object-contain shrink-0 aspect-[4.08] w-[98px]"
          />
          <div className="flex flex-wrap flex-auto gap-8 items-center mt-1 max-md:max-w-full">
            {menuItems.map((item) => (
              <MenuLink key={item.text} text={item.text} />
            ))}
          </div>
        </nav>
        <div className="flex flex-col relative">
          <div className="flex gap-2 p-2 bg-white text-neutral-400 border border-neutral-200 rounded-lg mb-1">
            <CiSearch className="w-5 h-5" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => handleSearch(e.target.value)}
              placeholder="Search for Colleges, Exams, Courses & more..."
              className="flex-auto outline-none"
            />
          </div>

          {/* Search Results Dropdown */}
          {showResults && searchQuery && (
            <div className="absolute top-full left-0 right-0 mt-1 bg-white shadow-lg rounded-lg max-h-[300px] overflow-y-auto z-50">
              {searchResults.length > 0 ? (
                searchResults.map((result) => (
                  <div
                    key={result.id}
                    className="p-3 hover:bg-gray-50 cursor-pointer border-b"
                  >
                    <div className="font-medium">{result.title}</div>
                    <div className="text-sm text-gray-600">
                      {result.institution}
                    </div>
                    <div className="text-xs text-gray-400">
                      {result.category}
                    </div>
                  </div>
                ))
              ) : (
                <div className="p-4 text-center text-gray-500">
                  No results found
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </header>
  );
}

interface MenuLinkProps {
  text: string;
}

function MenuLink({ text }: MenuLinkProps) {
  return (
    <div className="flex gap-2 items-center self-stretch my-auto">
      <div className="self-stretch my-auto">{text}</div>
      <IoIosArrowDown className="w-4 h-4" />
    </div>
  );
}

// Mock search function - replace with actual implementation
function mockSearchNews(query: string): ISearchResult[] {
  // This is just an example. In a real application, you would:
  // 1. Import your news data
  // 2. Implement proper search logic
  // 3. Possibly make an API call to your backend

  if (!query) return [];

  // Mock data for demonstration
  const mockData: ISearchResult[] = [
    {
      id: 1,
      title: "CBSE Class 12 Results",
      institution: "Central Board of Secondary Education",
      category: "Exam News",
    },
    {
      id: 2,
      title: "IIT Admissions 2024",
      institution: "Indian Institute of Technology",
      category: "Admission Alert",
    },
    {
      id: 3,
      title: "University of Delhi",
      institution: "University of Delhi",
      category: "University News",
    },
    {
      id: 4,
      title: "College of Engineering",
      institution: "College of Engineering",
      category: "College News",
    },
  ];

  return mockData.filter(
    (item) =>
      item.title.toLowerCase().includes(query.toLowerCase()) ||
      item.institution.toLowerCase().includes(query.toLowerCase()) ||
      item.category.toLowerCase().includes(query.toLowerCase())
  );
}
