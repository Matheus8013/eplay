import Section from '../../components/Section'

import spiderMan from '../../assets/images/banner-homem-aranha.png'
import hogwarts from '../../assets/images/fundo_hogwarts.png'

import play from '../../assets/images/play.png'
import zoon from '../../assets/images/zoom.png'
import close from '../../assets/images/fechar.png'

import { Action, Item, Items, Modal, ModalContent } from './styles'
import { useState } from 'react'

import { GalleryItem } from '../../pages/Home'

const mock: GalleryItem[] = [
  {
    type: 'image',
    url: spiderMan
  },
  {
    type: 'image',
    url: hogwarts
  },
  {
    type: 'video',
    url: 'https://www.youtube.com/embed/uHGShqcAHlQ?si=i1xCiIlCY0LryLyU'
  }
]

type Props = {
  defaultCover: string
  name: string
  items: GalleryItem[]
}

interface ModalState extends GalleryItem {
  isVisible: boolean
}

const Gallery = ({ defaultCover, name, items }: Props) => {
  const [modal, setModal] = useState<ModalState>({
    isVisible: false,
    type: 'image',
    url: ''
  })

  const getMediaCover = (item: GalleryItem) => {
    if (item.type === 'image') return item.url
    return defaultCover
  }

  const getMediaIcon = (item: GalleryItem) => {
    if (item.type === 'image') return zoon
    return play
  }

  const closoModal = () => {
    setModal({
      isVisible: false,
      type: 'image',
      url: ''
    })
  }

  return (
    <>
      <Section title="Galeria" background="black">
        <Items>
          {items.map((media, index) => (
            <Item
              key={media.url}
              onClick={() => {
                setModal({
                  isVisible: true,
                  type: media.type,
                  url: media.url
                })
              }}
            >
              <img
                src={getMediaCover(media)}
                alt={`Mídia ${index + 1} de ${name}`}
              />
              <Action>
                <img
                  src={getMediaIcon(media)}
                  alt="Clique para maximizar a mídia"
                />
              </Action>
            </Item>
          ))}
        </Items>
      </Section>
      <Modal className={modal.isVisible ? 'visivel' : ''}>
        <ModalContent className="container">
          <header>
            <h4>{name}</h4>
            <img
              src={close}
              alt="Ícone de fechar"
              onClick={() => {
                closoModal()
              }}
            />
          </header>
          {modal.type === 'image' ? (
            <img src={modal.url} alt="" />
          ) : (
            <iframe frameBorder={0} src={modal.url} allowFullScreen />
          )}
        </ModalContent>
        <div
          onClick={() => {
            closoModal()
          }}
          className="overlay"
        ></div>
      </Modal>
    </>
  )
}

export default Gallery
