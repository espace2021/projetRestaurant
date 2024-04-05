import React, { useEffect, useState } from 'react'
import { Navbar, Container, Nav, NavDropdown, Button } from 'react-bootstrap'
import SocieteServices from '../../Services/SocieteServices'
import "./../../Styles/NavBarStyles.css"
export default function NavBarComponent({ codeSociete }) {
    const [societe, setSociete] = useState()
    useEffect(() => {

        if (codeSociete !== "Societe" && codeSociete !== "")
            SocieteServices.getSocieteByCode(codeSociete).then((soc) => {
                setSociete(soc[0]);
                
            })
        else
            setSociete("");
    }, [codeSociete])
    return (
        <Navbar bg="primary" variant="dark" sticky="top" style={{ marginBottom: "20px" }} expand="lg">

            <Container>
                {<Navbar.Brand href={`/Categories/${codeSociete}/0`}>{societe ? societe.rsoc : ""}</Navbar.Brand>}
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav" style={{ justifyContent: "flex-end" }}>
                    <Nav className="justify-content-end" >
                        <Nav.Link href={`/`} style={{ color: "white", border: "lightgrey solid 0.5px", borderRadius: "3px", marginRight: "10px", textAlign: "center" }}>Home</Nav.Link>
                        {
                            codeSociete && codeSociete !== "Societe" &&
                            <NavDropdown style={{ a: { color: "white" }, border: "lightgrey solid 0.5px", borderRadius: "3px", marginRight: "10px", textAlign: "center" }} title="Passer Commande" >
                                <NavDropdown.Item href={`/Commande/${societe.code}?employe=true`}>Employer</NavDropdown.Item>
                                <NavDropdown.Item href={`/Commande/${societe.code}?client=true`}>Client</NavDropdown.Item>
                            </NavDropdown>
                        }
                        {codeSociete && codeSociete !== "Societe" && <Nav.Link style={{ color: "white", border: "lightgrey solid 0.5px", borderRadius: "3px", marginRight: "10px", textAlign: "center" }} href={`/VerifierCommande/${codeSociete}`}>Verifier Commandes</Nav.Link>}
                        {
                            (localStorage.getItem("employe") !== null) &&
                            <Button style={{ color: "white", border: "lightgrey solid 0.5px", borderRadius: "3px", marginRight: "10px", textAlign: "center" }}
                                onClick={() => { localStorage.removeItem("employe"); window.location.reload(); }}>
                                Déconnecter
                            </Button>
                        }
                    </Nav>
                </Navbar.Collapse>
            </Container>

        </Navbar>
        // <Navbar bg="dark" sticky="top" style={{ marginBottom: "20px" }}>
        //     <Container>
        //         {societe ? <Navbar.Brand >{societe.rsoc}</Navbar.Brand> : ""}
        //         <Navbar.Toggle aria-controls="basic-navbar-nav" />
        //         <Navbar.Collapse id="basic-navbar-nav">
        //             <Nav className="mr-auto">
        //                 <Nav.Link href={`/`}>Home</Nav.Link>

        //                 {codeSociete && codeSociete !== "Societe" && <Nav.Link href={`/Commande/${codeSociete}`}>Passer Commande</Nav.Link>}
        //             </Nav>

        //         </Navbar.Collapse>
        //         {/* <Nav className="mr-auto text-truncate"> */}
        //         {/* {societe ? <Nav.Link className="mr-auto" href={`/Categories/${codeSociete}/0`}><h4>{societe.rsoc}</h4></Nav.Link> : ""} */}
        //         {/* </Nav> */}

        //     </Container>
        // </Navbar>
    )
}
