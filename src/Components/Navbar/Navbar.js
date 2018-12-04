import React from 'react';
import './Navbar.css';
import {
    Navbar, Nav, NavItem, NavDropdown, MenuItem
  } from 'react-bootstrap';

export default class NavBar extends React.Component {
    
    render(){
        return(
            <Navbar inverse collapseOnSelect fixedTop>
            <Navbar.Header>
              <Navbar.Brand onClick={() => this.props.history.push('/Inicio')}>
                <a onClick={() => this.props.history.push('/Inicio')}>Master Key</a>
              </Navbar.Brand>
              <Navbar.Toggle />
            </Navbar.Header>
            <Navbar.Collapse>
              <Nav>
                <NavItem onClick={() => this.props.history.push('/Inicio')}>
                  Inicio
                </NavItem>
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
                <NavItem onClick={() => this.props.history.push('/Peliculas')}>
                  Peliculas
                </NavItem>
              </Nav>
              <Nav pullRight>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
        );
    }
}