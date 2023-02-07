const crearNuevoItem = (imgSrc, nombre, precio, alt) => {
    const item = document.createElement("li");
    const producto = `
        <a href="" class="productos_link">
            <img class="productos_imagen" src="${imgSrc}" alt="${alt}">
            <h3 class="item_nombre">${nombre}</h3>
        </a>
        <h4>${precio}</h4>`
    item.classList.add("productos_item");
    item.innerHTML = producto;
    return item;
}

const mostrarProductos=(categoria)=>{
    const lista = document.querySelector(`[data-${categoria}]`);

    const http = new XMLHttpRequest();  

    http.open("GET", `https://sunstoreserver.onrender.com/${categoria}`);

    http.send();

    http.onload = () => {
        const data = JSON.parse(http.response);
        data.forEach(item => {
            const nuevoItem = crearNuevoItem(item.imgSrc, item.nombre, item.precio, item.alt);
            lista.appendChild(nuevoItem);
        });
    }
}

mostrarProductos("skincare");
mostrarProductos("bebidas");
mostrarProductos("velas");
    



