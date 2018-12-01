import React, { Component } from 'react';
import './Programas.css';
import {
    Button, ButtonToolbar, Grid, Row, Col,
    Media, Navbar, Nav, NavItem, NavDropdown, MenuItem,
    FormGroup, FormControl, Carousel
} from 'react-bootstrap';

export default class Programas extends React.Component {
    render() {
        return (
            <div>
                <Navbar inverse collapseOnSelect fixedTop>
                    <Navbar.Header>
                    <Navbar.Brand onClick={() => this.props.history.push('/Inicio')}>
                            <a href="">Master Key</a>
                        </Navbar.Brand>
                        <Navbar.Toggle />
                    </Navbar.Header>
                    <Navbar.Collapse>
                        <Nav>
                            <NavDropdown eventKey={3} title="" id="basic-nav-dropdown">
                                <MenuItem eventKey={3.1}>Informacion</MenuItem>
                                <MenuItem eventKey={3.2}>Redes Sociales</MenuItem>
                                <MenuItem eventKey={3.3}>Contactos</MenuItem>
                                <MenuItem eventKey={3.3}>Blog</MenuItem>
                            </NavDropdown>
                            <NavItem onClick={() => this.props.history.push('/Juegos_Android')}>
                                Juegos Android
              </NavItem>
                            <NavItem onClick={() => this.props.history.push('/Aplicaciones')}>
                                Aplicaciones
      </NavItem>
                            <NavItem onClick={() => this.props.history.push('/Juegos_Pc')}>
                                Juegos Pc
      </NavItem>
                            <NavItem onClick={() => this.props.history.push('/Programas')}>
                                Programas
              </NavItem>
                            <NavItem onClick={() => this.props.history.push('/Pelicula')}>
                                Peliculas
              </NavItem>
                        </Nav>
                        <Nav pullRight>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>;
            </div>
        );
    }
}