import { Component, ID } from '../componentModel.js'

const id = ID()
id.set_prefijo('GI-HDD-')
id.set_sequencia(550)

const Samsung_970_EVO_Plus = new Component(
  id.generarID(),
  'Samsung 970 EVO Plus 1TB',
  180,
  'HDD'
)
const Crucial_MX500 = new Component(
  id.generarID(),
  'Crucial MX500 1TB 3D NAND SATA 2.5 Inch Internal SSD',
  110,
  'HDD'
)
const Seagate_BarraCuda = new Component(
  id.generarID(),
  'Seagate BarraCuda 2TB Internal Hard Drive HDD',
  55,
  'HDD'
)
const WD_Blue_SN550 = new Component(
  id.generarID(),
  'WD Blue SN550 1TB NVMe Internal SSD',
  105,
  'HDD'
)
const Toshiba_X300 = new Component(
  id.generarID(),
  'Toshiba X300 4TB Performance Desktop and Gaming Hard Drive',
  120,
  'HDD'
)
const Intel_660p = new Component(
  id.generarID(),
  'Intel 660p 1TB NVMe Internal SSD',
  120,
  'HDD'
)

export const discos = [
  Samsung_970_EVO_Plus,
  Crucial_MX500,
  Seagate_BarraCuda,
  WD_Blue_SN550,
  Toshiba_X300,
  Intel_660p,
]
export default discos
