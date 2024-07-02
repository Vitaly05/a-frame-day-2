AFRAME.registerComponent('mouse-rotate-y', {
  init: function () {
    this.isRotating = false
    this.rotateObject = rotateObject.bind(this)
    document.addEventListener('mousemove', this.rotateObject)
  },
  events: {
    mousedown: function () {
      document
        .getElementById('js-main-camera')
        .setAttribute('look-controls-enabled', false)
      this.isRotating = true
    },
    mouseup: function () {
      document
        .getElementById('js-main-camera')
        .setAttribute('look-controls-enabled', true)
      this.isRotating = false
    },
  },
  remove: function () {
    document.removeEventListener('mousemove', this.rotateObject)
  },
})

function rotateObject(e) {
  if (this.isRotating) {
    const angle = e.clientX
    const currentRotation = this.el.getAttribute('rotation')

    this.el.setAttribute('rotation', {
      ...currentRotation,
      y: angle,
    })
  }
}
