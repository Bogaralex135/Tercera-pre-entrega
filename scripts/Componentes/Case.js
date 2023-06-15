import { Component, ID } from '../componentModel.js'

const id = ID()
id.set_prefijo('GI-CASE-')
id.set_sequencia(770)

const NZXT_H510_Elite = new Component(
  id.generarID(),
  'NZXT H510 Elite',
  150,
  'Gabinete'
)
const Lian_Li_Lancool_II_Mesh = new Component(
  id.generarID(),
  'Lian Li Lancool II Mesh',
  100,
  'Gabinete'
)
const Fractal_Design_Meshify_C = new Component(
  id.generarID(),
  'Fractal Design Meshify C',
  90,
  'Gabinete'
)
const Corsair_iCUE_465X_RGB = new Component(
  id.generarID(),
  'Corsair iCUE 465X RGB',
  150,
  'Gabinete'
)
const Phanteks_Eclipse_P400A = new Component(
  id.generarID(),
  'Phanteks Eclipse P400A',
  85,
  'Gabinete'
)
const Cooler_Master_MasterCase_H500M = new Component(
  id.generarID(),
  'Cooler Master MasterCase H500M',
  200,
  'Gabinete'
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
