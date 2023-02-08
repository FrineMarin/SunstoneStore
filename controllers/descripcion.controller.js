import { productServices } from "../service/product-service.js";

const currentUrl=new URL(window.location);
const id=currentUrl.searchParams.get("id");

const crearItem = (imgSrc, nombre, precio, alt,descripcion) => {
    const item = document.createElement("div");
    const producto = `<img class="descripcion_img" src="${imgSrc}" alt="${alt}">
                <div class="descripcion">
                    <h1>${nombre}</h1>
                    <h2>${precio}</h2>
                    <p>${descripcion}</p>
                </div>`
    console.log(producto);
    item.classList.add("descripcionProducto");
    item.innerHTML = producto;
    console.log(item);
    return item;
}

    productServices.detalleProducto(id).then((item)=>{
        const lista = document.querySelector("[data-descripcion]");
        const nuevoItem = crearItem(item.imgSrc, item.nombre, item.precio, item.alt,item.descripcion);
        lista.appendChild(nuevoItem);
   })


/*
export function mostrarDescripcion(id){
    productServices.listaProductos().then((data) => {
        data.forEach(item => {
            if(item.id==id){
                window.location.href="descripcion.html";
                console.log("mostrar "+id);

        

                const lista = document.getElementsByClassName("container")[1];
                console.log("Se obtuvo la lista: " + lista.innerHTML);
                const nuevoItem = crearItem(item.imgSrc, item.nombre, item.precio, item.alt,item.descripcion);
                console.log(item.nombre);
                console.log("Se creo el elemento: "+nuevoItem.innerHTML);
                lista.appendChild(nuevoItem);
                
            }
        });
    }).catch((error) => alert(error));
}


*/