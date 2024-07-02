import GUI from 'lil-gui'

const gui = new GUI()

const guiOptions = {
  task4: {
    isShown: false,
    elements: [],
  },
}

AFRAME.registerComponent('gui-control', {
  schema: {
    taskNumber: { type: 'number' },
  },
  init: function () {
    this.el.setAttribute('visible', false)
    if (!guiOptions[`task${this.data.taskNumber}`]) {
      guiOptions[`task${this.data.taskNumber}`] = {
        isShown: false,
        elements: [],
      }
      guiOptions[`task${this.data.taskNumber}`].elements.push(this.el)
      gui
        .add(guiOptions[`task${this.data.taskNumber}`], 'isShown')
        .name(`Show task ${this.data.taskNumber}`)
        .onChange((isShown) => {
          guiOptions[`task${this.data.taskNumber}`].elements.forEach((el) => {
            el.setAttribute('visible', isShown)
          })
        })
    }
    guiOptions[`task${this.data.taskNumber}`].elements.push(this.el)
  },
})
