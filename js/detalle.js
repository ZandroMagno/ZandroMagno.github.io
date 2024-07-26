// scripts.js

// Código para cargar productos en all_products.html
document.addEventListener('DOMContentLoaded', () => {
    const urlParams = new URLSearchParams(window.location.search);
    const productId = urlParams.get('id');

    fetch('js/items.json')
        .then(response => response.json())
        .then(data => {
            if (productId) {
                // Cargar detalles del producto
                loadProductDetails(productId, data);
            } else {
                // Cargar todos los productos
                loadAllProducts(data);
            }
        })
        .catch(error => console.error('Error:', error));
});

function loadAllProducts(data) {
    const products_dev = document.getElementById('products_dev');

    data.forEach(product => {
        products_dev.innerHTML += `
            <div class="product">
                <div class="icons">
                    <span><i onclick="addToCart(${product.id}, this)" class="fa-solid fa-cart-shopping"></i></span>
                    <span><a href="item.html?id=${product.id}"><i class="fa-solid fa-eye"></i></a></span>
                    <span><i class="fa-brands fa-whatsapp"></i></span>
                </div>
                <div class="img_product">
                    <img src="${product.img}" alt="">
                    <img class="img_hover" src="${product.img_hover}" alt="">
                </div>
                <h3 class="name_product"><a href="item.html?id=${product.id}">${product.name}</a></h3>
                <div class="stars">
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                </div>
                <div class="price">
                    <p><span>S/${product.price}</span></p>
                </div>
            </div>
        `;
    });
}

function loadProductDetails(productId, data) {
    const product = data.find(item => item.id == productId);

    if (product) {
        document.getElementById('bigImg').src = product.img;
        document.getElementById('productName').innerText = product.name;
        document.getElementById('productPrice').innerText = `S/${product.price}`;
        document.getElementById('productOldPrice').innerText = product.old_price ? `S/${product.old_price}` : '';
        document.getElementById('productSKU').innerText = product.SKU;
        document.getElementById('productDescription').innerText = Array.isArray(product.descripcion) ? product.descripcion.join('. ') : product.descripcion;

        const smImgsContainer = document.getElementById('smImgs');
        smImgsContainer.innerHTML = '';
        smImgsContainer.innerHTML += `<img onclick="ChangeItemImage('${product.img}')" src="${product.img}" alt="">`;
        if (product.img_hover) {
            smImgsContainer.innerHTML += `<img onclick="ChangeItemImage('${product.img_hover}')" src="${product.img_hover}" alt="">`;
        }

        // Stars
        const starsContainer = document.getElementById('productStars');
        starsContainer.innerHTML = '';
        for (let i = 0; i < 5; i++) {
            starsContainer.innerHTML += '<i class="fa-solid fa-star"></i>';
        }
    } else {
        console.error('Producto no encontrado');
    }
}

function ChangeItemImage(src) {
    document.getElementById('bigImg').src = src;
}
