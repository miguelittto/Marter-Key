import React, { Component } from 'react';
import './App.css';
import x5 from '../../Assets/x5.png'
import x6 from '../../Assets/x6.png'
import x7 from '../../Assets/x7.jpg'
import {
  Button, ButtonToolbar, Grid, Row, Col,
  Media, Navbar, Nav, NavItem, NavDropdown, MenuItem,
  FormGroup, FormControl, Carousel
} from 'react-bootstrap';



class App extends Component {
  dummySentences = [
    'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
    'Donec hendrerit tempor tellus.',
    'Donec pretium posuere tellus.',
    'Proin quam nisl, tincidunt et, mattis eget, convallis nec, purus.',
    'Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.',
    'Nulla posuere.',
    'Donec vitae dolor.',
    'Nullam tristique diam non turpis.',
    'Cras placerat accumsan nulla.',
    'Nullam rutrum.',
    'Nam vestibulum accumsan nisl.'
  ];

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
              <NavItem onClick={() => this.props.history.push('/hola')}>
                Juegos Android
              </NavItem>
              <NavItem>
                Aplicaciones
      </NavItem>
              <NavItem>
                Juegos Pc
      </NavItem>
              <NavItem>
                Programas
              </NavItem>
              <NavItem>
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

        <br></br>
        <br></br>
        <br></br>

        <Grid>
          <Row className="show-grid">
            <Col sm={6} md={3}>
              <code>
                {<h2>Juegos Android</h2>}
              </code>
              <br />
              {this.dummySentences.slice(0, 6).join(' ')}
            </Col>
            <Col sm={6} md={3}>
              <code>
                {<h2>Aplicaciones</h2>}
              </code>
              <br />
              {this.dummySentences.slice(0, 4).join(' ')}
            </Col>
            <Col sm={6} md={3}>
              <code>
                {<h2>Juegos Pc</h2>}
              </code>
              <br />
              {this.dummySentences.slice(0, 6).join(' ')}
            </Col>
            <Col sm={6} md={3}>
              <code>
                {<h2>Programas</h2>}
              </code>
              <br />
              {this.dummySentences.slice(0, 2).join(' ')}
            </Col>
          </Row>
        </Grid>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
      </div>

    );
  }
}

export default App;
