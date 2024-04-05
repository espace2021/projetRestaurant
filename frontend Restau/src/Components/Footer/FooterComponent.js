import React from 'react'
import { Navbar, Container } from 'react-bootstrap'
import { FiMail } from 'react-icons/fi'
import { BiWorld } from 'react-icons/bi'
import { HiPhone } from 'react-icons/hi'

export default function FooterComponent() {
    return (
        <Navbar collapseOnSelect bg="light" fixed="bottom">
            <Container>
                <div>
                    <a href='http://www.logicom-dev.com.tn' style={{ margin: "5px" }}><BiWorld />WebSite</a>{' '}
                    <a href='mailto:sf.logicom@tunet.com' style={{ margin: "5px" }}><FiMail />Mail</a>{' '}

                    <a href="tel:+21674416010" style={{ margin: "5px" }}><HiPhone /><sub>+216</sub>74416010</a>

                </div>
                <Navbar.Collapse className="justify-content-end">
                    <Navbar.Text>
                        <img alt="company-logo" width="100px" src="/Images/ComponyLogo/company-logo.png" />
                    </Navbar.Text>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}
