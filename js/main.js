//open close para el cart

var cart = document.querySelector('.cart');

function open_cart(){
    cart.classList.add("active")
}

function close_cart(){
    cart.classList.remove("active")
}
/*************************************************/


/** open y close para el menu  */
var menu = document.querySelector('#menu');

function open_menu(){
    menu.classList.add("active")
}

function close_menu(){
    menu.classList.remove("active")
}
/**************************************************/

/*****esto es para los item image*****/

let bigImage = document.getElementById("bigImg");

function ChangeItemImage(img){
    bigImage.src = img
}


/**agrgar los items en el carrito de comprar */

var all_products_json;

var items_in_cart = document.querySelector(".items_in_cart");
let product_cart = [];

function addToCart(id , btn){
    product_cart.push(all_products_json[id])
    btn.classList.add("active")

    console.log(product_cart);
    getCartItems()

}
//esta parte es para que aparesca la cantidaad en el icono del contador

let count_item = document.querySelector('.count_item');

let count_item_cart = document.querySelector('.count_item_cart');
let price_cart_total = document.querySelector('.price_cart_total');

let price_cart_head = document.querySelector('.price_cart_head');


//para que se muestre en el carrito de compra
function getCartItems(){
    let tottal_price = 0;

    let items_c ="";
    for(let i = 0; i < product_cart.length; i++){
        items_c += `
        <div class="item_cart">
                <img src="${product_cart[i].img}" alt="">
                <div class="content">
                    <h4>${product_cart[i].name}</h4>
                    <p class="price_cart">${product_cart[i].price}</p>
                </div>
                <button onClick="remove_from_cart(${i})" class="delete_item"><i class="fa-solid fa-trash"></i></button>
            </div>
        
        `; 
        tottal_price +=product_cart[i].price
    }
    items_in_cart.innerHTML = items_c
    
    price_cart_head.innerHTML = "S/" + tottal_price
    count_item.innerHTML = product_cart.length

    count_item_cart.innerHTML = ` (${product_cart.length} productos)`
    price_cart_total.innerHTML = "S/" + tottal_price

}

//eliminar producto
function remove_from_cart(index){
    product_cart.splice(index,1)
    getCartItems()

    let addToCartButtons = document.querySelectorAll(".fa-cart-shopping");
    for(let i = 0; i< addToCartButtons.length; i++){
        addToCartButtons[i].classList.remove("active")
        
        product_cart.forEach(product => {
            if(product.id == i){
                addToCartButtons[i].classList.add("active")
            }
        })
    }
}

//back_to_top 

let back_to_top = document.querySelector(".back_to_top")
back_to_top.addEventListener("click", function(){
    window.scrollTo({
        top: 0,
        behavior:"smooth"
    })
})


