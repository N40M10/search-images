import { setElements } from '@components/Images'
import { setElements as setElementsVideos } from '@components/Videos'

import './index.scss'

const getContainer = () => {
  let container
  document.location.hash === '#images'
    ? container = document.querySelector('.main__images')
    : document.location.hash === '#videos'
    ? container = document.querySelector('.main__videos')
    : undefined
  return container
}

const getElements = async (search, per, setPage) => {
  let elements
  document.location.hash === '#images'
    ? elements = await setElements(search, per, setPage)
    : document.location.hash === '#videos'
    ? elements = await setElementsVideos(search, per, setPage)
    : undefined
  return elements
}

const setContent = async () => {

  const setScroll = () => {
    const {scrollHeight, clientHeight, scrollTop } = document.documentElement
    scrollTop + clientHeight == scrollHeight && setTimeout(addContent, 200)
  }

  const addContent = async (search, per, page) => {
    const container = getContainer()
    try {
      const setPage = container.childNodes.length + 1

      const getSearch = document.querySelector('.inputbar')
      const setSearch = getSearch.children[0].value

      const searchValue = setSearch === '' ? 'linux' : setSearch

      const elementList = await getElements(searchValue, per, setPage)

      if (elementList.length <= 0) {
        window.removeEventListener('scroll', setScroll)
        const subcontainer = document.createElement('section')
        subcontainer.className = 'main__scroll--end'
        subcontainer.insertAdjacentText(
          'beforeend',
          `Felicidades llegaste al final, estas son todas las imagenes`
        )
        container.insertAdjacentElement('beforeend', subcontainer)
      } else {
        const subcontainer = document.createElement('section')
        subcontainer.insertAdjacentHTML('beforeend', [...elementList])
        subcontainer.innerHTML = subcontainer.innerHTML.replace(/,/g, '')

        container.insertAdjacentElement('beforeend', subcontainer)
      }
    } catch (error) {
      window.removeEventListener('scroll', setScroll)
      const subcontainer = document.createElement('section')
      subcontainer.className = 'main__scroll--end'
      subcontainer.insertAdjacentText(
        'beforeend',
        `Felicidades llegaste al final, estas son todas las imagenes`
      )
      container.insertAdjacentElement('beforeend', subcontainer)
    }
  }

  window.addEventListener('scroll', setScroll, false)
}

export default setContent
