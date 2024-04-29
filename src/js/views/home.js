import React from "react";
import "../../styles/home.css";
import homeimg from "../../img/home.png"

export const Home = () => (
	<div className="text-center mt-5 mb-5 d-flex" style={{color: "#714994"}}>
		<h1 className="col-6 mt-5 ms-5 text-start">Te acompaño a CAMBIAR tu relación con la diabetes + allá de los números</h1>
		<div className="col-5">
			<img className="rounded" src={homeimg} style={{width: "70%"}}></img>
		</div>
	</div>
);
