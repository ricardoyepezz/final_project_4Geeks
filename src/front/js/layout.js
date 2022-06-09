import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./pages/home";
import { Login } from "./component/login";
import { Form } from "./component/form";
import injectContext from "./store/appContext";
import { Navbar } from "./component/navbar";
import { Perfil } from "./pages/perfil";
import { Detail } from "./pages/Detail";
import { User } from "./pages/User";
import { NotFound } from "./pages/NotFound";
import { SearchResult } from "./pages/SearchResult";

//create your first component
const Layout = () => {
  //the basename is used when your project is published in a subdirectory and not in the root of the domain
  // you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
  const basename = process.env.BASENAME || "";

  return (
    <div>
      <BrowserRouter basename={basename}>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="login" element={<Login />} />
          <Route path="signup" element={<Form />} />
          <Route path="detail/:id" element={<Detail />} />
          <Route path="perfil" element={<Perfil />} />
          <Route path="user" element={<User />} />
          <Route exact path="/search/:id" element={<SearchResult />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default injectContext(Layout);
