import React from "react";
import Nav from "./Nav.jsx"
import Card from "./card.jsx"
import Jumbotron from "./jumbotron.jsx"


//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	return (

		
		<div class="px-2">
			<Nav/>
			<div class="w-75 ">
				<Jumbotron/>
				<div class="container">
					<div class="row">
						<div class="col">
							<Card/>
						</div>
						<div class="col">
							<Card/>
						</div>
						<div class="col">
							<Card/>
						</div>
						<div class="col">
							<Card/>
						</div>
					</div>	
				</div>
			</div>
		</div>
	);
};

export default Home;
