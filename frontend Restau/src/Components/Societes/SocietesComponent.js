import React, { useState, useEffect } from 'react'
import { Container, Table, Button } from 'react-bootstrap'
import SocieteServices from "../../Services/SocieteServices"
import { Link } from "react-router-dom"
import { FiInfo } from 'react-icons/fi'
export default function SocieteComponent({ parentCallback }) {
    const [societes, setSocietes] = useState([])
    useEffect(() => {
        localStorage.removeItem("employe")
        parentCallback("")
        SocieteServices.getSocietes().then(societes => {
            setSocietes(societes);
            
        })
    }, [parentCallback])

    return (
        <div>
            <Container>
                <Table bordered striped responsive>
                    <thead>
                        <tr>
                            <th style={{ textAlign: "right", width: "0%", verticalAlign: "top" }}>#</th>
                            <th style={{ verticalAlign: "top", width: "100%" }}>Nom</th>

                            <th colSpan="2" style={{ verticalAlign: "top", width: "100%" }}>Passer Commande</th>
                            <th style={{ verticalAlign: "top", width: "100%" }}>Verifier Commande</th>
                            <th style={{ verticalAlign: "top", width: "100%" }}>Détails</th>
                            {/* <th ></th> */}

                        </tr>
                    </thead>
                    <tbody>
                        {
                            societes.map((societe, index) => (
                                <tr key={index}>
                                    <td style={{ textAlign: "right", verticalAlign: "middle", width: "0%" }}>{index + 1}</td>
                                    <td style={{ verticalAlign: "middle", }}>{societe.rsoc}</td>

                                    <td style={{ textAlign: "center", verticalAlign: "middle" }}>
                                        <Button style={{ }} as={Link} variant="light" to={`/Commande/${societe.code}?client=true`}>
                                            Client
                                        </Button>

                                    </td>
                                    <td style={{ textAlign: "center", verticalAlign: "middle" }}>


                                        <Button style={{ }} as={Link} variant="light" to={`/Commande/${societe.code}?employe=true`}>
                                            Employer
                                        </Button>

                                    </td>
                                    <td style={{ textAlign: "center", verticalAlign: "middle" }}>
                                        <Button style={{ }} as={Link} variant="light" to={`/VerifierCommande/${societe.code}`}>
                                            Administrateur
                                        </Button>
                                    </td>
                                    <td style={{ textAlign: "center", verticalAlign: "middle" }}>
                                        <Button style={{ }} as={Link} variant="light" to={`/Categories/${societe.code}/0`}>
                                            <FiInfo />
                                        </Button>
                                    </td>

                                </tr>
                            ))
                        }


                    </tbody>
                </Table>
            </Container >

        </div >
    )
}
