import { BentoItem } from "./BentoItem"


  const bentoGridInfo = [
    {background:"/bg/bg-gandalf.webp" ,backgroundAlt:"gandalf wallpaper", styles:'col-span-10 lg:col-span-4', title:'Lord of the rings', description: '"The Lord of the Rings" is an iconic literary saga created by J.R.R. Tolkien, immersing readers into a world of epic fantasy filled with memorable characters, thrilling adventures, and an epic conflict between good and evil.'},
    {background:"/bg/bg-map.webp", backgroundAlt:"map wallpaper", styles:'col-span-10 lg:col-span-6', title:'J.R.R Tolkien?', description: 'J.R.R. Tolkien, renowned as one of the most influential fantasy authors of all time, captivated generations with his rich imagination, intricate languages, and masterful storytelling. Best known for his epic works such as "The Hobbit" and "The Lord of the Rings," Tolkiens legacy continues to inspire readers worldwide, shaping the landscape of modern fantasy literature'},
    {background:"/bg/bg-ring.webp", backgroundAlt:"ring wallpaper", styles:'col-span-10 lg:col-span-6', title:'History', description: '"The Lord of the Rings" is a timeless epic that follows the journey of Frodo Baggins as he embarks on a perilous quest to destroy the One Ring and save Middle-earth from the dark lord Sauron. Alongside a diverse fellowship, Frodo faces trials, battles, and moral dilemmas, exploring themes of friendship, courage, and the struggle against ultimate evil in a meticulously crafted world of enchantment and danger.'},
    {background:"/bg/ruin-castle.webp", backgroundAlt:"ruin castle wallpaper", styles:'col-span-10 lg:col-span-4', title:'Start now', description: 'Discover the enchanting world of "The Lord of the Rings" as Frodo Baggins undertakes a perilous journey to destroy the One Ring. Join him and a diverse fellowship on an epic quest filled with adventure, friendship, and the battle against ultimate evil. Explore J.R.R. Tolkiens timeless tale of courage and sacrifice in the heart of Middle-earth.'},
  ]



export const BentoGrid = () => {

  return (
    <div className="w-full max-w-[1400px] h-screen lg:h-fit grid lg:grid-cols-10 auto-rows-[35rem] lg:auto-rows-[25rem] gap-4 mx-auto mt-[200px] lg:mt-[0px] p-5 lg:p-20">
      {
        bentoGridInfo.map((item , index) => (
          <BentoItem key={index} {...item}/>
        ))
      }
    </div>
  )
}
