import { Card, Col } from "react-bootstrap"
import { IArticle } from "../interface/IArticle"

interface SingleArticle {
    article: IArticle
}


const SingleArticle = (props: SingleArticle)=>{
    return (
        <Col xs={12} md={4} className="text-center"> 
          <Card>
        <Card.Img variant="top" src={props.article.image_url} />
        <Card.Body>
          <Card.Title>{props.article.title}</Card.Title>
          <Card.Text>{props.article.summary}</Card.Text>
        </Card.Body>
      </Card>
     </Col>
    )
}


export default SingleArticle
