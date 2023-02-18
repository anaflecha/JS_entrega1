function Producto(nombre, precio) {
    this.nombre = nombre;
    this.precio = precio;
  }
  
  const producto1 = new Producto("1-Banderín personalizado", 500);
  const producto2 = new Producto("2-Cartel bienvenida", 500);
  const producto3 = new Producto("3-Kit golosinas", 800);
  const producto4 = new Producto("4-Imprimible comestible para alfajores", 1000);
  
  var productos = [producto1, producto2, producto3, producto4];
  
  let comprar = prompt(" Gracias por decorar tu fiesta con nuestros diseños. ¿Quiere comprar? Indique si o no");
  
  var subtotal = 0;
   if (comprar === "si") {
    const carrito = [];
   
     while (comprar === "si") {
         let todoslosProductos = productos.map(
      (producto, index) => `Item: ${index + 1} - ${producto.nombre} - $ ${producto.precio}`
     );
  
    let productoSeleccionadoIndex = parseInt(
      prompt(`${todoslosProductos.join("\n")}\n\nIngresa el número del item para tu selección`)
        ) - 1;
  
    if (productoSeleccionadoIndex >= 0 && productoSeleccionadoIndex < productos.length) {
      let selectedProduct = productos[productoSeleccionadoIndex];
      alert("Tienes el producto: " + selectedProduct.nombre);
      carrito.push (selectedProduct);
      subtotal += selectedProduct.precio;
    
        if (productoSeleccionadoIndex === 0){
        const personalizar = prompt ("Diganos el nombre con el que quiere personalizar su banderín");
       alert (`Perfecto. Su banderín se personalizara con el nombre:  ${personalizar}`);
      }
  
    } else {
      alert("No tenemos ese producto.");
    }
    
  
  
  comprar = prompt(`Tu carrito contiene:\n${carrito.map(producto => `-${producto.nombre} - $${producto.precio}`).join("\n")}\n\nSubtotal  $${subtotal}  \n\n  ¿Deseas agregar otro producto? Responde si o no`);
}
  var total = subtotal *1.21;
   prompt ("El total de tu compra (IVA incluido) es de: $ " + total + "\n\n"+"Ingresa tu correo para enviar los datos de pago");
   alert("Correo enviado. Muchas gracias por su compra");

  }else{
    alert(" :( Esperamos que vuelva pronto a nuestra tienda.");
}