import { useEffect } from "react";
import { useState } from "react";
import SingleArticle from "./SingleArticle";
import { DataInterface, Result } from "../interfaces/interfaces";
import { Row } from "react-bootstrap";

const AllArticles = () => {
  const [articles, setArticles] = useState<Result[]>([]);
  const fetchArticles = () => {
    fetch("https://api.spaceflightnewsapi.net/v4/articles/?limit=10")
      .then((resp) => {
        if (resp) {
          return resp.json();
        }
      })
      .then((resp: DataInterface) => {
        setArticles(resp.results);
        console.log(resp.results);
      })
      .catch((err) => console.error(err));
  };
  useEffect(() => {
    fetchArticles();
  }, []);
  return (
    <Row xs={4}>
      {articles.map((article) => (
        <SingleArticle key={article.id} article={article} />
      ))}
    </Row>
  );
};
export default AllArticles;
