import { useEffect } from "react";
import { useState } from "react";
import SingleArticle from "./SingleArticle";
import { DataInterface, Result } from "../interfaces/interfaces";

const AllArticles = () => {
  const [articles, setArticles] = useState<Result[]>([]);
  const fetchArticles = async () => {
    try {
      const resp = await fetch("https://api.spaceflightnewsapi.net/v4/articles/?limit=10");

      if (resp.ok) {
        const data: DataInterface = await resp.json();
        setArticles(data.results);
        console.log(data.results);
      }
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    fetchArticles();
  }, []);
  return (
    <div>
      {articles.map((article, i) => (
        <SingleArticle key={"article-" + i} article={article} />
      ))}
    </div>
  );
};
export default AllArticles;
