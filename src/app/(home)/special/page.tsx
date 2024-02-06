import { getGollumQuote } from "@/utils";
import { Gollum } from "./ui/Gollum";
import { BackgroundImage } from "@/components";

export default async function SpecialPage() {
  
  const firstQuote = await getGollumQuote('5cd96e05de30eff6ebccec42')
  const secondQuote = await  getGollumQuote('5cd96e05de30eff6ebcce816')

  return (
    <div className="h-[100vh]">
      <BackgroundImage src="/bg/ruin-castle.webp" alt="ruin castle wallpaper" style=" flex justify-center items-center" >
        <p className="z-10 absolute top-[20%] left-[0%] mx-5  sm:top-[40%] sm:left-[50%] bg-[#1e1e1e] p-5 text-xl rounded-xl">{firstQuote.dialog}</p>
        <p className="z-10 absolute top-[65%] right-[0%] mx-5   sm:top-[60%] sm:right-[30%] bg-[#1e1e1e] p-5 text-xl rounded-xl">{secondQuote.dialog}</p>
        <Gollum />
      </BackgroundImage>
    </div>
  );
}