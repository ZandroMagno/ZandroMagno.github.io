var filter = document.querySelector(".filter");

function open_close_filter() {
    filter.classList.toggle("active");
}

// Función para obtener los datos del archivo JSON
async function fetchProducts() {
    try {
        const response = await fetch('js/items.json');
        const products = await response.json();
        return products;
    } catch (error) {
        console.error('Error fetching products:', error);
        return [];
    }
}

// Función para filtrar y mostrar los productos
async function displaySearchedProducts(searchTerm = '') {
    const products = await fetchProducts();
    const filteredData = searchTerm 
        ? products.filter(item => item.name.toLowerCase().includes(searchTerm))
        : products;
    paginateProducts(filteredData);
}

// Función para mostrar los productos en el HTML
const displayItem = (items, pageNumber = 1, itemsPerPage = 12) => {
    const products_dev = document.getElementById("products_dev");
    const startIndex = (pageNumber - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const paginatedItems = items.slice(startIndex, endIndex);

    products_dev.innerHTML = paginatedItems.map(product => {
        const old_price_pargrahp = product.old_price ? `<p class="old_price">S/${product.old_price}</p>` : "";
        const percent_disc_div = product.old_price ? `<span class="sale_present">${Math.floor((product.old_price - product.price) / product.old_price * 100)}%</span>` : "";
        return `
            <div class="product swiper-slide">
                <div class="icons">
                    <span><i onclick ="addToCart(${product.id}, this)" class="fa-solid fa-cart-shopping"></i></span>
                    <span><a href="item.html?id=${product.id}"><i class="fa-solid fa-eye"></i></a></span>
                    <span><i class="fa-brands fa-whatsapp"></i></span>
                </div>
                ${percent_disc_div}
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
                    ${old_price_pargrahp}
                </div>
            </div>
        `;
    }).join('');

    setupPagination(items.length, itemsPerPage);
};

// Función para configurar la paginación
const setupPagination = (totalItems, itemsPerPage) => {
    const paginationContainer = document.querySelector(".pagination");
    const totalPages = Math.ceil(totalItems / itemsPerPage);
    let paginationHTML = `
        <span class="btn_page prev" onclick="changePage('prev')"><i class="fa-solid fa-backward-step"></i></span>
    `;

    for (let i = 1; i <= totalPages; i++) {
        paginationHTML += `<a href="#"><span class="num_page" onclick="changePage(${i})">${i}</span></a>`;
    }

    paginationHTML += `
        <span class="btn_page next" onclick="changePage('next')"><i class="fa-solid fa-forward-step"></i></span>
    `;

    paginationContainer.innerHTML = paginationHTML;
};

let currentPage = 1;
const changePage = (page) => {
    const totalPages = document.querySelectorAll(".num_page").length;

    if (page === 'prev') {
        if (currentPage > 1) {
            currentPage--;
        }
    } else if (page === 'next') {
        if (currentPage < totalPages) {
            currentPage++;
        }
    } else {
        currentPage = page;
    }

    const searchTerm = localStorage.getItem('searchTerm') ? localStorage.getItem('searchTerm').toLowerCase() : '';
    displaySearchedProducts(searchTerm);
};

// Función para filtrar por categoría
async function filterByCategory(category) {
    const products = await fetchProducts();
    let filteredData;

    if (category.toLowerCase() === 'todos') {
        filteredData = products;
    } else {
        filteredData = products.filter(item => item.category.toLowerCase() === category.toLowerCase());
    }

    paginateProducts(filteredData);
}

// Función para manejar la paginación y mostrar los productos
const paginateProducts = (products, pageNumber = 1, itemsPerPage = 12) => {
    const startIndex = (pageNumber - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const paginatedItems = products.slice(startIndex, endIndex);

    displayItem(paginatedItems, pageNumber, itemsPerPage);
};

// Inicializar la visualización de productos y agregar eventos de búsqueda
async function setupProducts() {
    const searchBar = document.querySelector('.search input[type="search"]');
    const searchButton = document.querySelector('.search button');

    // Manejar el evento de la tecla Enter en la barra de búsqueda
    searchBar.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            handleSearch();
        }
    });

    // Manejar el clic en el botón de búsqueda
    searchButton.addEventListener('click', (e) => {
        e.preventDefault();
        handleSearch();
    });

    // Función para manejar la búsqueda
    function handleSearch() {
        const searchData = searchBar.value.toLowerCase();
        localStorage.setItem('searchTerm', searchData);
        displaySearchedProducts(searchData);
    }

    // Mostrar productos basados en el término de búsqueda inicial
    const initialSearchTerm = localStorage.getItem('searchTerm') ? localStorage.getItem('searchTerm').toLowerCase() : '';
    displaySearchedProducts(initialSearchTerm);
}

// Inicializar los productos al cargar la página
setupProducts();
