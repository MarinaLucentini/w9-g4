import { useEffect, useState } from "react"
import { IArticle } from "../interface/IArticle"
import { Col, Container, Row } from "react-bootstrap"

import SingleArticle from "./SingleArticle"

const Homepage = ()=>{
    const [articles, setArticles] = useState<IArticle[]>([])
    const fetcharticle = async()=>{
try{
    const resp = await fetch("https://api.spaceflightnewsapi.net/v4/articles");
      if (resp.ok) {
        const arrOfArticle = await resp.json();
        setArticles(arrOfArticle.results);
      } else {
        throw new Error("Errore nel reperire gli articoli");
      }
    } catch (error) {
      console.log(error);
    }
}
    useEffect(()=>{
        fetcharticle()
    },[])
    
    return (
        <>
          <Container>
      <Row className="justify-content-center">
        <Col xs={12} md={6} className="text-center">
          <h2>Articoli del blog</h2>
        </Col>  
        { articles.length> 0 && articles.map((article)=>
     
(<SingleArticle article={article} key={article.id}/>)
            
        
        )
           
        }
</Row>
    
    </Container>
        </>
    )
}
export default Homepage