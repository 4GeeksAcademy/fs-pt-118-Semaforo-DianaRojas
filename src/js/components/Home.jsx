import React, {useState} from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	const [color, setColor] = useState("success")



	return (
		<div className="trafficLigth d-flex justify-content-center align-item-center vh-50 bg-dark m-5">
			<div
				onClick={() => setColor("danger")}
				className={
				"ligth bg-danger rounded-circle" + (color === "danger" ? " glow" : "")
					}></div>
			<div
				onClick={() => setColor("warning")}
				className={
				"ligth bg-warning rounded-circle" + (color === "warning" ? " glow" : "")}></div>
			<div
				onClick={() => setColor("success")}
				className={
				"ligth bg-success rounded-circle" + (color === "success" ? " glow" : "")}></div>
		</div>

	);
};

export default Home;