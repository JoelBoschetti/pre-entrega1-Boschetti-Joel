// bienvenida

const carrito = [];



  const ordenarMayorMenor = () => {
    productos.sort((a,b)=> a.precio - b.precio);
    mostrarListaOrdenada();
  }

  const ordenarMenorMayor = () => {
    productos.sort((a,b)=> b.precio - a.precio);
    mostrarListaOrdenada();
  }

    const mostrarListaOrdenada = () => {
   
         const listaOrdenada = productos.map(producto => {
  return '- '+producto.nombre+' $' +producto.precio
           });
           
            alert('Lista de precios'+'\n\n'+listaOrdenada.join('\n'))
            comprarProductos(listaOrdenada)
    }
    const comprarProductos = (listaOrdenada) => {
      let otroProducto = false
      let productoNombre = ''
      let productoCantidad = ''
    
    do {
      productoNombre= prompt('¿que producto quiere comprar?'+'\n\n'+listaOrdenada.join('\n'))
      productoCantidad = parseInt(prompt('cuantos vas a comprar?'))
     const existeProducto = productos.some(producto => producto.nombre.toLowerCase() == productoNombre.toLowerCase())
     if (existeProducto) {
      const producto = productos.find(producto => producto.nombre.toLowerCase() == productoNombre.toLowerCase())
      agregarAlCarrito(producto, productoCantidad)
     } else {
      alert("El producto no esta en el catalogo")
     }
     otroProducto=confirm (alert("Quiere seguir comprando?"))
    } while (otroProducto);
}
const agregarAlCarrito = (producto, productoCantidad) => {
  const productoId = producto.id 
  const productoRepetido= carrito.find(producto => producto.id == productoId)
  if (!productoRepetido) {
    producto.cantidad += productoCantidad
    carrito.push(producto)
  } else {
    productoRepetido.cantidad += productoCantidad
  }
  console.log(carrito)
}
    ordenarMayorMenor()