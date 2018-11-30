import React from 'react';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import App from '../Components/Inicio/App';
import Juegos_Android from '../Components/Juegos_Android/Juegos_Android';

export default class Rutas extends React.Component {
    render() {
        return (
            <Router>
                <Switch>
                    <Route path="/hola" component={Juegos_Android} />
                    <Route exact path="/" component={App}></Route>
                </Switch>
            </Router>
        );
    }
}
