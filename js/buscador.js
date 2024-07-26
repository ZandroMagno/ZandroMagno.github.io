// index.js

// Función para manejar la búsqueda en index.html y redirigir a all_products.html
function handleSearchRedirection() {
    const searchBar = document.querySelector('.search input[type="search"]');
    const searchButton = document.querySelector('.search button');

    // Manejar el evento de la tecla Enter en la barra de búsqueda
    searchBar.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            redirectToCatalog();
        }
    });

    // Manejar el clic en el botón de búsqueda
    searchButton.addEventListener('click', (e) => {
        e.preventDefault();
        redirectToCatalog();
    });

    function redirectToCatalog() {
        const searchData = searchBar.value.toLowerCase();
        localStorage.setItem('searchTerm', searchData);
        window.location.href = 'all_products.html';
    }
}

// Inicializar la búsqueda
handleSearchRedirection();
