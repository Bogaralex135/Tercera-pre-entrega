class Component {
  constructor(id, nombre, precio, categoria, img) {
    this.id = id
    this.nombre = nombre
    this.precio = precio
    this.categoria = categoria
    this.img = img
  }
}

function ID() {
  let prefijo = ''
  let sequencia = 0
  return {
    set_prefijo: function (p) {
      prefijo = String(p)
    },
    set_sequencia: function (s) {
      sequencia = s
    },
    generarID: function () {
      var result = prefijo + sequencia
      sequencia += 1
      return result
    },
  }
}

export { Component, ID }
