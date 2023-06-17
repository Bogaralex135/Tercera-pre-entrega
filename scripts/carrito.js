import { Procesador } from './Componentes/CPU.js'
import { Disipador } from './Componentes/Dissipators.js'
import { Tarjeta_Madre } from './Componentes/MotherBoard.js'
import { mostrarAlerta } from './Librerias/tostify.js'
import { renderizarCarrito } from './RenderizarCarrito.js'
const listaCategorias = [Procesador, Disipador, Tarjeta_Madre]
const carrito = []

function total(carrito) {
  let totalReduce = carrito
    .flat()
    .reduce((acumulador, producto) => acumulador + producto.precio, 0)
  const totalDiv = document.querySelector('#total')
  totalDiv.innerHTML = `Total: $${totalReduce}`
}

function agregarAlCarrito(event) {
  const productoID = event.target.id
  const productoSeleccionado = listaCategorias.flatMap(producto =>
    producto.filter(producto => producto.id === productoID)
  )

  carrito.push(productoSeleccionado)
  mostrarAlerta(
    `Se ha agregado el ${productoSeleccionado[0].nombre} al carrito`
  )
  renderizarCarrito(productoSeleccionado)

  total(carrito)
}

export { agregarAlCarrito, listaCategorias, total, carrito }
