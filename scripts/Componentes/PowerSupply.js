import { Component, ID } from '../componentModel.js'

const id = ID()
id.set_prefijo('GI-PS-')
id.set_sequencia(880)

const Corsair_RM850x = new Component(
  id.generarID(),
  'Corsair RM850x',
  140,
  'Fuente de Poder',
  '../../assets/img/PoweSupply/Corsair_RM850x.png'
)
const EVGA_SuperNOVA = new Component(
  id.generarID(),
  'EVGA SuperNOVA 750 G5',
  120,
  'Fuente de Poder',
  '../../assets/img/PoweSupply/EVGA_SuperNOVA.png'
)
const Seasonic_FOCUS = new Component(
  id.generarID(),
  'Seasonic FOCUS GX-850',
  135,
  'Fuente de Poder',
  '../../assets/img/PoweSupply/Seasonic_FOCUS.png'
)
const be_quiet_Straight_Power_11 = new Component(
  id.generarID(),
  'be quiet! Straight Power 11 Platinum 750W',
  170,
  'Fuente de Poder',
  '../../assets/img/PoweSupply/be_quiet_Straight_Power_11.png'
)
const Thermaltake_Toughpower_Grand = new Component(
  id.generarID(),
  'Thermaltake Toughpower Grand RGB 850W',
  160,
  'Fuente de Poder',
  '../../assets/img/PoweSupply/Thermaltake_Toughpower_Grand.png'
)
const Cooler_Master_MWE_Gold = new Component(
  id.generarID(),
  'Cooler Master MWE Gold 750 V2',
  100,
  'Fuente de Poder',
  '../../assets/img/PoweSupply/Cooler_Master_MWE_Gold.png'
)

export const fuentesDePoder = [
  Corsair_RM850x,
  EVGA_SuperNOVA,
  Seasonic_FOCUS,
  be_quiet_Straight_Power_11,
  Thermaltake_Toughpower_Grand,
  Cooler_Master_MWE_Gold,
]

export default fuentesDePoder
