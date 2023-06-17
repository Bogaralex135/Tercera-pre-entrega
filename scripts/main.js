import { listaCategorias } from './carrito.js'
import { RenderizarProducto } from './RenderizarProducto.js'

const [Procesador, Disipador, Tarjeta_Madre] = listaCategorias

RenderizarProducto(Procesador, 1)
RenderizarProducto(Disipador, 2)
RenderizarProducto(Tarjeta_Madre, 3)
