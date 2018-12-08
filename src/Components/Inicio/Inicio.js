import React, { Component } from 'react';
import './Inicio.css';
import m2 from '../../Assets/m2.jpg'
import {
  Grid, Row, Col, Carousel
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
        
            <img width={1359} height={150} alt="900x500" src={m2} />
          

        <br></br>
        <br></br>
        <br></br>

        <Grid>
          <Row className="show-grid">
            <Col sm={6} md={3}>
              <code>
                {<h2>Juegos Android</h2>}
              </code>
              <p>Has llegado al mejor lugar para descubrir nuevos juegos
                Android con los que disfrutarás durante horas.

                Al igual que ocurre con las aplicaciones para Android, el mundo de los videojuegos
                también se ha volcado para crear miles y miles de títulos adaptados a móviles y
                tabletas. Además, el rendimiento gráfico de los smartphones ya supera incluso el de
                las consolas tradicionales de hace unos años.

                Hay juegos Android que son una auténtica maravilla, obras de arte aderezadas con
                bandas sonoras de lujo, pero por supuesto no todo el mundo tiene los mismos gustos
                cuando se trata de juegos para el móvil. Unos buscan algún juego casual para pasar
                el rato en el bus y otros quieren exprimir al máximo sus dispositivos de última
                generación. </p>
            </Col>
            <Col sm={6} md={3}>
              <code>
                {<h2>Aplicaciones</h2>}
              </code>
              <p>No busques más, aquí están todas. Las mejores aplicaciones Android reunidas en un
                único lugar. Lo mejor de lo mejor para tu móvil o tablet, las apps que tu smartphone
                necesita, las que tu necesitas.

                La revolución de las aplicaciones para el móvil explotó y ahora no sabríamos imaginar
                nuestro día a día sin ellas. Las aplicaciones Android se cuentan por millones y cada
                día Google Play, la tienda de aplicaciones oficial de Android creada por Google, suma
                miles y miles de nuevas creaciones de desarrolladores de todo el mundo.</p>
            </Col>
            <Col sm={6} md={3}>
              <code>
                {<h2>Juegos Pc</h2>}
              </code>
              <p>Los Juegos para PC, son la categoría mas popular en CompucaliTV, nuestra pagina se 
                destaca por compartir los últimos juegos para PC en estreno, pero no solo eso también 
                compartimos juegos para pc clásicos, así mismo como juegos para PC de pocos recursos.

                En CompucaliTV tu podrás Descargar Juegos para PC en español con los cracks y medicinas 
                mas estables, versiones actualizadas con todos los Updates y Fix para que los juegos 
                funcionen de manera optima y lo mejor de todo exclusivos vídeo tutoriales que te 
                enseñaran a Instalar juegos, ponerlos en español y dejarlos totalmente funcionales 
                para disfrutar y compartir.</p>
            </Col>
            <Col sm={6} md={3}>
              <code>
                {<h2>Programas</h2>}
              </code>
              <p>Descargar Programas para windows totalmente gratis y full, estos programas son
                fundamentales al pensar en tener nuestra computadora actualizada y optimizar su
                uso con el mejor software de calidad para expertos y principiantes, contamos con los
                mejores programas de diseño, programas de optimizacion, programas de limpieza,
                antivirus y mucho mas software con sus ultimas actualizaciones a instrucciones
                detalladas de instalación.</p>
            </Col>
          </Row>
        </Grid>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
      </div>

    );
  }
}

export default Inicio;
