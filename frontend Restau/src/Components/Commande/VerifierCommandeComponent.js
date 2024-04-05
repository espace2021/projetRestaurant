import React, { useEffect, useState } from 'react'
import { Button, Card, Col, Modal, Row } from 'react-bootstrap';
import { useParams } from 'react-router';
import VerifierCommandeServices from '../../Services/VerifierCommandeServices';
import ReactLoading from "react-loading";
import { FiArrowDown, FiArrowUp, FiInfo, FiRefreshCw } from "react-icons/fi";

import "./../../Styles/CommandeComponentStyle.css"
import "./../../Styles/VerifierCommandeStyle.css"
import LoginAdminComponent from '../Login/LoginAdminComponent';

export default function VerifierCommandeComponent({ parentCallback }) {
    const { societeCode } = useParams()
    const [commandes, setCommandes] = useState([])
    const [modal, showModal] = useState(false)
    const [CodeCmd, setCodeCmd] = useState()
    const [cmdProducts, setCmdProducts] = useState([])
    const [loadingProducts, setLoadingProducts] = useState(true)
    const [sortByDate, setSortByDate] = useState(false)
    const [employeAuthed, setEmployeAuthed] = useState(false);

    useEffect(() => {
        parentCallback(societeCode)
        setEmployeAuthed(verifierAdmin())
        VerifierCommandeServices.getCommandesByCodeSociete(societeCode).then(res => {
            setCommandes(res.sort((a, b) => (a.DateCmd > b.DateCmd) ? 1 : (a.DateCmd < b.DateCmd) ? -1 : 0))
        });



    }, [parentCallback, societeCode])

    function verifierAdmin() {
        const employeString = localStorage.getItem("employe")
        if (employeString) {
            const employe = JSON.parse(employeString);
            const isAd = employe.Fonction === "ADMINISTRATEUR";
            return isAd;
        }
        return false;
    }

    useEffect(() => {
        if (CodeCmd) {
            setCmdProducts([]);
            setLoadingProducts(true)
            VerifierCommandeServices.getProductByCodeCommande(CodeCmd).then(result => {
                setCmdProducts(result);
                setLoadingProducts(false)
            })
        }
    }, [CodeCmd])

    function getData() {
        setCommandes([])
        VerifierCommandeServices.getCommandesByCodeSociete(societeCode).then(res => {
            if (sortByDate) {
                setCommandes(res.sort((a, b) => (a.DateCmd > b.DateCmd) ? 1 : (a.DateCmd < b.DateCmd) ? -1 : 0))
            } else {
                setCommandes(res.sort((a, b) => (a.DateCmd < b.DateCmd) ? 1 : (a.DateCmd > b.DateCmd) ? -1 : 0))
            }
        });

    }

    function getDate(date1) {
        let date = new Date(parseInt(date1));
        let stringDate = ""
        stringDate += date.getDate() < 10 ? `0${date.getDate()}/` : `${date.getDate()}/`
        stringDate += date.getMonth() + 1 < 10 ? `0${date.getMonth() + 1}/` : `${date.getMonth() + 1}/`
        stringDate += date.getFullYear()
        stringDate += date.getHours() < 10 ? ` 0${date.getHours()}` : ` ${date.getHours()}`
        stringDate += date.getMinutes() < 10 ? `:0${date.getMinutes()}` : `:${date.getMinutes()}`
        stringDate += ":00"
        return stringDate
    }

    function refreshData() {
        getData();
    }

    function sortcategs(sortByDate) {
        if (sortByDate) {
            setCommandes(commandes.sort((a, b) => (a.DateCmd > b.DateCmd) ? 1 : (a.DateCmd < b.DateCmd) ? -1 : 0))
        } else {
            setCommandes(commandes.sort((a, b) => (a.DateCmd < b.DateCmd) ? 1 : (a.DateCmd > b.DateCmd) ? -1 : 0))
        }
    }

    async function validerCmd(CodeCmd) {
        const cmd = commandes.find(cmd => { return CodeCmd === cmd.CodeCmd })
        if (cmd) {
            const employeString = localStorage.getItem("employe")
            const admin = JSON.parse(employeString);
            await VerifierCommandeServices.updateCommandeStatus(CodeCmd, { ...cmd, Status: 1 }, admin.CodeEmp)
            setCommandes(commandes.map(cmd => {
                if (cmd.CodeCmd === CodeCmd) {

                    return { ...cmd, Status: 1 }
                }
                return cmd
            }))
        }
    }
    return (
        <>
            {employeAuthed && <div style={{ height: "100%", margin: "auto", paddingRight: "15px", paddingLeft: "15px", }}>
                <Row style={{ height: "100%", }}>
                    <Col xs={12} >
                        <Card style={{ height: "100%" }} >
                            <Card.Title style={{ marginTop: "5px", textAlign: "center" }}>
                                Commandes

                            </Card.Title>

                            <hr style={{ margin: "0px" }} />
                            <Card.Body style={{ }}>
                                <Row>
                                    <Col xs={12}>
                                        <div style={{ height: "100%" }}>
                                            <Card.Title style={{ marginBottom: "0px", textAlign: "right" }}>



                                                <Button variant="light" className='m-1' onClick={() => { setSortByDate(!sortByDate); sortcategs(!sortByDate) }}>{sortByDate && <FiArrowUp />} {!sortByDate && <FiArrowDown />} Date</Button>
                                                <Button variant="light" className='m-1' onClick={() => { refreshData() }}><FiRefreshCw /></Button>

                                            </Card.Title>
                                        </div>


                                    </Col>
                                    <Col>
                                        <hr />
                                    </Col>
                                    {
                                        commandes.map((cmd, index) => (
                                            <Col xs={12} key={index}>

                                                <Card bg="light" text="dark" className="mb-2 w-100" >
                                                    <Card.Body>

                                                        <div className="media">
                                                            <Row>
                                                                <Col xs={6} sm={6} md={3} style={{ textAlign: "center" }}>
                                                                    <img className="media-object mr-auto ml-auto" src="/Images/order.png" alt="" />
                                                                </Col>
                                                                <Col xs={6} md={5} lg={6} xl={7} sm={6}>
                                                                    <div className="media-body">
                                                                        <h5 className="mb-4">
                                                                            Date : {getDate(cmd.DateCmd)}
                                                                        </h5>
                                                                        {cmd.Depuis !== "CLIENT" && <h5>
                                                                            Table : {cmd.TableNumber}
                                                                        </h5>}
                                                                        <h5>
                                                                            Prix Total : {cmd.PrixTotalCmd} DT
                                                                        </h5>
                                                                        <h5>
                                                                            Depuis : {cmd.Depuis === "CLIENT" ? "Client" : `Serveur (${cmd.CodeEmp})`}
                                                                        </h5>

                                                                    </div>
                                                                </Col>
                                                                <Col xl={2} lg={3} md={4} sm={5} xs={9} style={{ textAlign: "right", marginRight: "auto", marginLeft: "auto" }}>
                                                                    <div style={{ padding: "5px", width: "100%", textAlign: "center" }}>
                                                                        <Button variant="info" size="sm" style={{ marginTop: "5px" }} className="mb-3 w-100" onClick={(e) => { setCodeCmd(cmd.CodeCmd); showModal(true) }}><FiInfo /> Voir plus</Button>
                                                                        {cmd.Status === 0 && <Button variant="success" size="sm" style={{ marginTop: "5px" }} className="mb-3 w-100" onClick={() => { validerCmd(cmd.CodeCmd) }}>Valider Commande</Button>}
                                                                    </div>
                                                                </Col>
                                                            </Row>
                                                        </div>
                                                    </Card.Body>
                                                </Card>
                                            </Col>
                                        ))
                                    }
                                </Row>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
                {
                    <Modal size="lg" show={modal} onHide={showModal}>
                        <Modal.Header closeButton>
                            <Modal.Title>Commande</Modal.Title>
                        </Modal.Header>
                        <Modal.Body style={{ height: "calc(100vh - 200px)", overflowY: "scroll" }}>
                            {loadingProducts && <div style={{ width: "100%", height: "100%", display: "flex", flexDirection: "row", justifyContent: "center", flexWrap: "wrap", alignContent: "center" }}>
                                <ReactLoading type={"spokes"} color="#000" />
                            </div>}
                            {!loadingProducts &&
                                <>{
                                    cmdProducts.map((prod, index) => (
                                        <Card bg="light" text="dark" className="mb-2 w-100" key={index} >
                                            <Card.Body>

                                                <div className="media">
                                                    <Row>
                                                        <Col xs={12} sm={6} md={6} lg={4} xl={4} style={{ textAlign: "center" }}>
                                                            {/* <div className="media-left" style={{ marginRight: "auto", marginLeft: "auto" }}> */}
                                                            <img className="media-object" src="/Images/food1.png" alt="" />
                                                            {/* </div> */}
                                                        </Col>
                                                        <Col xs={12} md={6} lg={8} xl={8} sm={6}>
                                                            <div className="media-body">
                                                                <h4>{prod.LibProd}</h4>
                                                                <h5>Prix : <strong>{parseFloat(prod.Prix * (1 + (prod.TauxTVA * 0.01))).toFixed(1)} DT</strong></h5>
                                                                <h5>Quantite : <strong>{prod.Qte}</strong></h5>
                                                                <h5>Total : <strong> {(parseFloat((prod.Prix * (1 + (prod.TauxTVA * 0.01))) * prod.Qte).toFixed(1))} DT</strong></h5>
                                                                <h6>Description : {prod.DesProd}</h6>
                                                            </div>
                                                        </Col>

                                                    </Row>
                                                </div>
                                            </Card.Body>
                                        </Card>
                                    ))}</>
                            }
                        </Modal.Body>
                        <Modal.Footer style={{ justifyContent: "space-between", flexWrap: "nowrap" }}>
                            {CodeCmd && commandes && <h4 >Total : {(commandes.find(cmd => { return CodeCmd === cmd.CodeCmd })) ? (commandes.find(cmd => { return CodeCmd === cmd.CodeCmd })).PrixTotalCmd : ''} DT</h4>}
                        </Modal.Footer>
                    </Modal>
                }
            </div>}
            {
                !employeAuthed && <LoginAdminComponent />
            }
        </>
    )
}
