import React, { useEffect, useState } from 'react'
import { useParams, useHistory } from 'react-router-dom'
import { Carousel, Card, Row, Col } from 'react-bootstrap'
import ArticleServices from '../../Services/ArticleServices'
import CategoriesServices from './../../Services/CategoriesServices'

import "./../../Styles/ArticlesComponentStyle.css"
import ArticleComponent from './ArticleComponent/ArticleComponent'

export default function ArticlesComponent({ parentCallback }) {
    const [articles, setArticles] = useState([])
    const [categorie, setCategorie] = useState()
    const { societeCode, codeCateg, indexArt } = useParams()
    const [index, setIndex] = useState(parseInt(indexArt));
    const history = useHistory()

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex)
        history.push(`/Articles/${societeCode}/${codeCateg}/${selectedIndex}`)
    };

    useEffect(() => {
        parentCallback(societeCode)
        CategoriesServices.getCategorieByCodeCategAndCodeSec(codeCateg, societeCode).then(categories => {
            ArticleServices.getArticlesByCodeSocieteAndCodeCateg(societeCode, codeCateg).then(arts => {
                setCategorie(categories[0]);
                setArticles(arts);
                if (indexArt === undefined || parseInt(indexArt) >= arts.length) {
                    handleSelect(0);
                }
            })
        })
        // eslint-disable-next-line
    }, [societeCode, codeCateg, parentCallback, indexArt])
    return (
        <div style={{ height: "calc(100vh - 260px)", margin: "20px" }}>
            <Card.Title>
                {categorie && <h1 style={{ textAlign: "center" }}>{categorie.DesCat}</h1>}
            </Card.Title>
            <Carousel activeIndex={index} onSelect={handleSelect} indicators={false} controls={true} interval={5000} style={{ height: "100%" }} >
                {
                    articles.map(article => (
                        <Carousel.Item key={article.CodeArt} style={{ height: "100%" }}>
                            <Card style={{ height: "100%", marginRight: "5%", marginLeft: "5%" }}>
                                <Card.Body style={{ overflowY: "scroll" }}>
                                    <Row style={{ height: "100%" }}>
                                        {
                                            <Col key={article.CodeArt} >
                                                <ArticleComponent article={article} size={1} />
                                            </Col>
                                        }
                                    </Row>
                                </Card.Body>
                            </Card>
                        </Carousel.Item>
                    ))
                }
            </Carousel>
        </div>
    )
}
