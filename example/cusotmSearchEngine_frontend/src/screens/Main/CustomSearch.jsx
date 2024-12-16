import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

import { useState, useEffect } from "react";
import { ScrollArea } from "@/components/ui/scroll-area";
import { FaSpinner, FaSearch } from "react-icons/fa";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import {
  Card,
  CardContent,
  CardHeader,
  CardFooter,
  CardTitle,
} from "../../components/ui/card";

import API from "@/services/API";
const CustomSearch = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [results, setResults] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [apihit, setApihit] = useState(false);

  const fetchResults = async () => {
    if (!searchQuery.trim()) return;

    try {
      setIsLoading(true);
      const { data } = await API.post.customsearch(  { searchQuery });
      setApihit(true);
      setResults(data.items || []);
    } catch (error) {
      console.error("Error fetching data:", error);
      setApihit(true);
      setResults([]);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (!searchQuery.trim()) {
      setResults([]);
      setApihit(false);
    }
  }, [searchQuery]);

  return (
    <div className="w-full h-full flex flex-col items-center px-4 py-10 ">
      <div className="w-full max-w-2xl space-y-3 text-center">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800">
          Custom Search Engine
        </h1>
        <p className="text-gray-600 text-xl">
          Build a Custom Search Engine with Google Programmable <br></br> Search
          API
        </p>
      </div>

      {/* Search Bar */}
      <div className="flex gap-2 items-center justify-center w-full mt-8 md:mt-4 max-w-3xl">
        <div className="flex items-center w-full max-w-3xl bg-gray-200 rounded px-4">
          <Input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search your query"
            className="flex-1 bg-gray-200 border-none outline-none py-2"
          />
          <FaSearch className="text-gray-500 cursor-pointer" />
        </div>
        <Button
          size="lg"
          className="bg-miracle-lightBlue hover:bg-miracle-lightBlue flex items-center justify-center gap-2 w-20 h-10 md:w-32 md:h-10"
          onClick={fetchResults}
          disabled={isLoading}
        >
          {isLoading ? <FaSpinner className="animate-spin" /> : "Search"}
        </Button>
      </div>


      {results.length > 0 ? (
       
        <ScrollArea className="h-[480px] w-[70%] mt-4  p-5">
          <div className="grid grid-cols-4 md:grid-cols-3 gap-3">
            {results.map((item, index) => {
              const thumbnail1 =
                item.pagemap?.cse_thumbnail?.[0]?.src ||
                "https://t3.ftcdn.net/jpg/09/89/09/56/240_F_989095613_BbuYiulrp81OPxcsQGP9sLBmUaSstTaN.jpg";
              console.log(thumbnail1);

              return (
                <Card key={index} className="flex flex-col">
                  <CardHeader>
                    <CardTitle className="line-clamp-2">{item.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <div className="relative">
                      <img
                        src={thumbnail1}
                        className="rounded-lg"
                        style={{
                          width: "300px",
                          height: "180px",
                          objectFit: "cover",
                        }} 
                        alt="Thumbnail"
                      />
                    </div>
                  </CardContent>

                  <CardFooter>
                    <Button
                      className="w-full bg-miracle-lightBlue"
                      onClick={() =>
                        window.open(item.link, "_blank", "noopener,noreferrer")
                      }
                    >
                      Visit Site
                    </Button>
                  </CardFooter>
                </Card>
              );
            })}
          </div>
        </ScrollArea>
      ) : !isLoading && searchQuery.trim() && apihit ? (
        <div className="text-gray-400  w-full md:w-1/2 mt-8 md:mt-3">
          <DotLottieReact
            src="https://lottie.host/0bd4b2ce-05d4-4133-8389-c6ee23211340/WNgFjoaOx1.lottie"
            loop
            autoplay
          />
        </div>
      ) : null}
    </div>
  );
};

export default CustomSearch;
