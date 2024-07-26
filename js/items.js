fetch('js/items.json')
    .then(response => response.json())
    .then(data =>{
        const swiper_items_sale = document.getElementById("swiper_items_sale");
        const other_product_swiper = document.getElementById("other_product_swiper");
        const other_product_swiper2 = document.getElementById("other_product_swiper2");
        const products_dev = document.getElementById("products_dev");

        all_products_json = data;

        data.forEach(product => {
            if(product.old_price){
                const percent_disc = Math.floor((product.old_price - product.price) / product.old_price * 100);
                swiper_items_sale.innerHTML +=`
                    <div class="product swiper-slide">
                        <div class="icons">
                            <span><i onclick="addToCart(${product.id}, this)" class="fa-solid fa-cart-shopping"></i></span>
                            <span><a href="item.html?id=${product.id}"><i class="fa-solid fa-eye"></i></a></span>
                            <span><i class="fa-brands fa-whatsapp"></i></span>
                        </div>
                        <span class="sale_present">${percent_disc}%</span>
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
                            <p class="old_price">S/${product.old_price}</p>
                        </div>
                    </div>
                `;
            }
        });

        data.forEach(product => {
            other_product_swiper.innerHTML +=`
                <div class="product swiper-slide">
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

        data.forEach(product => {
            other_product_swiper2.innerHTML +=`
                <div class="product swiper-slide">
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

        data.forEach(product => {
            products_dev.innerHTML +=`
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
    })
    .catch(error => console.error('Error:', error));