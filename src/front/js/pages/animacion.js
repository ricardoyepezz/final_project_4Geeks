import React, { useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";
import { useEffect } from "react";
export const Animacion = () => {
    return (
        <>
    			<Animacion to="/animacion">
				<span className="btn btn-primary btn-lg" href="#" role="button">
					Back home
				</span>
			</Animacion>
        </>
    )
}
