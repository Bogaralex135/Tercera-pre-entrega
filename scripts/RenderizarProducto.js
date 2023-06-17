import { agregarAlCarrito } from './carrito.js'

export function RenderizarProducto(listaProductos, numlista) {
  const content_component = document.createElement('div')

  content_component.className = 'content__component'

  content_component.innerHTML = `<h2><span>${numlista}</span> ${listaProductos[0].categoria}</h2>`

  const producto__container = document.createElement('div')
  producto__container.className = 'producto__container'

  for (const producto of listaProductos) {
    const div = document.createElement('div')
    div.className = 'producto'
    div.innerHTML += `<img src=${producto.img} alt=imagen de ${producto.nombre}>`
    div.innerHTML += `<h3>${producto.nombre}</h3>`
    div.innerHTML += `<p>$${producto.precio}</p>`

    const boton = document.createElement('button')
    boton.className = 'boton_carrito'
    boton.innerHTML = 'Agregar al carrito'
    boton.setAttribute('id', producto.id)
    boton.setAttribute('categoria', producto.categoria)
    boton.addEventListener('click', agregarAlCarrito)

    div.append(boton)

    producto__container.append(div)
  }
  content_component.append(producto__container)
  const main_content = document
    .querySelector('#content')
    .appendChild(content_component)
}

export default RenderizarProducto
