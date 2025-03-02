import { Link } from 'react-router-dom'

import { HeaderBar, LinkCart, Links, LinlItem } from './styles'

import logo from '../../assets/images/logo.svg'
import carrinho from '../../assets/images/carrinho.svg'

const Header = () => {
  return (
    <HeaderBar>
      <div>
        <Link to="/">
          <img src={logo} alt="EPLAY" />
        </Link>
        <nav>
          <Links>
            <LinlItem>
              <Link to="/categories">Categorias</Link>
            </LinlItem>
            <LinlItem>
              <a href="#">Novidades</a>
            </LinlItem>
            <LinlItem>
              <a href="#">Promoções</a>
            </LinlItem>
          </Links>
        </nav>
      </div>
      <LinkCart href="#">
        0 - produto(s)
        <img src={carrinho} alt="carrinho" />
      </LinkCart>
    </HeaderBar>
  )
}

export default Header
