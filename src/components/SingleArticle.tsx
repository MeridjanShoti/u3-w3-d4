import { Button, Card, Col } from "react-bootstrap";
import { Result } from "../interfaces/interfaces";
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
          <Button variant="primary">Go to article</Button>
        </Card.Body>
      </Card>
    </Col>
  );
};
export default SingleArticle;
