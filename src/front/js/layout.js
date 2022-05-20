import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";
import { Home } from "./pages/home";
import { Form } from "./component/form";
import { Single } from "./pages/single";
import injectContext from "./store/appContext";
import { Navbar } from "./component/navbar";
import { Animacion } from "./pages/animacion";
import { Comedia } from "./pages/comedia";
import { Drama } from "./pages/drama";
import { Romance } from "./pages/romance";
import { Terror } from "./pages/terror";
import { Menuperfil } from "./component/menuperfil.js";
import { Sidebar } from "./component/sidebar.js";
import { Perfil } from "./pages/perfil";
import {Favoritos} from "./pages/favoritos";


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
            <Route exact path="/favoritos/:id">
              <Favoritos />
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
