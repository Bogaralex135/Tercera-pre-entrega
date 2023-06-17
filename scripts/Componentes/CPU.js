import { Component, ID } from '../componentModel.js'

const id = ID()
id.set_prefijo('GI-CPU-')
id.set_sequencia(110)

const Intel_Core_i5_11400F = new Component(
  id.generarID(),
  'Intel Core i5-11400F',
  160,
  'Procesador',
  '../../assets/img/CPU/i5.png'
)
const AMD_Ryzen_5_5600X = new Component(
  id.generarID(),
  'AMD Ryzen 5 5600X',
  300,
  'Procesador',
  '../../assets/img/CPU/ryzen5.png'
)
const Intel_Core_i7_11700K = new Component(
  id.generarID(),
  'Intel Core i7-11700K',
  400,
  'Procesador',
  '../../assets/img/CPU/i7.png'
)
const AMD_Ryzen_7_5800X = new Component(
  id.generarID(),
  'AMD Ryzen 7 5800X',
  450,
  'Procesador',
  '../../assets/img/CPU/ryzen7.png'
)
const Intel_Core_i9_11900K = new Component(
  id.generarID(),
  'Intel Core i9-11900K',
  600,
  'Procesador',
  '../../assets/img/CPU/i9.png'
)
const AMD_Ryzen_9_5900X = new Component(
  id.generarID(),
  'AMD Ryzen 9 5900X',
  800,
  'Procesador',
  '../../assets/img/CPU/ryzen9.png'
)

export const Procesador = [
  Intel_Core_i5_11400F,
  AMD_Ryzen_5_5600X,
  Intel_Core_i7_11700K,
  AMD_Ryzen_7_5800X,
  Intel_Core_i9_11900K,
  AMD_Ryzen_9_5900X,
]
export default Procesador
