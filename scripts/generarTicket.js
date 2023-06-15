/**
 * Genera un ticket del carrito y el total dados.
 *
 * @param {array} carrito - El array de productos en el carrito.
 * @param {number} total - El precio total de los productos en el carrito.
 * @return {undefined} Muestra todos los detalles de la compra en consola.
 */

export function generarTicket(carrito, total) {
  let mostrar = 'Productos Comprados:\n\n'
  carrito.map((producto, index) => {
    mostrar += `${index + 1}) ${producto.nombre}\n`
    mostrar += `Precio: $${producto.precio}\n`
    mostrar += `ID: ${producto.id}\n`
    mostrar += `Categoria: ${producto.categoria}\n\n`
  })
  mostrar += `\nTotal: $${total}\n\n`
  console.log(mostrar)
}
export default generarTicket
