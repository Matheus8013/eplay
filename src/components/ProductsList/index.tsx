import Product from '../Product'
import { Container, List } from './styles'

export type Props = {
  title: string
  background: 'grey' | 'black'
}

const ProductsList = ({ background, title }: Props) => (
  <Container background={background}>
    <div className="container">
      <h2>{title}</h2>
      <List>
        <Product
          category="Ação"
          description="teste"
          image="//placehold.co/222x250"
          infos={['-10%', 'R$ 150']}
          system="Windows"
          title="Nomes do jogo"
        />
        <Product
          category="Ação"
          description="teste"
          image="//placehold.co/222x250"
          infos={['-10%', 'R$ 150']}
          system="Windows"
          title="Nomes do jogo"
        />
        <Product
          category="Ação"
          description="teste"
          image="//placehold.co/222x250"
          infos={['-10%', 'R$ 150']}
          system="Windows"
          title="Nomes do jogo"
        />
        <Product
          category="Ação"
          description="teste"
          image="//placehold.co/222x250"
          infos={['-10%', 'R$ 150']}
          system="Windows"
          title="Nomes do jogo"
        />
      </List>
    </div>
  </Container>
)

export default ProductsList
