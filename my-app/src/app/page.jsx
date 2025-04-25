"use client"
import NavHome from "../components/nav";
import TitlePage from "../components/titlePage";
import TextHome from "@/components/textHome";
import ButtonToPages from "@/components/buttonToPages";

export default function Home() {
	return (
		<div >
			<header>
				<NavHome />
			</header>
			<main className="flex flex-col justify-center items-center">
				<TitlePage title={"Home"} />
				<TextHome />
				<div className="flex flex-col justify-center items-center bg-blue rounded-b-[30px] rounded-t-[30px] pl-5 pr-5 pt-5 pb-5 mt-5 mb-15">
					<ButtonToPages url={"./moeda"} page={"conversor de moedas"} />
					<ButtonToPages url={"./temperatura"} page={"conversor de temperatura"} />
					<ButtonToPages url={"./medidas"} page={"conversor de medidas"} />
				</div>
			</main>
		</div>
	);
}
