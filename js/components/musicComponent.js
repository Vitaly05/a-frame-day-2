AFRAME.registerComponent('music', {
  schema: {
    src: { type: 'string' },
  },
  init: function () {
    const audio = document.createElement('audio')

    audio.src = this.data.src
    audio.setAttribute('visible', false)
    audio.setAttribute('autoplay', true)
    audio.setAttribute('loop', true)

    document.body.appendChild(audio)
    document.getElementById('js-play-button').addEventListener('click', () => {
      audio.play()
    })
  },
})
