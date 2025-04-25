"use client"
import { useState } from "react";
import NavHome from "../../components/nav";
import TitlePage from "../../components/titlePage";
import Conversor from "@/components/conversor";

export default function Medidas() {
	const listConversor = ["metros","pés","polegadas"]
	const [result, setResult] = useState(1)

	function metroTo(m, valueInitial){
		if(m =="pés"){
			return valueInitial * 3.281
		}

		return valueInitial * 39.37
	}

	function pesTo(m, valueInitial){
		if(m =="metros"){
			return valueInitial * 0.3048
		}

		return valueInitial * 12
	}

	function polegadasTo(m, valueInitial){
		if(m =="metros"){
			return valueInitial * 0.0254
		}

		return valueInitial * 0.0833
	}

	function calculate(m1,m2, valueInitial){
		if(m1==m2){
			return setResult(valueInitial)
		}
		let result = valueInitial
		switch (m1) {
			case "metros":
				result = metroTo(m2, valueInitial)
				break;
			case "pés":
				result = pesTo(m2, valueInitial)
				break;
			case "polegadas":
				result = polegadasTo(m2, valueInitial)
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
				<TitlePage title={"Conversor de medidas"} />
				<Conversor calculate={calculate} typeConversor={"medida"} options={listConversor} result={result} />
			</main>
		</div>
	);
}
