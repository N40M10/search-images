import './index.scss'

const Error404 = () => {
  const header = document.querySelector('.header')
  header.remove()

  const view = `
  <div class="error__404">
    <a href="/" class="returnHome">
        Regresar a Home
    </a>
    <h1>
      Error 404
    </h1>
  </div>
  `
  console.log("error__404")
  return view
}

export default Error404
