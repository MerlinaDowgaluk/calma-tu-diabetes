import React from "react";
import "../../styles/home.css";
import homeimg from "../../img/home.png"

export const Home = () => (
	<div className="relative h-100">
	<div className="text-center mt-4 flex flex-row mb-0 pb-0" style={{color: "#714994"}}>
		<div className="p-5">
			<h1 className="ms-5 text-start text-5xl font-black">Te acompaño a cambiar tu relación con la diabetes + allá de los números</h1>
		</div>
		<div className="col-4 justify-center flex">
			<img className="rounded" src={homeimg} style={{width: "70%"}}></img>
		</div>
	</div>
	<div className="absolute inset-x-0 bottom-0">
		<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#714994" fill-opacity="0.8" d="M0,32L20,48C40,64,80,96,120,96C160,96,200,64,240,80C280,96,320,160,360,160C400,160,440,96,480,85.3C520,75,560,117,600,144C640,171,680,181,720,181.3C760,181,800,171,840,160C880,149,920,139,960,128C1000,117,1040,107,1080,122.7C1120,139,1160,181,1200,208C1240,235,1280,245,1320,240C1360,235,1400,213,1420,202.7L1440,192L1440,320L1420,320C1400,320,1360,320,1320,320C1280,320,1240,320,1200,320C1160,320,1120,320,1080,320C1040,320,1000,320,960,320C920,320,880,320,840,320C800,320,760,320,720,320C680,320,640,320,600,320C560,320,520,320,480,320C440,320,400,320,360,320C320,320,280,320,240,320C200,320,160,320,120,320C80,320,40,320,20,320L0,320Z"></path></svg>	
	</div>
	</div>
);
