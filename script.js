const products = [
    { "id": 1, "name": "Laptop", "price": 1500, "stock": 5, "image": "https://img.freepik.com/premium-psd/laptop-mock-up_1310-197.jpg" },
    { "id": 2, "name": "Headphones", "price": 100, "stock": 10, "image": "https://img.freepik.com/free-photo/levitating-music-headphones-display_23-2149817601.jpg" },
    { "id": 3, "name": "Keyboard", "price": 50, "stock": 20, "image": "https://img.freepik.com/free-photo/white-keyboard-plant_23-2148708805.jpg" }
];

const productContainer = document.getElementById('product-list');

products.forEach(product => {
    const productCard = `
        <div class="col-md-4 mb-4">
            <div class="card h-100">
                <img src="${product.image}" class="card-img-top" alt="${product.name}">
                <div class="card-body">
                    <h5 class="card-title">${product.name}</h5>
                    <p class="card-text">Price: $${product.price}</p>
                    <p class="card-text">Stock: ${product.stock}</p>
                    <button class="btn btn-primary add-to-cart" data-id="${product.id}">Add to Cart</button>
                </div>
            </div>
        </div>
    `;
    productContainer.innerHTML += productCard;
});
