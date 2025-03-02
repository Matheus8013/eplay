class Game {
  id: number
  category: string
  description: string
  image: string
  infos: string[]
  sytem: string
  title: string

  constructor(
    id: number,
    category: string,
    description: string,
    image: string,
    infos: string[],
    sytem: string,
    title: string
  ) {
    this.id = id
    this.category = category
    this.description = description
    this.image = image
    this.infos = infos
    this.sytem = sytem
    this.title = title
  }
}

export default Game
