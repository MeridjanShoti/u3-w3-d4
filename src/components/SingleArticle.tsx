import { Card, Col } from "react-bootstrap";
import { Result } from "../interfaces/interfaces";
import { Link } from "react-router";
interface ArticleProps {
  article: Result;
}
const SingleArticle = (props: ArticleProps) => {
  return (
    <Col>
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={props.article.image_url} />
        <Card.Body>
          <Card.Title>{props.article.title}</Card.Title>
          <Card.Text>{props.article.summary}</Card.Text>
          <Link to={`/article/${props.article.id}`} className="btn btn-primary w-100">
            Go to article
          </Link>
        </Card.Body>
      </Card>
    </Col>
  );
};
export default SingleArticle;
