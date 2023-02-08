import {productServices} from "../service/product-service.js";

const crearNuevoItem = (imgSrc, nombre, precio, alt,id) => {
    console.log(id);
    const item = document.createElement("li");
    const producto = `
        <a href="" class="productos_link">
            <img class="productos_imagen" src="${imgSrc}" alt="${alt}">
            <h3 class="item_nombre">${nombre}</h3>
        </a>
        <div class="iconos">
        <h4>${precio}</h4>
        <div>
        <a href="editar.html?id=${id}"><img src="../Elementos/Graficos/edit.png" alt="editar producto"></a>
        <a id="${id}" data-eliminar><img src="../Elementos/Graficos/delete.png" alt="borrar producto"></a>
        </div>
        </div>
        `
    item.classList.add("productos_item");
    item.classList.add("admin_item");
    item.innerHTML = producto;

    const btn=item.querySelector("[data-eliminar]");

    btn.addEventListener("click",()=>{
        const id=btn.id
        productServices.eliminarProducto(id).then(respuesta=>{
            window.location.reload();
        }).catch(err=>alert("Ocurrio un error"))
       
    });
    return item;
}

productServices.listaProductos().then((data) => {
    data.forEach(item => {
        const lista = document.querySelector("[data-todos]");
        const nuevoItem = crearNuevoItem(item.imgSrc, item.nombre, item.precio, item.alt,item.id);
        lista.appendChild(nuevoItem);
    });
}).catch((error) => alert("Ocurrio un error"));
