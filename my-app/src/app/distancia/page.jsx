
import { useState } from "react";
import NavHome from "../../components/nav";
import TitlePage from "../../components/titlePage";
import Conversor from "@/components/conversor";

export default function Distancia() {
	const listConversor = ["metro","pés","polegadas"]
	const [result, setResult] = useState(1)

	function metroTo(m, valueInitial){
		if(m =="pés"){

		}
	}
	function calculate(m1,m2, valueInitial){
		if(m1==m2){
			setResult(valueInitial)
		}
		let result = valueInitial
		switch (m1) {
			case "metro":
				
				break;
			case "metro":

				break;
			case "metro":
			
				break;
			default:
				break;
		}

		setResult(result)
	}

	return (
		<div >
			<header>
				<NavHome />
			</header>
			<main className="flex flex-col justify-center items-center">
				<TitlePage title={"Conversor de temperatura"} />
				<Conversor calculate={calculate} typeConversor={"temperatura"} options={listConversor} result={result} />
			</main>
		</div>
	);
}
