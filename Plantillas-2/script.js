
// Slider
var swiper = new  Swiper('.MySwiper',{
    slidesPerView: 3,
    spaceBetween: 30,
    loop: true,
    loopFillGroupWithBlanck: true,

    pagination:{
        el:'.swiper-pagination',
        clickable: true,
    },
    navigation:{
        prevEl: '.swiper-button-prev',
        nextEl: '.swiper-button-next'
    },
    breakpoints:{
        0:{
            slidesPerView: 1
        },
        520:{
            slidesPerView: 2
        },
        950:{
            slidesPerView: 3
        }
    }
})



// Carrito
const carrito = document.getElementById('carrito')
const elementos = document.getElementById('lista')
const elementos2 = document.getElementById('lista-2')
const lista = document.querySelector('#lista-carrito tbody')
const vaciarCarritoBtn = document.getElementById('vaciar-carrito')

cargarEventoListeners();

function cargarEventoListeners (){
    elementos.addEventListener('click', comprarElemento);
    elementos2.addEventListener('click', comprarElemento);

    carrito.addEventListener('click', eliminarElemento);

    vaciarCarritoBtn.addEventListener('click', vaciarCarrito);

    document.addEventListener('DOMContentLoaded', leerLocalStorage);
}



function comprarElemento(e) {
    e.preventDefault();
    if(e.target.classList.contains('agregar-carrito')){
        const elemento = e.target.parenteElement.parentElement;
        leerDatosElemento(elemento);
    }
}



function leerDatosElemento(elemento){
    const infoElemento = {
        imagen : elemento.querySelector('img').src,
        titulo : elemento.querySelector('h3').textContent,
        precio : elemento.querySelector('.precio').textContent,
        id : elemento.querySelector('a').getAttribute('data-id')
    }
    insetarCarrito(infoElemento);
}


function insetarCarrito(elemento){
    const row = document.createElement('tr');
    row.innerHTML = `
        <td>  
            <img src='${elemento.imagen}' width=100>
        </td>

        <td>
            ${elemento.titulo} 
        </td>

        <td>
            ${elemento.precio} 
        </td>
        <td>
            <a herf='#' class='borrar' data-id'${elemento.id}'> X </a>
        </td>
    `;
    lista.appendChild(row)
    guardarElementoLocalStorage(elemento)
}

function eliminarElemento(e){
    e.preventDefault();

    let elemento,
        elementoId;

    if(e.target.classList.contains('borrar')){
        e.target.parentElement.parentElement.remove();
        elemento = e.target.parentElement.parentElement;
        elementoId = elemento.querySelector('a').getAttribute('data-id')
    }

    eliminarElementoLocalStorage(elementoId)

}

function vaciarCarrito(){
    while(lista.firstChild){
        lista.removeChild(lista.firstChild)
    }

    vaciarLocalStorage();
    return false;
}

function guardarElementoLocalStorage(elemento){

    let elementos;

    elementos = obtenerelementoLocalStorage();

    elementos.push(elemento);

    localStorage.setItem('elementos', JSON.stringify(elementos));
}
// Hasta aca lo que hace es agregar elementos


function obtenerelementoLocalStorage(){
    let elementosLS;

    if(localStorage.getItem('elementos') === null){
        elementosLS = [];
    }else{
        elementosLS = JSON.parse(localStorage.getItem('elementos'));
    }
    return elementosLS
}

function leerLocalStorage(){
    let elementosLS
    
    elementosLS = obtenerelementoLocalStorage();

    elementosLS.forEach(function(elemento){
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>
                <img src='${elemento.imagen}' width=100>
            </td>
            <td>
                ${elemento.titulo} 
            </td>
            <td>
                ${elemento.precio} 
            </td>
            <td>
                <a herf='#' class='borrar' data-id'${elemento.id}'>X</a>
            </td>
        `;
        lista.appendChild(row);
        guardarElementoLocalStorage();
    })
}

function eliminarElementoLocalStorage(elemento){
    let elementosLS;

    elementosLS = obtenerelementoLocalStorage();
    elementosLS.forEach(function(elementosLS, index){
        if(elementosLS.id === elemento){
            elementosLS.splice(index, 1)
        }
    });

    localStorage.setItem('elementos', JSON.stringify(elementosLS));
}

function vaciarLocalStorage(){
    localStorage.clear();
}





// _____________________________Carrito funcional ________________________________________


// //  
// // Definir una variable para el carrito de compras
// let cart = [];

// // Obtener los elementos del DOM que se utilizarán
// const cartItemsEl = document.querySelector("#cart-items");
// const cartTotalEl = document.querySelector("#cart-total");
// const clearCartBtn = document.querySelector("#clear-cart");

// // Agregar un evento "click" al botón "Agregar al carrito"
// const addToCartBtns = document.querySelectorAll(".add-to-cart");
// addToCartBtns.forEach((btn) => {
//   btn.addEventListener("click", (e) => {
//     const name = e.target.getAttribute("data-name");
//     const price = parseFloat(e.target.getAttribute("data-price"));

//     // Agregar el elemento al carrito
//     cart.push({ name, price });

//     // Actualizar la interfaz del carrito
//     updateCart();
//   });
// });

// // Agregar un evento "click" al botón "Vaciar carrito"
// clearCartBtn.addEventListener("click", () => {
//   cart = [];
//   updateCart();
// });

// // Función para actualizar la interfaz del carrito
// function updateCart() {
//   // Limpiar el contenido actual del carrito
//   cartItemsEl.innerHTML = "";
//   cartTotalEl.innerHTML = "$0.00";

//   // Agregar los elementos del carrito al DOM
//   cart.forEach((item) => {
//     const li = document.createElement("li");
//     li.textContent = `${item.name} - $${item.price}`;
//     cartItemsEl.appendChild(li);
//   });

//   // Calcular el total del carrito
//   const total = cart.reduce((acc, item) => acc + item.price, 0);

//   // Actualizar el total en la interfaz
//   cartTotalEl.innerHTML = `$${total.toFixed(2)}`;
// }
