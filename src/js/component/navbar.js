import React from "react";
import { Link } from "react-router-dom";
import calma from "../../img/calma.png";
import "../../styles/navbar.css"

export const Navbar = () => {
	return (
		<div>
		<nav className="navbar navbar-light mb-3 container-fluid" style={{backgroundColor: "rgb(251, 242, 249)"}}>
			<div className="d-flex col-12">
				<div className="col-4 mt-4">
					<Link to="/" className="text-decoration-none d-flex ms-5">
						<span className="navbar-brand h1 title-font fw-bold" style={{color: "#714994", width: "100%"}}>CALMA TU DIABETES</span>
					</Link>
				</div>
				<div className="ml-auto justify-content-center d-flex col-4">
					<img className="rounded" src={calma} style={{maxWidth: "20%"}}></img>
				</div>
				<div className="col-4 d-flex justify-content-end mt-4">
					<a href="https://www.instagram.com/calmatudiabetes/" target="_blank"><i class="fab fa-instagram fa-lg me-5 mt-2" style={{color: "#714994"}}></i></a>
				</div>
			</div>
		</nav>
		<ul class="nav justify-content-center">
  			<li class="nav-item">
    			<a className="nav-link" style={{color: "#714994", textDecoration: "none"}} href="#">¿Qué es Calma?</a>
  			</li>
  			<li class="nav-item">
  			  <a class="nav-link" style={{color: "#714994"}} href="#">Recetas</a>
  			</li>
  			<li class="nav-item">
  			  <a class="nav-link" style={{color: "#714994"}} href="#">Tips</a>
  			</li>
  			<li class="nav-item">
  			  <a class="nav-link" style={{color: "#714994"}} href="#">Contacto</a>
  			</li>
		</ul>
		</div>
	);
};
