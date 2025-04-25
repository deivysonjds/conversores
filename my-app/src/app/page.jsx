import NavHome from "../components/nav";
import TitlePage from "../components/titlePage";
import SelectConversor from "@/components/selectConversor";

export default function Home() {
  return (
    <div >
        <header>
          <NavHome />

        </header>
        <main className="flex flex-col justify-center items-center">
          <TitlePage title={"Home"}/>
        </main>
    </div>
  );
}
