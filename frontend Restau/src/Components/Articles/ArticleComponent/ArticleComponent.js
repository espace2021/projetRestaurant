import React from 'react'
import { Card, Row, Col } from 'react-bootstrap'

export default function ArticleComponent({ article, size = 0 }) {
    return (
        <Card style={{ height: "100%", width: '100%' }} >
            {
                size === 1 &&
                <Row style={{ marginTop: "auto", marginBottom: "auto" }}>
                    <Col xs={12} sm={5} md={5} lg={4} xl={4} style={{ textAlign: "center" }}>
                        <Card.Img variant="top" src={"/Images/food1.png"} style={{ maxWidth: "150px", marginTop: "auto", }} />
                    </Col>
                    <Col style={{ marginTop: "auto", marginBottom: "auto" }}>
                        <Row style={{ textAlign: "center" }}>
                            <Col xs={12} sm={12} md={12} lg={12} xl={12}>
                                <h1 style={{ fontSize: "25px" }}>{article.LibArt}</h1>
                            </Col>
                            <Col xs={12} sm={12} md={12} lg={12} xl={12}>
                                <h1 style={{ fontSize: "20px" }}>{parseFloat(article.prix1 * (1 + (article.tauxtva * 0.01))).toFixed(1)} DT</h1>
                            </Col>
                        </Row>

                    </Col>
                </Row>

            }
            {size === 0 && <Row>
                <Col xs={8} sm={8} md={8} lg={8} xl={8}>
                    <h5> {article.LibArt}</h5>
                </Col>
                <Col xs={4} sm={4} md={4} lg={4} xl={4}>
                    <h5 style={{ textAlign: "right" }}>  {parseFloat(article.prix1 * (1 + (article.tauxtva * 0.01))).toFixed(1)} DT</h5>
                </Col>
            </Row>}
        </Card>
    )
}
