import React, { Component } from 'react';
import './App.css';
import x5 from '../src/x5.png'
import x6 from '../src/x6.png'
import x7 from '../src/x7.jpg'
import {
  Button, ButtonToolbar, Grid, Row, Col,
  Media, Navbar, Nav, NavItem, NavDropdown, MenuItem, FormGroup, FormControl, Carousel
} from 'react-bootstrap';
class App extends Component {
  render() {
    return (
      <div>
        <Navbar inverse collapseOnSelect fixedTop>
          <Navbar.Header>
            <Navbar.Brand>
              <a href="#brand">Master Key</a>
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
              <NavItem eventKey={1} href="#">
                Juegos Android
      </NavItem>
              <NavItem eventKey={2} href="#">
                Aplicaciones
      </NavItem>
              <NavItem eventKey={1} href="#">
                Juegos Pc
      </NavItem>
              <NavItem eventKey={1} href="#">
                Programas
      </NavItem>
              <NavItem eventKey={1} href="#">
                Peliculas
      </NavItem>
            </Nav>
            <Nav pullRight>
            </Nav>
          </Navbar.Collapse>
        </Navbar>;

        <Carousel>
          <Carousel.Item>
            <img width={1366} height={618} alt="900x500" src={x5} />
          </Carousel.Item>
          <Carousel.Item>
            <img width={1366} height={618} alt="900x500" src={x6} />
          </Carousel.Item>
          <Carousel.Item>
            <img width={1366} height={618} alt="900x500" src={x7} />
          </Carousel.Item>
        </Carousel>
        </div>
    );
  }
}

export default App;
