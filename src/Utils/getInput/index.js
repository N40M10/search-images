import { Images } from '@components/Images'
import { Videos } from '@components/Videos'

import './index.scss'

const getInput = () => {
  const isInput = document.querySelector('.inputbar')
  isInput.addEventListener('change', (change) => {
    document.location.hash === '#images'
      ? Images(change.originalTarget.value)
      : document.location.hash === '#videos'
      ? Videos(change.originalTarget.value)
      : undefined
  })
}

export default getInput
