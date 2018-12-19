import React, { Component } from 'react';
import './Juegos_Android.css';
import m2 from '../../Assets/m2.jpg'
import m1 from '../../Assets/m1.jpg'
import m3 from '../../Assets/m3.jpg'
import j1 from '../../Assets/j1.jpg'
import j2 from '../../Assets/j2.jpg'
import j3 from '../../Assets/j3.jpg'
import j4 from '../../Assets/j4.jpg'
import j5 from '../../Assets/j5.jpg'
import {
    Button, ButtonToolbar, Grid, Row, Col,
    Media, Navbar, Nav, NavItem, NavDropdown, MenuItem,
    FormGroup, FormControl, Carousel, Thumbnail
}from 'react-bootstrap';
import NavBar from '../Navbar/Navbar';

export default class Juegos_Android extends React.Component {
    render() {
        return (
            <div>
                <br></br>
                <NavBar history={this.props.history}></NavBar>
                <br></br>
                <br></br>
                <Carousel>
                    <Carousel.Item>
                        <img width={1367} height={200} src={m2} />

                    </Carousel.Item>
                    <Carousel.Item>
                        <img width={1367} height={200} src={m1} />

                    </Carousel.Item>
                    <Carousel.Item>
                        <img width={1367} height={200} src={m3} />
                    </Carousel.Item>
                </Carousel>

                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <Grid>

                <Row className="show-grid">
                        <Col xs={5} md={3}><br></br>
                            <Thumbnail src={j1}>
                                <h3>Mass Effect</h3>
                                <p>
                                    <Button bsStyle="link">Descargar</Button>
                                </p>
                            </Thumbnail>
                        </Col>
                        <Col xs={5} md={3}><br></br>
                            <Thumbnail src={j2}>
                                <h3>Battlefleld 1</h3>
                                <p>
                                    <Button bsStyle="link">Descargar</Button>
                                </p>
                            </Thumbnail>
                        </Col>
                        <Col xs={5} md={3}><br></br>
                            <Thumbnail src={j3}>
                                <h3>Battlefleld</h3>
                                <p>
                                    <Button bsStyle="link">Descargar</Button>
                                </p>
                            </Thumbnail>
                        </Col>
                        <Col xs={5} md={3}><br></br>
                            <Thumbnail src={j4}>
                                <h3>Watch D. 2</h3>
                                <p>
                                    <Button bsStyle="link">Descargar</Button>
                                </p>
                            </Thumbnail>
                        </Col>
                        
                    </Row>

                    <Row className="show-grid">
                        <Col xs={5} md={3}><br></br>
                            <Thumbnail src={j1}>
                                <h3>Mass Effect</h3>
                                <p>
                                    <Button bsStyle="link">Descargar</Button>
                                </p>
                            </Thumbnail>
                        </Col>
                        <Col xs={5} md={3}><br></br>
                            <Thumbnail src={j2}>
                                <h3>Battlefleld 1</h3>
                                <p>
                                    <Button bsStyle="link">Descargar</Button>
                                </p>
                            </Thumbnail>
                        </Col>
                        <Col xs={5} md={3}><br></br>
                            <Thumbnail src={j3}>
                                <h3>Battlefleld</h3>
                                <p>
                                    <Button bsStyle="link">Descargar</Button>
                                </p>
                            </Thumbnail>
                        </Col>
                        <Col xs={5} md={3}><br></br>
                            <Thumbnail src={j4}>
                                <h3>Watch D. 2</h3>
                                <p>
                                    <Button bsStyle="link">Descargar</Button>
                                </p>
                            </Thumbnail>
                        </Col>
                        
                    </Row>

                </Grid>
            </div>
        );
    }
}