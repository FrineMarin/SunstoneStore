import { productServices } from "../service/product-service.js";

const formulario=document.querySelector("[data-form]");
const obtenerInformacion=()=>{
    const currentUrl=new URL(window.location);
    const id=currentUrl.searchParams.get("id");
    productServices.detalleProducto(id).then(item=>console.log(item));

    const nombre=document.querySelector("[data-nombre]");
    const precio=document.querySelector("[data-precio]");
    const descripcion=document.querySelector("[data-descripcion]");
    const categoria=document.querySelector("[data-categoria]");
    const img=document.querySelector("[data-imagen]");
    const alt=document.querySelector("[data-alt]");
    
    productServices.detalleProducto(id).then((item)=>{
        nombre.value=item.nombre;
        precio.value=item.precio;
        descripcion.value=item.descripcion;
        
        categoria.value=item.categoria;
        alt.value=item.alt;
        img.value=item.imgSrc;
    })
}

obtenerInformacion();

formulario.addEventListener("submit",(evento)=>{
    
    evento.preventDefault();

    const currentUrl=new URL(window.location);
    const id=currentUrl.searchParams.get("id");

    const nombre=document.querySelector("[data-nombre]").value;
    const precio=document.querySelector("[data-precio]").value;
    const descripcion=document.querySelector("[data-descripcion]").value;
    const categoria=document.querySelector("[data-categoria]").value;
    const img=document.querySelector("[data-imagen]").value;
    const alt=document.querySelector("[data-alt]").value;
    productServices.actualizarProducto(img,nombre,precio,descripcion,categoria,alt,id).then(()=>{
        window.location.href="admin.html";
    });
})