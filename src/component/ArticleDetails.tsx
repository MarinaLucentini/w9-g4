import { useEffect, useState } from "react"
import { Card, Col, Container, Row } from "react-bootstrap"
import { useParams } from "react-router-dom"
import { IArticle } from "../interface/IArticle"

const ArticleDetails = ()=>{
    const {id} = useParams()
    const [article, setArticle] = useState<IArticle>()
  
    const fetcharticle = async()=>{
        try{
            const resp = await fetch('https://api.spaceflightnewsapi.net/v4/articles/'+ id);
              if (resp.ok) {
                const Article = await resp.json();
                setArticle(Article);
              } else {
                throw new Error("Errore nel reperire gli articoli");
              }
            } catch (error) {
              console.log(error);
            }
        }
            useEffect(()=>{
        
                fetcharticle()
            },[id])
return(
    <>
    
    <Container>
        <Row>
<Col>
<Card >
      <Card.Body>
        <Card.Title>{article?.title}</Card.Title>
        <Card.Text>
       {article?.summary}
       {article?.published_at}
       {article?.news_site}
        </Card.Text>
      
      </Card.Body>
    </Card>


</Col>
        </Row>
    </Container>
    
    </>
)
}
export default ArticleDetails