import React from "react";
import { Link } from "react-router-dom";
import calma from "../../img/calma.png";

export const Navbar = () => {
	return (
		<nav className="navbar navbar-light mb-3 container-fluid" style={{backgroundColor: "rgb(251, 242, 249)"}}>
			<div className="d-flex col-12">
				<div className="col-4 mt-4">
					<Link to="/" className="text-decoration-none">
						<span className="navbar-brand h1 ms-1" style={{color: "#714994", fontStyle: "italic", fontWeight: "700"}}>CALMA tu diabetes</span>
					</Link>
				</div>
				<div className="ml-auto justify-content-center d-flex col-4">
					<img className="rounded" src={calma} style={{maxWidth: "20%"}}></img>
				</div>
				<div className="col-4">

				</div>
			</div>
		</nav>
	);
};
