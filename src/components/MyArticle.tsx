import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { Author, Result } from "../interfaces/interfaces";
import { Col, Container, Row, Spinner } from "react-bootstrap";

const MyArticle = () => {
  const [article, setArticle] = useState<Result | null>(null);
  const params = useParams();
  const fetchArticle = () => {
    fetch("https://api.spaceflightnewsapi.net/v4/articles/" + params.id)
      .then((resp) => {
        if (resp) {
          return resp.json();
        }
      })
      .then((data: Result) => setArticle(data))
      .catch((err) => console.error(err));
  };
  useEffect(() => {
    fetchArticle();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [params]);
  return (
    <>
      {article ? (
        <>
          <h1 className="text-center">{article.title}</h1>
          <Container>
            <Row className="justify-content-center">
              <Col xs={12} md={6}>
                <img src={article.image_url} alt={article.title + "image"} className="img-fluid" />
              </Col>
            </Row>
            <Row className="justify-content-center">
              <Col xs={12} md={6}>
                <p>{article.summary}</p>
                <cite>
                  {article.authors.map((author: Author, i) => {
                    return <span key={"author" + i}>{author.name}</span>;
                  })}
                </cite>
              </Col>
            </Row>
          </Container>
        </>
      ) : (
        <Spinner animation="grow" />
      )}
    </>
  );
};
export default MyArticle;
