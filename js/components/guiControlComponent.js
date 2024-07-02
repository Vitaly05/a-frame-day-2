import GUI from 'lil-gui'

const gui = new GUI()

gui
  .add(
    {
      removeAttr: () => {
        document.getElementById('js-task-8').removeAttribute('gui-control')
      },
    },
    'removeAttr'
  )
  .name('Remove "gui-control" attr from #js-task-8')

const guiOptions = {}

AFRAME.registerComponent('gui-control', {
  schema: {
    taskNumber: { type: 'string' },
    isShown: { type: 'boolean', default: true },
  },
  init: function () {
    if (!guiOptions[`task${this.data.taskNumber}`]) {
      guiOptions[`task${this.data.taskNumber}`] = {
        isShown: this.data.isShown,
        elements: [],
      }
      const handleChange = getToggleVisibleFunction(this.data.taskNumber)
      gui
        .add(guiOptions[`task${this.data.taskNumber}`], 'isShown')
        .name(`Show task ${this.data.taskNumber}`)
        .onChange(handleChange)
    }
    guiOptions[`task${this.data.taskNumber}`].elements.push(this.el)
  },
  remove: function () {
    const options = guiOptions[`task${this.data.taskNumber}`]
    const index = options.elements.findIndex((el) => el === this.el)
    options.elements.splice(index, 1)
  },
})

function getToggleVisibleFunction(taskNumber) {
  return (isShown) => {
    guiOptions[`task${taskNumber}`].elements.forEach((el) => {
      el.setAttribute('visible', isShown)
    })
  }
}
