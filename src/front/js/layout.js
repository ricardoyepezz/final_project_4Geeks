import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";
import { Home } from "./pages/home";
import { Form } from "./component/form";
import { Login } from "./component/login";
import { Single } from "./pages/single";
import injectContext from "./store/appContext";
import { Navbar } from "./component/navbar";
import { Animacion } from "./pages/animacion";
import { Comedia } from "./pages/comedia";
import { Drama } from "./pages/drama";
import { Romance } from "./pages/romance";
import { Terror } from "./pages/terror";
import { Perfil } from "./pages/perfil";
import { Favoritos } from "./pages/favoritos";
import { Lista } from "./pages/lista";
import { Results } from "./component/Results";
import {Editar} from "./pages/editardatos";
import {Configuracion} from "./pages/configuracion";;

//create your first component
const Layout = () => {
  //the basename is used when your project is published in a subdirectory and not in the root of the domain
  // you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
  const basename = process.env.BASENAME || "";

  return (
    <div>
      <BrowserRouter basename={basename}>
        <ScrollToTop>
          <Navbar />
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/signup">
              <Form />
            </Route>
            <Route exact path="/login">
              <Login />
            </Route>
            <Route exact path="/results">
              <Results />
            </Route>
            <Route exact path="/animacion">
              <Animacion />
            </Route>
            <Route exact path="/comedia">
              <Comedia />
            </Route>
            <Route exact path="/drama">
              <Drama />
            </Route>
            <Route exact path="/romance">
              <Romance />
            </Route>
            <Route exact path="/terror">
              <Terror />
            </Route>
            <Route exact path="/perfil">
              <Perfil />
            </Route>
            <Route exact path="/perfil/:menu">
              <Perfil />
            </Route>
            <Route exact path="/favoritos/">
              <Favoritos />
            </Route>
            <Route exact path="/milista/">
              <Lista />
            </Route>
            <Route exact path="/configuracion/">
              <Configuracion />
            </Route>
            <Route exact path="/editar/">
              <Editar />
            </Route>
            <Route exact path="/single/:theid">
              <Single />
            </Route>
            <Route>
              <h1>Not found!</h1>
            </Route>
          </Switch>
        </ScrollToTop>
      </BrowserRouter>
    </div>
  );
};

export default injectContext(Layout);
