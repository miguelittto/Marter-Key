import React from 'react';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import Inicio from '../Components/Inicio/Inicio';
import Juegos_Android from '../Components/Juegos_Android/Juegos_Android';
import Aplicaciones from '../Components/Aplicaciones/Aplicaciones';
import Juegos_Pc from '../Components/Juegos_Pc,/Juegos_Pc';
import Programas from '../Components/Programas/Programas';

export default class Rutas extends React.Component {
    render() {
        return (
            <Router>
                <Switch>
                    <Route path="/Inicio" component={Inicio} />
                    <Route exact path="/" component={Inicio}></Route>

                    <Route path="/Inicio" component={Inicio} />
                    
                    <Route path="/Juegos_Android" component={Juegos_Android} />
                    
                    <Route path="/Aplicaciones" component={Aplicaciones} />
                    
                    <Route path="/Juegos_Pc" component={Juegos_Pc} />
                    
                    <Route path="/Programas" component={Programas} />
                    
                </Switch>
            </Router>
        );
    }
}
