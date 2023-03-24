import Image from 'next/image'

const RandomCard = ({ yugiCard }: { yugiCard: TCard }): JSX.Element => {
  const { card_images } = yugiCard
  const { name } = yugiCard

  return (
    <Image
      className='pt-6'
      priority
      width={330}
      height={330}
      src={card_images[0].image_url}
      alt={name}
    />
  )
}

export default RandomCard

