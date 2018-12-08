import React from 'react';
import './Navbar.css';
import f from '../../Assets/f.png'
import w from '../../Assets/w.png'
import t from '../../Assets/t.png'
import y from '../../Assets/y.png'
import {
  Navbar, Nav, NavItem, FormGroup, FormControl, Button
} from 'react-bootstrap';

export default class NavBar extends React.Component {

  render() {
    return (
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
          </Nav>


          <Nav pullRight>
            <NavItem onClick={() => this.props.history.push('/Peliculas')}>
              <img src={t} />
            </NavItem>
            <NavItem onClick={() => this.props.history.push('/Peliculas')}>
              <img src={f} />
            </NavItem>
            <NavItem onClick={() => this.props.history.push('/Peliculas')}>
              <img src={y} />
            </NavItem>
            <NavItem onClick={() => this.props.history.push('/Peliculas')}>
              <img src={w} />
            </NavItem>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}