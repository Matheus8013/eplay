import ProductsList from '../../components/ProductsList'

import { Game } from '../Home'
import { useEffect, useState } from 'react'

const Categories = () => {
  const [gamesAcao, setGameAcao] = useState<Game[]>([])
  const [gamesEportes, setGamesEsportes] = useState<Game[]>([])
  const [gamesSimulacao, setGameSimulacao] = useState<Game[]>([])
  const [gamesLuta, setGameLuta] = useState<Game[]>([])
  const [gamesRpg, setGameRpg] = useState<Game[]>([])

  useEffect(() => {
    fetch('https://fake-api-tau.vercel.app/api/eplay/acao')
      .then((res) => res.json())
      .then((res) => setGameAcao(res))

    fetch('https://fake-api-tau.vercel.app/api/eplay/esportes')
      .then((res) => res.json())
      .then((res) => setGamesEsportes(res))

    fetch('https://fake-api-tau.vercel.app/api/eplay/simulacao')
      .then((res) => res.json())
      .then((res) => setGameSimulacao(res))

    fetch('https://fake-api-tau.vercel.app/api/eplay/luta')
      .then((res) => res.json())
      .then((res) => setGameLuta(res))

    fetch('https://fake-api-tau.vercel.app/api/eplay/rpg')
      .then((res) => res.json())
      .then((res) => setGameRpg(res))
  }, [])

  return (
    <>
      <ProductsList games={gamesAcao} title="Ação" background="black" />
      <ProductsList games={gamesEportes} title="Esportes" background="grey" />
      <ProductsList
        games={gamesSimulacao}
        title="Simulacão"
        background="black"
      />
      <ProductsList games={gamesLuta} title="Luta" background="grey" />
      <ProductsList games={gamesRpg} title="Rpg" background="black" />
    </>
  )
}

export default Categories
