"use client"
import { useState } from "react";
import NavHome from "../../components/nav";
import TitlePage from "../../components/titlePage";
import Conversor from "@/components/conversor";

export default function Temperatura() {
	const listConversor = ["celsius", "kelvin", "fahrenheit"]
	const [result, setResult] = useState(1)

	function celsiusTo(tmp, valueInitial){
		if(tmp =="kelvin"){
			return valueInitial + 273
		}

		return valueInitial * 1.8 +32
	}

	function kelvinTo(tmp, valueInitial){
		if(tmp =="celsius"){
			return valueInitial - 273
		}

		return (valueInitial - 273) * 1.8 +32
	}

	function fahrenheitTo(tmp, valueInitial){
		if(tmp =="celsius"){
			return (valueInitial-32)/1.8
		}

		return (valueInitial-32)*5/9+273
	}
	

	function calculate(tmp1, tmp2, valueInitial){
		if(tmp1 == tmp2){
			return setResult(valueInitial)
		}
		
		let result = valueInitial

		switch (tmp1) {
			case "celsius":
				result = celsiusTo(tmp2, valueInitial)
				break;

			case "kelvin":
				result = kelvinTo(tmp2, valueInitial)
				break;

			case "fahrenheit":
				result = fahrenheitTo(tmp2, valueInitial)
				break;

			default:
				break;
		}

		setResult(result)
	}

	return (
		<div >
			<main className="flex flex-col justify-center items-center">
				<TitlePage title={"Conversor de temperatura"} />
				<Conversor calculate={calculate} typeConversor={"temperatura"} options={listConversor} result={result} />
			</main>
		</div>
	);
}
