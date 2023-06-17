import { Component, ID } from '../componentModel.js'

const id = ID()
id.set_prefijo('GI-RAM-')
id.set_sequencia(440)

const Corsair_Vengeance_LPX = new Component(
  id.generarID(),
  'Corsair Vengeance LPX 16GB DDR4 3200MHz C16 XMP 2.0',
  90,
  'RAM',
  '../../assets/img/RAM/Corsair_Vengeance_LPX.png'
)
const G_Skill_Trident_Z = new Component(
  id.generarID(),
  'G.Skill Trident Z RGB 16GB DDR4 3600MHz C16',
  130,
  'RAM',
  '../../assets/img/RAM/G_Skill_Trident_Z.png'
)
const Kingston_HyperX_Fury = new Component(
  id.generarID(),
  'Kingston HyperX Fury RGB 16GB DDR4 3200MHz',
  95,
  'RAM',
  '../../assets/img/RAM/Kingston_HyperX_Fury.png'
)
const Crucial_Ballistix = new Component(
  id.generarID(),
  'Crucial Ballistix RGB 16GB DDR4 3600MHz C16',
  120,
  'RAM',
  '../../assets/img/RAM/Crucial_Ballistix.png'
)
const Team_T_Force_Delta = new Component(
  id.generarID(),
  'Team T-Force Delta RGB 16GB DDR4 3200MHz C16',
  85,
  'RAM',
  '../../assets/img/RAM/Team_T_Force_Delta.png'
)
const Corsair_Dominator = new Component(
  id.generarID(),
  'Corsair Dominator Platinum RGB 16GB DDR4 3200MHz C16',
  150,
  'RAM',
  '../../assets/img/RAM/Corsair_Dominator.png'
)

export const memoriasRam = [
  Corsair_Vengeance_LPX,
  G_Skill_Trident_Z,
  Kingston_HyperX_Fury,
  Crucial_Ballistix,
  Team_T_Force_Delta,
  Corsair_Dominator,
]
export default memoriasRam
