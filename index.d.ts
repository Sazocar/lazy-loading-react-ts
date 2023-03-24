type Url = string

type TCardSets = {
  set_name: string
  set_code: string
  set_rarity: string
  set_price: string
}

type TCardImages = {
  image_url: Url
  image_url_small: Url
}

type TCardPrices = {
  cardmarket_price: string
  tcgplayer_price: string
  ebay_price: string
  amazon_price: string
}

type TCard = {
  id: number
  name: string
  type: string
  desc: string
  race: string
  card_sets: TCardSets[]
  card_images: TCardImages[]
  card_prices: TCardPrices[]
}

