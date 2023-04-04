import Image from 'next/image'

const RandomCard = ({ cardImage }: { cardImage: Url }): JSX.Element => {
  return (
    <Image
      src={cardImage}
      alt={cardImage}
      priority
      width='0'
      height='0'
      sizes='100vw'
      className='p-6 w-screen lg:w-full h-auto'
    />
  )
}

export default RandomCard

