let cart = [];
let total = 0;

function addToCart(productId) {
    // Simulando a busca do preço no banco de dados (SQL).
    let price = 50;

    cart.push({ productId, price });
    total += price;

    // Atualiza o carrinho no HTML.
    updateCart();
}

function updateCart() {
    let cartItems = document.getElementById("cart-items");
    cartItems.innerHTML = "";
    cart.forEach(item => {
        let li = document.createElement("li");
        li.textContent = `Produto ${item.productId} - R$${item.price}`;
        cartItems.appendChild(li);
    });

    let cartTotal = document.getElementById("cart-total");
    cartTotal.textContent = total;
};     