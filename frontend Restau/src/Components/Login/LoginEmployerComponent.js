import aes256 from 'aes256'
import React, { useRef } from 'react'
import { Button, Card, Form } from 'react-bootstrap'
import LoginEmployerServices from '../../Services/LoginEmployerServices'
import CenteredContainer from '../Shared/CenteredContainer'

export default function LoginEmployerComponent() {
    const loginRef = useRef()
    const passwordRef = useRef()


    async function handleSubmit() {

        const password = passwordRef.current.value
        const login = loginRef.current.value
        const passwordCrypted = aes256.encrypt(password, password);
        LoginEmployerServices.login(login, passwordCrypted).then(res => {
            if (res.errorLogin === 0) {
                const employe = aes256.decrypt(password, res.employe)
                localStorage.setItem("employe", employe)
                window.location.reload();
            } else if (res.errorLogin === 1) {
                alert("Les informations entrées sont incorrectes");
            } else if (res.errorLogin === 2) {
                alert("Vous n'avez pas de droit de se connecter ici");
            }
        }).catch(e => {
            console.error(e);
        })
    }
    return (
        <div>
            <CenteredContainer>
                <Card>
                    <Card.Body>
                        <div className="d-inline-block"></div>
                        <h3 className="text-center">Passer une Commande</h3>
                        <Form onSubmit={(e) => { e.preventDefault() }}>
                            <Form.Group id="login">
                                <Form.Label>Login</Form.Label>
                                <Form.Control type="text" ref={loginRef} required />
                            </Form.Group>
                            <Form.Group id="password">
                                <Form.Label>Mot de passe</Form.Label>
                                <Form.Control type="password" ref={passwordRef} required />
                            </Form.Group>
                            <Form.Group style={{ textAlign: "center" }}>
                                <Button type="button" onClick={handleSubmit}>
                                    S'identifier
                                </Button>
                            </Form.Group>
                        </Form>
                    </Card.Body>
                </Card>
            </CenteredContainer>
        </div>
    )
}
