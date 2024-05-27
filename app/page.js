import Image from "next/image";
import Hero from "./components/hero";
import Solution from "./components/solution";
import BENEFITS from "./components/process";
import Problem from "./components/problem";

export default function Home() {
  return (
    <main className="relative max-w-[1440px] mx-auto">
      <Hero/>
      <Problem/>
      <Solution/>
      <BENEFITS/>
      <div className="tex-center py-12 text-[40px] text-center font-bold">DrugsCo</div>
    </main>
  );
}
