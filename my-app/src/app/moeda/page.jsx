"use client"
import { useState } from "react";
import NavHome from "../../components/nav";
import TitlePage from "../../components/titlePage";
import Conversor from "@/components/conversor";

export default function Moeda() {
	const listConversor = ["USD", "BRL"]
	const [result, setResult] = useState(1)

	function calculate(m1,m2, valueInitial){
		if(m1 == m2){
			return setResult(valueInitial)
		}

		if(m1 == "USD"){
			return setResult((valueInitial * 5.8419).toFixed(3))
		}

		return setResult((valueInitial / 5.8419).toFixed(3))
	}

	return (
		<div >
			<main className="flex flex-col justify-center items-center">
				<TitlePage title={"Conversor de moeda"} />
				<Conversor calculate={calculate} typeConversor={"moeda"} options={listConversor} result={result} />
			</main>
		</div>
	);
}
