import "../../Styles/CategoriesComponentStyle.css"
import React, { useEffect, useState } from 'react'
import { Link, useHistory, useParams } from 'react-router-dom'
import CategoriesServices from '../../Services/CategoriesServices'
import { Card, Carousel, Row, Col } from "react-bootstrap"
import ArticleServices from "../../Services/ArticleServices"
import Article from "../Articles/ArticleComponent/ArticleComponent"


export default function CategoriesComponent({ parentCallback }) {
    const { societeCode, indexCateg } = useParams()
    const [categories, setCategories] = useState([])
    const [articlesPerCateg, setArticlesPerCateg] = useState(new Map())
    const [index, setIndexCateg] = useState(indexCateg ? parseInt(indexCateg) : 0);
    const history = useHistory();


    const handleSelectCateg = (selectedIndex, e) => {
        setIndexCateg(selectedIndex);
        history.push(`/Categories/${societeCode}/${selectedIndex}`)
    };

    useEffect(() => {
        parentCallback(societeCode)
        let mapArticle = new Map();
        CategoriesServices.getCategoriesByCodeSoc(societeCode).then(categs => {


            if (indexCateg === undefined || parseInt(indexCateg) >= categs.length) {
                handleSelectCateg(0);
                ArticleServices.getArticlesByCodeCateg(categs[0].CodeCat).then(articles => {
                    mapArticle.set(categs[0].CodeCat, articles);
                    setArticlesPerCateg(mapArticle);
                });
                categs.slice(1, categs.length).forEach((categ, index) => {

                    ArticleServices.getArticlesByCodeCateg(categ.CodeCat).then(articles => {
                        mapArticle.set(categ.CodeCat, articles);
                    });
                })
            } else {
                ArticleServices.getArticlesByCodeCateg(categs[parseInt(indexCateg)].CodeCat).then(articles => {
                    mapArticle.set(categs[parseInt(indexCateg)].CodeCat, articles);
                    setArticlesPerCateg(mapArticle);
                });
                categs.forEach((categ, index) => {
                    if (categs[parseInt(indexCateg)].CodeCat !== categ.CodeCat)
                        ArticleServices.getArticlesByCodeCateg(categ.CodeCat).then(articles => {
                            mapArticle.set(categ.CodeCat, articles);
                        });
                })
            }

            setCategories(categs);
        })
        // eslint-disable-next-line
    }, [societeCode])


    return (
        <div style={{ height: "calc(100vh - 170px)", margin: "20px" }}>
            <Carousel className="parent" indicators={false} controls={true} activeIndex={index} onSelect={(eventKey, e) => { handleSelectCateg(eventKey, e) }} interval={5000} style={{ height: "100%" }}>
                {
                    categories.map(categ => (
                        <Carousel.Item key={categ.CodeCat} style={{ height: "100%" }}>
                            <Card style={{ height: "100%", marginRight: "5%", marginLeft: "5%" }}>
                                <Card.Title>
                                    <h1 style={{ textAlign: "center", marginBottom: "0px", marginTop: "20px" }}><a style={{ textDecoration: "none" }} href={`/Articles/${societeCode}/${categ.CodeCat}/0`}>{categ.DesCat}</a></h1>
                                </Card.Title>
                                <Card.Body className="child" style={{ overflowY: "scroll" }}>
                                    {articlesPerCateg.get(categ.CodeCat) &&
                                        <Row>
                                            {articlesPerCateg.get(categ.CodeCat).map((article, index) => (
                                                <Col style={{ textDecoration: "none", color: "#003e80" }} as={Link} to={`/Articles/${societeCode}/${categ.CodeCat}/${index}`} xl={4} lg={6} md={6} sm={12} xs={12} key={article.CodeArt} >
                                                    <Article article={article} size={1} />
                                                </Col>
                                            ))}
                                        </Row>
                                    }
                                </Card.Body>
                            </Card>
                        </Carousel.Item>
                    ))
                }
            </Carousel >
        </div >
    )
}
