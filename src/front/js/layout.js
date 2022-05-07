import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";
import { Home } from "./pages/home";
import { Demo } from "./pages/demo";
import { Single } from "./pages/single";
import { Register } from "./pages/register";
import injectContext from "./store/appContext";
import { Navbar } from "./component/navbar";
<<<<<<< HEAD
import { Footer } from "./component/footer";
import { Formulario} from "./component/formulario";
=======
>>>>>>> Home

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
            <Route exact path="/demo">
              <Demo />
            </Route>
            <Route exact path="/single/:theid">
              <Single />
            </Route>
<<<<<<< HEAD
            <Route exact path="/register">
              <Formulario />
            </Route>
=======
>>>>>>> Home
            <Route>
              <h1>Not found!</h1>
            </Route>
          </Switch>
<<<<<<< HEAD
          <Footer />
=======
>>>>>>> Home
        </ScrollToTop>
      </BrowserRouter>
    </div>
  );
};

export default injectContext(Layout);
