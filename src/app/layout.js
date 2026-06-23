'use client'

import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

import 'bootstrap/dist/css/bootstrap.min.css';
import {createContext, useState} from "react";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const AutContext = createContext(['', ()=>{}]);

export default function RootLayout({ children }) {

    const [usernameAut, setUsernameAut] = useState('');

    return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body>
      <Navbar expand="lg" className="bg-body-tertiary">
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
              <Navbar.Brand>Nome do Utilizador: {usernameAut}</Navbar.Brand>
          </Container>
      </Navbar>
      <AutContext.Provider value={[usernameAut, setUsernameAut]}>
          <div className={'container bg-dark-subtle min-vh-100'}>
              {children}
          </div>
      </AutContext.Provider>

      </body>
    </html>
  );
}
