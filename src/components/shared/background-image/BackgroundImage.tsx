// import Image from 'next/image'
import { ImageOverlay } from './ImageOverlay'

interface BackgroundImageProps {
  src: string;
  alt: string;
  height?: string;
  style?: string;
  children: React.ReactNode;
}
interface BackgroundImageByFilterProps {
  height?: string;
  style?: string;
  filter:string;
  children: React.ReactNode;
}

interface Background{
  name: string
  src: string
  alt: string
}

// flex flex-col justify-center items-center gap-10'

const backgrounds: Background[] = [
  { name: 'Hobbit', src: '/bg/races/hobbits.webp', alt: 'Hobbit wallpaper' },
  { name: 'Human', src: '/bg/races/human.webp', alt: 'Human Wallpaper' },
  { name: 'Orc', src: '/bg/races/orc.webp', alt: 'Orc Wallpaper' },
  { name: 'Elf', src: '/bg/races/elves.webp', alt: 'Elf Wallpaper' },
  { name: 'Dwarves', src: '/bg/races/dwarves.webp', alt: 'Dwarves Wallpaper' },
  { name: 'Dragon', src: '/bg/races/dragons.webp', alt: 'Dragon Wallpaper' },
  { name: 'Ent', src: '/bg/races/ent.webp', alt: 'Ent Wallpaper' }
]

const selectBackground = (filter:string) :Background => {
  const background = backgrounds.find(bg => bg.name === filter) as Background
  return background
}

export const BackgroundImage = ({ children, src, alt, height = 'h-screen', style }: BackgroundImageProps) => {
  return (

    <section className={`relative w-full ${height} ${style}`}>
      <ImageOverlay alt={alt} src={src} />
      {children}
    </section>
  )
}

export const BackgroundImageByFilter = ({ children, filter, height = 'h-full md:h-screen', style }:BackgroundImageByFilterProps) => {
  const { src, alt } = selectBackground(filter)
  return (

    <section className={`relative w-full ${height} ${style}`}>
      <ImageOverlay alt={alt} src={src} />
      {children}
    </section>
  )
}
