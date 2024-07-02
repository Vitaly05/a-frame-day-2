import gsap from 'gsap'

AFRAME.registerComponent('levitation', {
  schema: {
    height: { type: 'number' },
  },
  init: function () {
    const position = this.el.getAttribute('position')
    const animationParams = { y: position.y }

    this.animation = gsap.to(animationParams, {
      y: position.y + this.data.height,
      duration: 2,
      yoyo: true,
      repeat: -1,
      ease: 'power1.inOut',
      onUpdate: () => {
        this.el.setAttribute(
          'position',
          `${position.x} ${animationParams.y} ${position.z}`
        )
      },
    })
  },
  remove: function () {
    this.animation.kill()
  },
})
