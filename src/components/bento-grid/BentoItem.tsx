import { BackgroundImage } from ".."

interface Props{
  styles?: string
  title: string
  background: string
  backgroundAlt: string
  description: string
}


export const BentoItem = ({ styles, title , background , backgroundAlt, description} :Props) => {
  return (
    <div className={`${styles} relative rounded-xl overflow-hidden backdrop-blur-md border border-black/10 shadow-inner shadow-white/10 col-span-5`}>
      <BackgroundImage src={background} alt={backgroundAlt} height="h-full" style="">
        <h2 className="text-2xl font-bold text-balance p-5">{title}</h2>
        <p className="p-5">{description}</p>
      </BackgroundImage>
      
      </div>
  )
}
