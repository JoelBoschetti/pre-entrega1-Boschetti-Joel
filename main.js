// bienvenida
alert('bienvenido a 9zShop')
const comprarProductos = () => {
    let producto = ''
    let cantidad = 0
    let precio = 0
    let subtotal = 0
    let seguirComprando = true


    do {
        producto = prompt('Queres comprar Camiseta, Gorra o Ambos?').toUpperCase()
        cantidad = parseInt(prompt('¿Cuantos quieres comprar?'))
        console.log(producto);
        console.log(cantidad);
        while (Number.isNaN(cantidad) || cantidad === 0){
            alert('Debe agregar una cantidad válida!')
            cantidad = parseInt(prompt('¿Cuantos queres comprar?'))
           }
        
        switch (producto) {
            case 'CAMISETA':
                precio = 8600
                break;
            case 'GORRA':
                precio = 3000
                break;
                case 'AMBOS':
                precio = 30000
                break;
            default:
                alert('Alguno de los datos ingresados son incorrectos')
                precio = 0
                cantidad = 0
                
        }
        subtotal += precio * cantidad

        seguirComprando = confirm('¿Deseas seguir comprando?')
    } while (seguirComprando);

    return subtotal
}

let resultado = comprarProductos()
alert("Este es tu total: $" +resultado)
console.log(resultado);
