import Inputbar from '@components/Inputbar'
import Navbar from '@components/Navbar'

import './index.scss'

const Header = () => {
  const view = `
  <header class="header">
    ${Navbar()}
    ${Inputbar()}
  </header>
  `
  return view
}

export default Header
