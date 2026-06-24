'use client'
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Container from 'react-bootstrap/Container';
import {AutContext} from "./ContextAutWeb";
import {useContext} from "react";

export default function NavBarWeb() {

    // adição de contexto
    const [autContext, setAutContext] = useContext(AutContext);

    return <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
            <Navbar.Brand href="/">React-Bootstrap</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                    <Nav.Link href="/">Home</Nav.Link>
                    <Nav.Link href="/lista">Lista</Nav.Link>
                    <NavDropdown title="Autenticação" id="basic-nav-dropdown">
                        <NavDropdown.Item href="/aut/login">Login</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="/aut/register">
                            Registo
                        </NavDropdown.Item>
                    </NavDropdown>
                </Nav>
            </Navbar.Collapse>
            <Navbar.Brand>Nome do Utilizador:{autContext}</Navbar.Brand>
        </Container>
    </Navbar>
}
