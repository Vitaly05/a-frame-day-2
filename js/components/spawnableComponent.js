AFRAME.registerComponent('spawnable', {
  schema: {
    modelId: { type: 'string' },
  },
  init: function () {
    this.modelEl = document.getElementById(this.data.modelId)
  },
  events: {
    click: function (e) {
      const intersection = e.detail.intersection
      if (intersection && this.modelEl) {
        const position = intersection.point
        this.modelEl.setAttribute('position', { ...position })
        this.modelEl.setAttribute('visible', true)
      }
    },
  },
  remove: function () {},
})
