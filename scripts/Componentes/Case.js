import { Component, ID } from '../componentModel.js'

const id = ID()
id.set_prefijo('GI-CASE-')
id.set_sequencia(770)

const NZXT_H510_Elite = new Component(
  id.generarID(),
  'NZXT H510 Elite',
  150,
  'Gabinete',
  '../../assets/img/Case/NZXT_H510_Elite.png'
)
const Lian_Li_Lancool_II_Mesh = new Component(
  id.generarID(),
  'Lian Li Lancool II Mesh',
  100,
  'Gabinete',
  '../../assets/img/Case/Lian_Li_Lancool_II_Mesh.png'
)
const Fractal_Design_Meshify_C = new Component(
  id.generarID(),
  'Fractal Design Meshify C',
  90,
  'Gabinete',
  '../../assets/img/Case/Fractal_Design_Meshify_C.png'
)
const Corsair_iCUE_465X_RGB = new Component(
  id.generarID(),
  'Corsair iCUE 465X RGB',
  150,
  'Gabinete',
  '../../assets/img/Case/Corsair_iCUE_465X_RGB.png'
)
const Phanteks_Eclipse_P400A = new Component(
  id.generarID(),
  'Phanteks Eclipse P400A',
  85,
  'Gabinete',
  '../../assets/img/Case/Phanteks_Eclipse_P400A.png'
)
const Cooler_Master_MasterCase_H500M = new Component(
  id.generarID(),
  'Cooler Master MasterCase H500M',
  200,
  'Gabinete',
  '../../assets/img/Case/Cooler_Master_MasterCase_H500M.png'
)

export const gabinetes = [
  NZXT_H510_Elite,
  Lian_Li_Lancool_II_Mesh,
  Fractal_Design_Meshify_C,
  Corsair_iCUE_465X_RGB,
  Phanteks_Eclipse_P400A,
  Cooler_Master_MasterCase_H500M,
]

export default gabinetes
