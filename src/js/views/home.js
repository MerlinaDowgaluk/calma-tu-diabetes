import React from "react";
import "../../styles/home.css";
import homeimg from "../../img/home.png"

export const Home = () => (
	<>
	<div className="text-center mt-3 mb-2 d-flex" style={{color: "#714994"}}>
		<div>
			<h1 className="mt-5 ms-5 text-start">Te acompaño a CAMBIAR tu relación con</h1>
			<h1 className="mt-5 ms-5 text-start">la diabetes + allá de los números</h1>
		</div>
		<div className="col-5">
			<img className="rounded" src={homeimg} style={{width: "70%"}}></img>
		</div>
	</div>
	<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#5000ca" fill-opacity="1" d="M0,96L20,101.3C40,107,80,117,120,117.3C160,117,200,107,240,112C280,117,320,139,360,160C400,181,440,203,480,197.3C520,192,560,160,600,165.3C640,171,680,213,720,229.3C760,245,800,235,840,192C880,149,920,75,960,42.7C1000,11,1040,21,1080,37.3C1120,53,1160,75,1200,80C1240,85,1280,75,1320,90.7C1360,107,1400,149,1420,170.7L1440,192L1440,320L1420,320C1400,320,1360,320,1320,320C1280,320,1240,320,1200,320C1160,320,1120,320,1080,320C1040,320,1000,320,960,320C920,320,880,320,840,320C800,320,760,320,720,320C680,320,640,320,600,320C560,320,520,320,480,320C440,320,400,320,360,320C320,320,280,320,240,320C200,320,160,320,120,320C80,320,40,320,20,320L0,320Z"></path></svg>
	</>
);
