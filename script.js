/*let objeto = {
  nombre: "Ulises",
  apellido: {    
    paterno:"Portuguez",    
    materno:"Gordillo" },
  edad: 34,
  nombreCompleto: function () {
    return this.nombre + " " + this.apellido.paterno
  }
  
}

document.getElementById("boquita").innerHTML = objeto.nombreCompleto();*/

let articulo = {
    nombre: "Dona",
    descripción: "Chocolate con chispas gluten free",
    precio: 50,
    cantidad: 5,
    fotografia: "https://www.nestleprofessional.com.mx/sites/default/files/styles/recipe/public/media/mini_donas_crunch.jpg?itok=xmWJdmGc"
    }
    
    let venta = { 
    productos: {
        pan: "Dona"
    },
    total: articulo.precio * articulo.cantidad,
    idCliente: 1515,
    emailCliente: "idcliente1515@gmail.com"
    
    }
    
    
    console.log("Adquirió "+ articulo.cantidad + " "+articulo.nombre + " vendida a cliente no. "+ venta.idCliente + " total a pagar "+ venta.total);


/*
let articulo ={
    nombre: "Dona Chocolate",
    descripcion: "Chocolate con chispas gluten free",
    precio : 50,
    cantidad:30,
    fotografiaUrl:"https://www.nestleprofessional.com.mx/sites/default/files/styles/recipe/public/media/mini_donas_crunch.jpg?itok=xmWJdmGc"

}

let venta ={
    productos:{
        pan:"dona",

    },
    total: function (){
      return tot= this.articulo.cantidad * this.articulo.precio;
     
    },
    idCliente:1515,
    email_cliente:"idcliente1515@gmail.com",
}

console.log(venta.total());*/
