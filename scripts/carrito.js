/**
 * Crea un nuevo carrito de compras agregando productos al mismo.
 *
 * @param {...type} productosElegidos - Los productos elegidos para ser agregados al carrito.
 * @return {Array} Un array que contiene todos los productos agregados al carrito.
 */

export function carrito(...productosElegidos) {
  const carrito = []
  carrito.push(...productosElegidos)
  return carrito
}

export default carrito
