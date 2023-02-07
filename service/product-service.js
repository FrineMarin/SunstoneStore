const listaProductos = () => fetch(`https://sunstoreserver.onrender.com/productos`).then(respuesta => respuesta.json())

//Se comunica con el servidor y devuelve la lista de productos}

export const productServices={
    listaProductos,
}