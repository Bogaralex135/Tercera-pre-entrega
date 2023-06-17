function renderizarCarrito(producto) {
  producto.flatMap(producto => {
    const div = document.createElement('div')
    const carritoContent = document.querySelector('.carrito__content')
    div.className = 'producto__carrito'
    div.innerHTML = `<img src=${producto.img} alt=imagen de ${producto.nombre}>`
    div.innerHTML += `<h3>${producto.nombre}</h3>`
    div.innerHTML += `<p>$${producto.precio}</p>`
    carritoContent.appendChild(div)
  })
}

export { renderizarCarrito }
