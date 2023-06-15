import { procesadores } from './Componentes/CPU.js'
import { disipadores } from './Componentes/Dissipators.js'
import { tarjetasMadre } from './Componentes/MotherBoard.js'
import { RenderizarProducto } from './RenderizarProducto.js'

RenderizarProducto(procesadores)
RenderizarProducto(disipadores)
RenderizarProducto(tarjetasMadre)
