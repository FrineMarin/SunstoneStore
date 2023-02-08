import { productServices } from "../service/product-service.js";


const currentUrl=new URL(window.location);
const nombre=currentUrl.searchParams.get("name").toLowerCase();

const crearNuevoItem = (imgSrc, nombre, precio, alt,id) => {
    const item = document.createElement("li");
    const producto = `
        <a id="${id}" href="descripcion.html?id=${id}" class="productos_link" data-redirigir>
            <img class="productos_imagen" src="${imgSrc}" alt="${alt}">
            <h3 class="item_nombre">${nombre}</h3>
        </a>
        <h4>${precio}</h4>`
    item.classList.add("productos_item");
    item.classList.add("admin_item");
    item.innerHTML = producto;
    return item;
}

productServices.listaProductos().then((data) => {
    const lista = document.querySelector("[data-resultados]");
    data.forEach(item => {
        console.log(item);
        const thisName=item.nombre.toLowerCase();
        if(thisName.includes(nombre)){
            const nuevoItem = crearNuevoItem(item.imgSrc, item.nombre, item.precio, item.alt,item.id);
            lista.appendChild(nuevoItem);
        }
    });
}).catch((error) => alert(error));