AFRAME.registerComponent('music', {
  schema: {
    src: { type: 'string' },
  },
  init: function () {
    this.playMusic = playMusic.bind(this)
    this.audio = document.createElement('audio')

    this.audio.src = this.data.src
    this.audio.setAttribute('visible', false)
    this.audio.setAttribute('autoplay', true)
    this.audio.setAttribute('loop', true)

    document.body.appendChild(this.audio)
    document
      .getElementById('js-play-button')
      .addEventListener('click', this.playMusic)
  },
  remove: function () {
    document.body.removeChild(this.audio)
    document
      .getElementById('js-play-button')
      .removeEventListener('click', this.playMusic)
  },
})

function playMusic() {
  this.audio.play()
}
