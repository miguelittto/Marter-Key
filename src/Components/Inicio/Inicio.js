import React, { Component } from 'react';
import './Inicio.css';
import m2 from '../../Assets/m2.jpg'
import m1 from '../../Assets/m1.jpg'
import m3 from '../../Assets/m3.jpg'
import j1 from '../../Assets/j1.jpg'
import j2 from '../../Assets/j2.jpg'
import j3 from '../../Assets/j3.jpg'
import j4 from '../../Assets/j4.jpg'
import j5 from '../../Assets/j5.jpg'
import {
  Grid, Row, Col, Carousel, Thumbnail, Button
} from 'react-bootstrap';
import NavBar from '../Navbar/Navbar';


class Inicio extends Component {
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
        <Grid>
  
  <Row className="show-grid">
  <Col xs={6} md={2}><br></br>
    <img src={j1}/>
    </Col>
    <Col xs={6} md={2}><br></br>
    <img src={j2}/>
    </Col>
    <Col xs={6} md={2}><br></br>
    <img src={j3}/>
    </Col>
    <Col xs={6} md={2}><br></br>    
    <img src={j4}/>
    </Col>
    <Col xs={6} md={2}><br></br>      
    <img src={j5}/>
    </Col>
    <Col xs={6} md={2}><br></br>
    <img src={j3}/>
    </Col>
  </Row>

</Grid>
      </div>

    );
  }
}

export default Inicio;
