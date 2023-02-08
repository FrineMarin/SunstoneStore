import { productServices } from "../service/product-service.js";

console.log("conectado");
const formulario=document.querySelector("[data-form]");

formulario.addEventListener("submit",(evento)=>{
    evento.preventDefault();
    const nombre=document.querySelector("[data-nombre]").value;
    const precio=document.querySelector("[data-precio]").value;
    const descripcion=document.querySelector("[data-descripcion]").value;
    const categoria=document.querySelector("[data-categoria]").value;
    const img=document.querySelector("[data-imagen]").value;
    const alt=document.querySelector("[data-alt]").value;
    console.log("Agregando:"+ img + ", " + nombre + ", " + precio + ", " + alt + ", " + categoria + ", " + descripcion)
    productServices.crearProducto(img,nombre,precio,alt,categoria,descripcion).then((respuesta)=>{
        window.location.href="admin.html"
    });
});