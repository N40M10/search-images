import Header from '@components/Header'
import Main__Images from '@components/Main__Images'
import Main__Videos from '@components/Main__Videos'
import Footer from '@components/Footer'
import Error404 from '@components/Error404'

import setContent from '@utils/setContent'
import getInput from '@utils/getInput'

import './reset.scss'
import './fonts.scss'
import './basicSet.scss'
import './App.scss'

const getHash = () => location.hash.replace('#', '/').toLocaleLowerCase() || '/'

const urls = {
    '/': Main__Images,
    '/images': Main__Images,
    '/videos': Main__Videos
}

const App = () => {
    const app = document.querySelector('#app')
    app.innerHTML = ''

    const hash = getHash()
    const render = urls[hash] ? urls[hash] : Error404

    app.insertAdjacentHTML('beforeend', Header())
    app.insertAdjacentHTML('beforeend', render())
    app.insertAdjacentHTML('beforeend', Footer())

    setContent()

    getInput()
}

export default App
