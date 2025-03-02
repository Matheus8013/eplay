import Tag from '../Tag'
import { Card, Descricao, Titulo } from './styles'

const Product = () => (
  <Card>
    <img src="//placehold.co/222x250" alt="" />
    <Titulo>Nome do jogo</Titulo>
    <Tag>Categoria</Tag>
    <Tag>Windows</Tag>
    <Descricao>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque odio
      doloribus aperiam soluta placeat fugit consectetur facilis nemo aspernatur
      tempora nulla aliquam aut nisi inventore, explicabo magnam veniam nihil
      eos.
    </Descricao>
  </Card>
)

export default Product
