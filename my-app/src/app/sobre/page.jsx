
import NavHome from "../../components/nav";
import TitlePage from "../../components/titlePage";
import TextSobre from "@/components/textSobre";

export default function Sobre() {
	return (
		<div >
			<main className="flex flex-col justify-center items-center">
				<TitlePage title={"Sobre"} />
				<img className="w-[250px] rounded-3xl hover:scale-105 hover:rotate-3 transition" src="./perfil.JPG" alt="" />
				<div className="flex flex-col justify-center items-center bg-blue rounded-b-[30px] rounded-t-[30px] pl-5 pr-5 pt-5 pb-5 mt-5 mb-15 max-w-[40em]">
					<TextSobre />
				</div>
			</main>
		</div>
	);
}
