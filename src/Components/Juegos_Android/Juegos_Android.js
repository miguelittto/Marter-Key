import React, { Component } from 'react';
import './Juegos_Android.css';
import {
    Button, ButtonToolbar, Grid, Row, Col,
    Media, Navbar, Nav, NavItem, NavDropdown, MenuItem,
    FormGroup, FormControl, Carousel
} from 'react-bootstrap';
import NavBar from '../Navbar/Navbar';

export default class Juegos_Android extends React.Component {
    render() {
        return (
            <div>
                <NavBar history={this.props.history}></NavBar>
            </div>
        );
    }
}