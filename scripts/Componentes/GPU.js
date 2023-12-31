import { Component, ID } from '../componentModel.js'

const id = ID()
id.set_prefijo('GI-GPU-')
id.set_sequencia(660)

const NVIDIA_GeForce_RTX_3080 = new Component(
  id.generarID(),
  'NVIDIA GeForce RTX 3080',
  700,
  'GPU',
  '../../assets/img/GPU/NVIDIA_GeForce_RTX_3080.png'
)
const AMD_Radeon_RX_6800_XT = new Component(
  id.generarID(),
  'AMD Radeon RX 6800 XT',
  650,
  'GPU',
  '../../assets/img/GPU/AMD_Radeon_RX_6800_XT.png'
)
const NVIDIA_GeForce_RTX_3070 = new Component(
  id.generarID(),
  'NVIDIA GeForce RTX 3070',
  500,
  'GPU',
  '../../assets/img/GPU/NVIDIA_GeForce_RTX_3070.png'
)
const AMD_Radeon_RX_5700_XT = new Component(
  id.generarID(),
  'AMD Radeon RX 5700 XT',
  400,
  'GPU',
  '../../assets/img/GPU/AMD_Radeon_RX_5700_XT.png'
)
const NVIDIA_GeForce_GTX_1660_Super = new Component(
  id.generarID(),
  'NVIDIA GeForce GTX 1660 Super',
  250,
  'GPU',
  '../../assets/img/GPU/NVIDIA_GeForce_GTX_1660_Super.png'
)
const AMD_Radeon_RX_5500_XT = new Component(
  id.generarID(),
  'AMD Radeon RX 5500 XT',
  200,
  'GPU',
  '../../assets/img/GPU/.png'
)

export const tarjetasGraficas = [
  NVIDIA_GeForce_RTX_3080,
  AMD_Radeon_RX_6800_XT,
  NVIDIA_GeForce_RTX_3070,
  AMD_Radeon_RX_5700_XT,
  NVIDIA_GeForce_GTX_1660_Super,
  AMD_Radeon_RX_5500_XT,
]

export default tarjetasGraficas
