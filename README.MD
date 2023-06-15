# Gaming Innovate

## Segunda Pre-Entrega de CoderHouse

## Alumno: Bogar Vazquez Mata | Curso: JavaScript | Comisión: 43095

Es una plataforma de computadoras donde el usuario elige pieza a pieza su nueva computadora,
tiene una seccion de descuentos con cupones de diferente porcentaje

### Productos

Todos los productos son generados con la misma clase la cual tiene un constructor con ID, nombre, precio y categoria.

El ID se genera por cada objeto pero antes se tiene que definir 2 cosas: el prefijo y la secuencia.
El prefijo es diferente dependiendo de la categoria del producto.  
La secuencia va aumentando cada que se ejecuta el tercer metodo de la funcion.  
Solo queda generar un ID por cada objeto.

```
function ID() {
  let prefijo = ''
  let sequencia = 0
  return {
    set_prefijo: function (p) {
      prefijo = String(p)
    },
    set_sequencia: function (s) {
      sequencia = s
    },
    generarID: function () {
      var result = prefijo + sequencia
      sequencia += 1
      return result
    },
  }
}
```

> Generador de ID sacado de JavaScript The Good Parts p42

Al final de cada archivo de productos se exporta una lista con todos los objetos de esa categoria

### Elegir los productos

Se muestran todos los productos de una categoria en lista y el cliente debe elegir por el numero en la lista, se muestran las 8 categorias igual y cada producto elegido se agrega al carrito.

### Cupones

Se le hace un descuento al usuario dependiendo el cupon que introduzca

- coderAlumno: 5%
- coderTop10: 10%
- coderTutor: 15%
- coderProfesor: 20%

### Confirmacion

Se le muestran todos los productos al cliente que fueron agregados al carrito.
Al final de la compra si el usuario la confirma se le genera un ticket con todos los detalles en la consola incluyendo el nombre, precio, ID y categoria de los productos

![Imagen de coderhouse](https://upload.wikimedia.org/wikipedia/commons/7/75/Logo_blackbg.png)
