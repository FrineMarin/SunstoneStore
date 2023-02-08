const servidor="https://sunstoreserver.onrender.com/productos"
const listaProductos = () => fetch(servidor).then(respuesta => respuesta.json());

//Se comunica con el servidor y devuelve la lista de productos}
const crearProducto=(img,nombre,precio,alt,categoria,descripcion)=>{
    console.log("Recibiendo:"+ img + ", " + nombre + ", " + precio + ", " + alt + ", " + categoria + ", " + descripcion);
    return fetch(servidor,{
        method:"POST",
        headers:({
            "Content-Type": "application/json",

        }),
        body:JSON.stringify({"imgSrc" : img,
            "nombre":nombre,
            "precio":precio,
            "alt":alt,
            "categoria":categoria,
            "descripcion":descripcion,
            "id":uuid.v4()}),
    });
};


const eliminarProducto=(id)=>{
    return fetch(`https://sunstoreserver.onrender.com/productos/${id}`,{
        method:"DELETE"
    })
}

const detalleProducto=(id)=>{
    return fetch(`https://sunstoreserver.onrender.com/productos/${id}`).then(respuesta=>respuesta.json());
}

const actualizarProducto=(img,nombre,precio,descripcion,categoria,alt,id)=>{
    return fetch(`https://sunstoreserver.onrender.com/productos/${id}`,{
        method:"PUT",
        headers:{
            "Content-Type": "application/json",
        },
        body:JSON.stringify({"imgSrc":img,
        "nombre":nombre,
        "precio":precio,
        "alt":alt,
        "categoria":categoria,
        "descripcion":descripcion,
        "id":id}),
    }).then(respuesta=>respuesta)
    .catch((err)=>console.log(err));
};

export const productServices={
    listaProductos,
    crearProducto,
    eliminarProducto,
    detalleProducto,
    actualizarProducto,
};

//Se encarga de comunicarse con el servidor usando metodos http