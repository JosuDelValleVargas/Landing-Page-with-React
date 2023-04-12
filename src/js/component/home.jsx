import React from "react";
import Nav from "./Nav.jsx"
import Card from "./card.jsx"
import Jumbotron from "./jumbotron.jsx"
import Footer from "./footer.jsx";


//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	return (

		
		<div class=" w-75 m-auto">
			<Nav/>
			<div class="container">
				<div class="bg-light p-5">
					<Jumbotron/>
				</div>
				
				<div class="my-5">
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
			<Footer/>
		</div>
	);
};

export default Home;
