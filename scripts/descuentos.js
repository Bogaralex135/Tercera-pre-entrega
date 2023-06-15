const cupones = {
  coderAlumno: 5,
  coderTop10: 10,
  coderTutor: 15,
  coderProfesor: 20,
}
/**
 * Calcula el precio total después de aplicar un cupón de descuento, si se proporciona.
 *
 * @param {number} total - El precio total antes del descuento.
 * @return {number} El precio total después del descuento, si se aplica.
 */
export function descuentos(total) {
  let opcion = prompt('Cuenta con un cupon de descuento? SI / NO').toUpperCase()
  let descuento = 0
  if (opcion === 'SI') {
    let cupon = prompt('Ingrese el cupon')
    if (cupones[cupon]) {
      descuento = total - (cupones[cupon] / 100) * total
    }
    return descuento
  }
  return total
}

export default descuentos
