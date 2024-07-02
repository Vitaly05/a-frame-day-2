import 'aframe'
import '/js/components/guiControlComponent'
import '/js/components/spawnableComponent'
import '/js/components/musicComponent'
import '/js/components/mouseRotateYComponent'
import '/js/components/levitationComponent'
import '/js/components/metallicMaterialComponent'

const startScreen = document.getElementById('js-start-screen')
const playButton = document.getElementById('js-play-button')

playButton.addEventListener('click', () => {
  startScreen.style.display = 'none'
})
