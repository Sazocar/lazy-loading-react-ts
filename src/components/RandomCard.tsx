import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'

const RandomCard = ({ cardImage }: { cardImage: Url }): JSX.Element => {
  const node = useRef<HTMLImageElement>(null)
  const [src, setSrc] = useState(
    'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzIwIiBoZWlnaHQ9IjMyMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2ZXJzaW9uPSIxLjEiLz4='
  )

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          console.log('Hey')
          setSrc(cardImage)
        }
      })
    })

    if (node.current) {
      observer.observe(node.current)
    }

    return () => observer.disconnect()
  }, [cardImage])

  return (
    <img
      ref={node}
      src={src}
      alt={cardImage}
      // priority
      // width='0'
      // height='0'
      // sizes='100vw'
      className='w-screen lg:w-full h-auto bg-gray-300'
    />
  )
}

export default RandomCard

