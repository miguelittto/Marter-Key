import React, { Component } from 'react';
import './Aplicaciones.css';
import {
    Button, ButtonToolbar, Grid, Row, Col,
    Media, Navbar, Nav, NavItem, NavDropdown, MenuItem,
    FormGroup, FormControl, Carousel
} from 'react-bootstrap';
import NavBar from '../Navbar/Navbar';

export default class Aplicaciones extends React.Component {
    render() {
        return (
            <div>
                <NavBar history={this.props.history}></NavBar>
            </div>
        );
    }
}