fetch("/api/products")
.then(res => res.json())
.then(data => {
    const productList = document.getElementById("product-list");

    data.forEach(product => {
        const div = document.createElement("div");
        div.className = "product";

        div.innerHTML = `
            <img src="${product.image}" />
            <h3>${product.name}</h3>
            <p>₹${product.price}</p>
            <p>${product.description}</p>
            <button>Add to Cart</button>
        `;

        productList.appendChild(div);
    });
});