const productos =[
  {id: 1 ,nombre:"salame", precio: 1200},
  {id: 2, nombre:"cocacola", precio: 550},
  {id: 3, nombre:"cerveza", precio: 450},
  {id: 2, nombre:"chocolate", precio: 250},
];

let carrito = [];
let total= 0

//inicia el codigo preguntaodo si quiere comprar 
let seleccion = prompt("Hola deces comprar algun producto? ( si/no)")
while(seleccion != "si" && seleccion != "no"){
  alert("porfavor ingrese una respuesta valida")
  seleccion = prompt("Hola deces comprar algo (si/no)")
}
// verifica la respuesta del usuario
if (seleccion =="si"){
  alert("nuestra lista de producctos para que pueda realizar su compra")
  let muestraLosProductos = productos.map((producto) => producto.nombre + " $" + producto.precio)
  alert(muestraLosProductos.join(" - "))
}else if (seleccion == "no"){
  alert("Gracais por venir, nos vemos pronto")
}

//si la serpuesta es si, empieza a comparar la entrada con los prductos que hay 
while(seleccion != "no"){
let precio =0
let producto = prompt("Agrega un producto a tu carrito")
let compararConStock = productos.find( elemento=> {
  return elemento.nombre==producto.toLocaleLowerCase()
})
verExistencia(compararConStock)
}

listaFinal(carrito)








//espa parte del codigo agrega el producto al carro 
//y si no existe te informa
function verExistencia(compararConStock){
if (compararConStock != undefined){
 agregarAlCarrito(compararConStock)
}else {
  alert("El producto no se encuentra en el stock")
  seleccion = prompt("Desea seguis comprando")
}
}

//esta funcion agrega el producto al carrito 
function agregarAlCarrito(compararConStock){
  let cantidad = prompt("que cantidad decea de: " + compararConStock.nombre)
  compararConStock.cantidad = cantidad
  carrito.push(compararConStock)
  seleccion = prompt("Desea agregar otro producto")
  
  console.log(compararConStock)
  console.log(carrito)
}

//te da la lista final de la compra y el precio 
function listaFinal(carrito){
  let listaDeCompras = carrito.map((item)=>item.nombre + " $"+item.precio + " Qty: " + item.cantidad)
  alert(  listaDeCompras.join(" - "))
  
  carrito.forEach(item => {
      total += item.precio*item.cantidad
  });
  
  alert("total: " + total)
}