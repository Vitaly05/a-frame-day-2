import 'aframe'
import '/js/components/guiControlComponent'
import '/js/components/spawnableComponent'
import '/js/components/musicComponent'
import '/js/components/mouseRotateYComponent'

const startScreen = document.getElementById('js-start-screen')
const playButton = document.getElementById('js-play-button')

playButton.addEventListener('click', () => {
  startScreen.style.display = 'none'
})
