import getData from '@utils/getData'
import './index.scss'

const isData = async (search, per, page) => {
  try {
    const response = await getData(search, per, page)
    const data = await response.json()
    return data
  } catch (error) {
    return error
  }
}

const setElements = async (search, per, page) => {
  const data = await isData(search, per, page)
  const dataList = []
  data.hits.forEach(item => {
    const view = `
      <a href="${item.largeImageURL}" id="${item.id}">
        <img src="${item.webformatURL}" alt="imagen ${item.id}" />
      </a>
    `
    dataList.push(view)
  });
  return dataList
}

const setBox = async (search, per, page) => {
  const dataList = await setElements(search, per, page)

  const container = document.createElement('section')
  container.insertAdjacentHTML('beforeend', [...dataList])

  const main__images = document.querySelector('.main__images')
  main__images.innerHTML = ''
  main__images.insertAdjacentElement('beforeend', container)
  main__images.innerHTML = main__images.innerHTML.replace(/,/g, '')
}

const Images = (search, per, page) => {
  setBox(search, per, page)

  const view = `<div class="main__images"></div>`
  return view
}

export { Images, setElements }
