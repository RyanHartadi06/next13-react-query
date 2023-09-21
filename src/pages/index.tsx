import Image from "next/image";
import { Inter } from "next/font/google";
import Card from "./components/card";
import axios from "axios";
import { useQuery } from "react-query";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const fetchNews = () => {
    return axios.get("https://newsapi.org/v2/everything", {
      params: {
        q: "One Piece",
        sortBy: "popularity",
        apiKey: process.env.NEXT_PUBLIC_NEWS_API_KEY,
      },
    });
  };

  const { isLoading, isError, data, error } = useQuery("news", fetchNews);

  function news() {
    if (data === undefined) {
      return [];
    }

    return data?.data.articles;
  }

  if (isError) {
    console.log(error);
  }

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
    >
      <div className="w-full">
        <section className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          {news().map((item: News, index: number) => {
            return (
              <Card
                key={index}
                title={item.title}
                image="https://images.unsplash.com/photo-1575936123452-b67c3203c357?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D&w=1000&q=80"
                description={item.description}
              />
            );
          })}
        </section>
      </div>
    </main>
  );
}
