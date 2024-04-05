import React, { useEffect, useState } from 'react'
import { Button, Card, Col, Form, Modal, Row } from 'react-bootstrap'
import { FiPlusCircle } from 'react-icons/fi'
import NumericInput from 'react-numeric-input'
import { useHistory, useLocation, useParams } from 'react-router'
import ArticleServices from '../../Services/ArticleServices'
import CategoriesServices from '../../Services/CategoriesServices'
import CommandeServices from '../../Services/CommandeServices'
import LoginEmployerComponent from '../Login/LoginEmployerComponent'
import "./../../Styles/CommandeComponentStyle.css"

export default function CommandeComponent({ parentCallback }) {
    const { search } = useLocation();
    const { societeCode, codeCateg } = useParams()
    const [categories, setCategories] = useState([])
    const [articlesPerCateg, setArticlesPerCateg] = useState([])
    const history = useHistory();
    const [numericInputValues, setNumericInputValues] = useState([])
    const [commande, setCommande] = useState([])
    const [modal, showModal] = useState(false);
    const [tableNumber, setTableNumber] = useState(new URLSearchParams(search).get('table'))
    const [isEmploye] = useState(new URLSearchParams(search).get('employe'))
    const [ClientName, setClientName] = useState("")
    const [employeAuthed, setEmployeAuthed] = useState(false);
    const [isClient] = useState(new URLSearchParams(search).get('client'))

    useEffect(() => {
        parentCallback(societeCode)
        setEmployeAuthed(verifyIsEmploye());
        CategoriesServices.getCategoriesByCodeSoc(societeCode).then(categs => {
            setCategories(categs)
        })
        if (codeCateg) {
            ArticleServices.getArticlesByCodeSocieteAndCodeCateg(societeCode, codeCateg).then(articles => {
                const length = articles.length
                setNumericInputValues(new Array(length).fill(""))
                setArticlesPerCateg(articles)
            })
        }


    }, [parentCallback, societeCode, codeCateg])

    function verifyIsEmploye() {
        const employeString = localStorage.getItem("employe")
        if (employeString) {
            const employe = JSON.parse(employeString);
            const isServeur = employe.Fonction === "SERVEUR";
            return isServeur;
        }
        return false;
    }

    function ajouterProduitCmd(e, article, index) {
        let val = 0;
        const button = e.target;
        const exist = commande.find(cmd => {
            return cmd.product.CodeArt === article.CodeArt
        })

        setNumericInputValues(numericInputValues.map((value, i) => {
            if (i === index) {
                val = parseInt(value);
                return ""
            }
            return value
        }))

        if (!val || isNaN(val) || val === "0" || val === "") return
        if (exist) {
            val += exist.quantite;
            setCommande(commande.map(cmd => {
                if (cmd.product.CodeArt === exist.product.CodeArt) {
                    return { ...cmd, quantite: val }
                }
                return cmd
            }))
        } else {
            const cmd = {
                product: article,
                quantite: val,
                total: (article.prix1 * (1 + (article.tauxtva * 0.01))) * val
            }
            setCommande([...commande, cmd])
        }

        button.className = button.className.replace("primary", "success")
        button.innerHTML = "Ajouté !"
        setTimeout(() => {

            button.className = button.className.replace("success", "primary")
            button.innerHTML = "Ajouter"
        }, 1000);
    }
    function changeInputValue(e, index) {
        setNumericInputValues(numericInputValues.map((value, i) => {
            if (i === index) {
                return `${e}`
            }
            return value
        }))
    }
    function changeCommandeQuatite(value, index) {
        if (!value || isNaN(value) || value === "" || parseInt(value) === 0) return
        setCommande(commande.map((cmd, i) => {
            if (i === index) {
                return { ...cmd, quantite: parseInt(value), total: (cmd.product.prix1 * (1 + (cmd.product.tauxtva * 0.01))) * parseInt(value) }
            }

            return cmd
        }))
    }

    function supprimerProduit(index) {
        setCommande(commande.filter((cmd, i) => {
            return i !== index
        }))
    }
    function changeCateg(e) {
        let index = e.target.value;
        if (index >= 0) {
            setArticlesPerCateg([])
            if (isEmploye)
                history.push(`/Commande/${societeCode}/${categories[index].CodeCat}?employe=${isEmploye}&table=${tableNumber}`)
            else if (isClient)
                history.push(`/Commande/${societeCode}/${categories[index].CodeCat}?client=${isClient}`)
        } else {
            history.push(`/Commande/${societeCode}?employe=${isEmploye}&table=${tableNumber}`)
        }
    }
    async function confirmCmd() {
        if (!tableNumber && isEmploye) {
            alert("Veuillez choisir un numéro de table")
            return
        }
        if (commande.length <= 0) {
            alert("Veuillez ajouter des produits à la commande")
            return
        }
        if (ClientName === "" && isClient) {
            alert("Veuillez saisir un nom")
            return
        }
        const depuis = isClient ? "CLIENT" : isEmploye ? "EMPLOYE" : ""
        const CodeEmp = isEmploye ? (JSON.parse(localStorage.getItem("employe"))).CodeEmp : ""
        await CommandeServices.insertCommande(commande, tableNumber, societeCode, ClientName, depuis,CodeEmp);
        cleanup();
    }

    function cleanup() {
        showModal(false)
        setCommande([]);
        setNumericInputValues(new Array(articlesPerCateg.length).fill(""))
    }
    return (
        <>

            {((isEmploye && employeAuthed) || isClient) && <div style={{ height: "100%", margin: "auto", paddingRight: "15px", paddingLeft: "15px", }}>
                <Row style={{ height: "100%", }}>
                    <Col xs={12} sm={12} md={6} lg={6} xl={6} style={{ height: "100%", marginBottom: "15px" }} >
                        <Card style={{ height: "100%", paddingLeft: "15px", paddingRight: "15px", }} >
                            <Card.Title style={{ marginTop: "12px", textAlign: "center" }}>
                                <div style={{ height: "100%", width: "100%" }}>

                                    <Form.Row style={{ alignItems: "flex-end" }}>

                                        <Form.Label column="md" className="mr-auto" xl={3} lg={4} sm={6} xs={12}>
                                            {isEmploye ? 'Table' : isClient ? 'Nom' : ''}
                                        </Form.Label>

                                        <Col sm={4} xs={6} style={{ marginLeft: "auto", marginRight: "auto" }}>
                                            {isEmploye && <NumericInput value={tableNumber} onChange={(e) => { history.push(`${history.location.pathname}?employe=${isEmploye}&table=${e}`); setTableNumber(e) }} precision={0} step={1} min={1} size={2} mobile style={{ input: { width: "100%", marginTop: "3px", marginBottom: "3px" } }} />}
                                            {isClient && <Form.Control type="text" value={ClientName} onChange={(e) => { setClientName(e.target.value) }}></Form.Control>}
                                        </Col>
                                    </Form.Row>
                                </div>
                            </Card.Title>

                        </Card>
                    </Col>
                    <Col xs={12} sm={12} md={6} lg={6} xl={6} style={{ height: "100%", marginBottom: "15px" }} >
                        <Card style={{ height: "100%", paddingLeft: "15px", paddingRight: "15px" }} >
                            <Card.Title style={{ marginTop: "12px", textAlign: "center" }}>
                                <div style={{ height: "100%", width: "100%" }}>

                                    <Form.Row style={{ alignItems: "flex-end" }}>
                                        <Form.Label column="md" xl={3} lg={4} xs={12} sm={6}>
                                            Categories
                                        </Form.Label>
                                        <Col sm={5} xs={12} style={{ marginLeft: "auto", marginRight: "auto" }}>
                                            <Form.Control as="select" onChange={(e) => { changeCateg(e) }}>
                                                <option value="-1">Selectionner une categorie ...</option>
                                                {categories.map((categ, index) => (
                                                    <option key={index} selected={categ.CodeCat === codeCateg} value={index}>{categ.DesCat}</option>
                                                ))}
                                            </Form.Control>
                                        </Col>
                                    </Form.Row>
                                </div>
                            </Card.Title>

                        </Card>
                    </Col>

                    {codeCateg && <Col xs={12} >
                        <Card style={{ height: "100%" }} >
                            <Card.Title style={{ marginTop: "5px", textAlign: "center" }}>
                                Produits
                            </Card.Title>
                            <hr style={{ margin: "0px" }} />
                            <Card.Body style={{ }}>
                                <Row>
                                    {
                                        articlesPerCateg.map((article, index) => (
                                            <Col xs={12} key={index}>
                                                <Card bg="light" text="dark" className="mb-2 w-100" >
                                                    <Card.Body>

                                                        <div className="media">
                                                            <Row>
                                                                <Col xs={6} sm={6} md={3} style={{ textAlign: "center" }}>
                                                                    <img className="media-object mr-auto ml-auto" src="/Images/food1.png" alt="" />
                                                                </Col>
                                                                <Col xs={6} md={5} lg={6} xl={7} sm={6}>
                                                                    <div className="media-body">
                                                                        <h4 className="">{article.LibArt}</h4>

                                                                        <h5>{parseFloat(article.prix1 * (1 + (article.tauxtva * 0.01))).toFixed(1)} DT  {article.unite === "PIECE" ? "/ PIECE" : ""}</h5>
                                                                        <h5 style={{ color: `${article.dispo === 0 ? "green" : "red"}` }}>{article.dispo === 0 ? "" : "Non"} Disponible </h5>
                                                                        <h6>Description : {article.Descrip} </h6>
                                                                    </div>
                                                                </Col>
                                                                <Col xl={2} lg={3} md={4} sm={5} xs={9} style={{ textAlign: "right", marginRight: "auto", marginLeft: "auto" }}>
                                                                    <div style={{ padding: "5px", width: "150px", marginRight: "auto", marginLeft: 'auto' }}>
                                                                        <NumericInput precision={0} className='form-control' min={1} value={numericInputValues[index]} mobile style={{ input: { width: "100%" } }} onChange={(e) => { changeInputValue(e, index); }} />
                                                                        {/* <input value={numericInputValues[index]} onChange={(e) => { changeInputValue(e, index) }} min={0} type='number' className="input-group-btn" style={{ textAlign: "center" }} /> */}
                                                                        <Button size="md" style={{ marginTop: "5px", width: "100%" }} className="" onClick={(e) => { ajouterProduitCmd(e, article, index) }}  ><FiPlusCircle /> Ajouter</Button>
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
                    </Col>}
                </Row>
                {
                    <Modal size="lg" show={modal} onHide={showModal}>
                        <Modal.Header closeButton>
                            <Modal.Title>Commande</Modal.Title>
                        </Modal.Header>
                        <Modal.Body style={{ height: "calc(100vh - 200px)", overflowY: "scroll" }}>
                            {tableNumber && <div><h5>Table : {tableNumber}</h5>
                                <hr /></div>}
                            {commande.length > 0 && <><div style={{ display: "flex", flexDirection: "row", justifyContent: "flex-end" }}>
                                <Button variant="danger" onClick={() => { setCommande([]); }}>Supprimer tous</Button>

                            </div>  <hr /></>}
                            {
                                commande.map((cmd, index) => (
                                    <Card key={index} bg="light" text="dark" className="mb-2 w-100" >
                                        <Card.Body>

                                            <div className="media">
                                                <Row>
                                                    <Col xs={6} sm={6} md={3} style={{ textAlign: "right" }}>
                                                        <div className="media-left">
                                                            <img className="media-object" src="/Images/food1.png" alt="HP Chromebook 11" />
                                                        </div>
                                                    </Col>
                                                    <Col xs={6} md={5} lg={5} xl={6} sm={6}>
                                                        <div className="media-body">
                                                            <h4 className="">{cmd.product.LibArt}</h4>
                                                            <h5>{parseFloat(cmd.product.prix1 * (1 + (cmd.product.tauxtva * 0.01))).toFixed(1)} DT  {cmd.product.unite === "PIECE" ? "/ PIECE" : ""}</h5>
                                                            <h5>Total : <strong>{parseFloat(cmd.total).toFixed(1)} DT</strong></h5>
                                                            <h6>Description : {cmd.product.Descrip}</h6>
                                                        </div>
                                                    </Col>
                                                    <Col xs={8} md={4} lg={4} xl={3} sm={8} style={{ marginRight: "auto", marginLeft: "auto" }}>
                                                        <div style={{ padding: "5px" }}>
                                                            <NumericInput precision={0} className='form-control' min={1} value={cmd.quantite} mobile style={{ input: { width: "100%" } }} onChange={(e) => { changeCommandeQuatite(e, index) }} />
                                                            {/* <input value={cmd.quantite} onChange={(e) => { changeCommandeQuatite(e, index) }} min={1} type='number' className="input-group-btn" style={{ textAlign: "center" }} /> */}
                                                            <Button size="sm" style={{ }} className="w-100 mt-2" variant="danger" onClick={(e) => { supprimerProduit(index) }} >Supprimer</Button>
                                                        </div>
                                                    </Col>
                                                </Row>
                                            </div>
                                        </Card.Body>
                                    </Card>
                                ))
                            }
                        </Modal.Body>
                        <Modal.Footer style={{ justifyContent: "space-between", flexWrap: "nowrap" }}>
                            <h4 >Total : {parseFloat(commande.reduce((a, cmd) => a = a + cmd.total, 0)).toFixed(1)} DT</h4>
                            <Button variant="primary" onClick={() => { confirmCmd() }}> Confirmer Commande </Button>
                        </Modal.Footer>
                    </Modal>
                }
                {codeCateg && <Button variant={"success"} style={{ position: "fixed", bottom: "100px", right: "30px", zIndex: "1000" }} onClick={() => { showModal(true) }} >Confirmer Commande</Button>}
                <Button variant={"dark"} style={{ position: "fixed", bottom: "100px", left: "30px", zIndex: "1000" }} onClick={() => { window.scrollTo(0, 0) }}>TOP</Button>
            </div >}
            {(isEmploye && !employeAuthed) && <>
                <LoginEmployerComponent />
            </>}
        </>
    )
}
