import { Button, Card } from "react-bootstrap";
import { Result } from "../interfaces/interfaces";
interface ArticleProps {
  article: Result;
}
const SingleArticle = (props: ArticleProps) => {
  return (
    <>
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src="holder.js/100px180" />
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <Card.Text>{props.article.summary}</Card.Text>
          <Button variant="primary">Go to article</Button>
        </Card.Body>
      </Card>
    </>
  );
};
export default SingleArticle;
