AFRAME.registerComponent('spawnable', {
  schema: {
    modelId: { type: 'string' },
    duration: { type: 'number', default: 1000 },
  },
  init: function () {
    this.modelEl = document.getElementById(this.data.modelId)
    this.targetPosition = new THREE.Vector3()
    this.startPosition = new THREE.Vector3()
    this.isMoving = false
    this.elapsedTime = 0
  },
  events: {
    click: function (e) {
      const intersection = e.detail.intersection
      if (intersection && this.modelEl) {
        this.modelEl.setAttribute('visible', true)
        this.targetPosition.copy(intersection.point)
        this.startPosition.copy(this.modelEl.object3D.position)
        this.isMoving = true
        this.elapsedTime = 0
      }
    },
  },
  tick: function (time, timeDelta) {
    if (!this.isMoving) {
      return
    }
    this.elapsedTime += timeDelta
    const progress = this.elapsedTime / this.data.duration

    this.modelEl.object3D.position.lerpVectors(
      this.startPosition,
      this.targetPosition,
      progress
    )

    if (progress >= 1) {
      this.isMoving = false
    }
  },
  remove: function () {},
})
