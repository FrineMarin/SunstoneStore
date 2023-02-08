import {productServices} from "../service/product-service.js";

const crearNuevoItem = (imgSrc, nombre, precio, alt,id) => {
    const item = document.createElement("li");
    const producto = `
        <a id="${id}" href="descripcion.html?id=${id}" class="productos_link" data-redirigir>
            <img class="productos_imagen" src="${imgSrc}" alt="${alt}">
            <h3 class="item_nombre">${nombre}</h3>
        </a>
        <h4>${precio}</h4>`
    item.classList.add("productos_item");
    item.innerHTML = producto;
    console.log(item);
    /*

    const btn=item.querySelector("[data-redirigir]");
    btn.addEventListener("click",(evento)=>{
        evento.preventDefault();
        const id=btn.id
        console.log("Ver producto "+id);
        
        mostrarDescripcion(id);

      
       
    });*/
    return item;
}

productServices.listaProductos().then((data) => {
    data.forEach(item => {
        const lista = document.querySelector(`[data-${item.categoria}]`);
        const nuevoItem = crearNuevoItem(item.imgSrc, item.nombre, item.precio, item.alt,item.id);
        lista.appendChild(nuevoItem);
    });
}).catch((error) => alert(error));

/*Crea la estructura html que va a tomar cada uno de los items,
llama a el service que se comunica con el servidor,
recorre la lista que manda como respuesta
y decide a que lista anexar cada item dependiendo de su categoria*/