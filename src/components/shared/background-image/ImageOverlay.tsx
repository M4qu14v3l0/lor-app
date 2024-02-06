import Image from 'next/image'

interface Props{
    src: string;
    alt: string;
}

export const ImageOverlay = ({ src, alt }: Props) => {
  return (
    <div className='absolute w-full h-full -z-10 '>
      <div className='absolute w-full h-full bg-black opacity-20 select-none '>
        <Image src={src} alt={alt} fill style={{ objectFit: 'cover' }} />
      </div>
    </div>
  )
}
