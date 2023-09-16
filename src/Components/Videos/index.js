import getData from '@utils/getData__videos'
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
      <video controls id="${item.id}">
        <source src="${item.videos.tiny.url}" />
        Tu navegador no puyede cargar el siguiente video <code></code>
      </video>
    `
    dataList.push(view)
  });
  return dataList
}

const setBox = async (search, per, page) => {
  const dataList = await setElements(search, per, page)

  const container = document.createElement('section')
  container.insertAdjacentHTML('beforeend', [...dataList])

  const main__videos = document.querySelector('.main__videos')
  main__videos.innerHTML = ''
  main__videos.insertAdjacentElement('beforeend', container)
  main__videos.innerHTML = main__videos.innerHTML.replace(/,/g, '')
}

const Videos = (search, per, page) => {
  setBox(search, per, page)

  const view = `<div class="main__videos"></div>`
  return view
}

export { Videos, setElements }
