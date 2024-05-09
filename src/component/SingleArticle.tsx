import { Card} from "react-bootstrap"
import { IArticle } from "../interface/IArticle"
import { Link } from "react-router-dom"

interface ISingleArticle {
    article: IArticle
}


const SingleArticle = (props: ISingleArticle)=>{
    return (
      
        <Card >
        <Card.Img variant="top" src={props.article.image_url} />
        <Card.Body>
          <Card.Title>{props.article.title}</Card.Title>
          <Card.Text>
            {props.article.summary} - {props.article.published_at}
          </Card.Text>
          <Link to={ `/singlearticle/${props.article.id}`} >Scopri di più</Link>
        
        </Card.Body>
      </Card>
 
    )
}


export default SingleArticle
