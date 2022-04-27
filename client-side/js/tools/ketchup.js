window.tools.ketchup = {
  name: 'ketchup',
  icon: '/images/ketchup.png',
  state: {
    selected: false,
    mousePressed: false,
    size: 10,
    prevMouse: { x: null, y: null }
  },

  events: {
    mousedown: function (e) {
      e.state.mousePressed = true
      e.state.size += 1
    },
    mouseup: function (e) {
      e.state.mousePressed = false
      e.state.prevMouse = { x: null, y: null }
    },
    mousemove: function (e) {
      if (e.state.selected && e.state.mousePressed) {
        const mouse = e.app.eventToMouse(e)
        const px = e.state.prevMouse.x || e.mouse.x
        const py = e.state.prevMouse.y || e.mouse.y
        e.ctx.strokeStyle = 'red'
        e.ctx.beginPath()
        e.ctx.ellipse(mouse.x, mouse.y, px, py, Math.pi / 4, 0, Math.pi)
        e.ctx.fillStyle = 'red'
        e.ctx.fill()
        e.ctx.closePath()
        e.ctx.stroke()
        e.state.prevMouse = { x: mouse.x, y: mouse.y }
      }
    }
  }
}
