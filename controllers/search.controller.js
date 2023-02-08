import {productServices} from "../service/product-service.js";

const buscar=document.querySelector("[data-buscar]");

buscar.addEventListener("click",(evento)=>{
    const name=document.querySelector("[data-input]").value;
    evento.preventDefault();
    window.location.href=`resultados.html?name=${name}`;
});


