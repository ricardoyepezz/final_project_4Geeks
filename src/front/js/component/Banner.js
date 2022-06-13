import React from "react";

export const Banner = () => {
  let token = JSON.parse(localStorage.getItem("token"));
  let nombre = token.user.name;
  return <span className="fs-3 me-2">Bienvenido/a {nombre} </span>;
};
