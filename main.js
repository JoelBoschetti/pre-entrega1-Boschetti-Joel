// bienvenida
alert('bienvenido a 9zShop')
const carritoCompras = [];
  const ordenarMayorMenor = () =>{
    productos.sort((a,b)=>b.precio - a.precio);
    mostrarListaOrdenada();
  }


    const mostrarListaOrdenada = () =>{
        const listaOrdenada = productos.map(producto =>{
return '- '+ producto.nombre+ ' $' +producto.precio
        });
        console.log(listaOrdenada);
        // alert('Lista de precios'+'\n\n'+listaOrdenada.join('\n'))
        comprarProductos(listaOrdenada)
    }
    ordenarMayorMenor