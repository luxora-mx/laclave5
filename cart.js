let cart = [];

function addToCart(name, price) {
    cart.push({ name, price });
    updateCartCount();
    alert("Producto agregado al carrito");
}

function updateCartCount() {
    document.getElementById("cart-count").innerText = cart.length;
}

function openCart() {
    let itemsHTML = "";
    let total = 0;

    cart.forEach((item, index) => {
        total += item.price;
        itemsHTML += `
            <div style="margin-bottom:10px;">
                ${item.name} - $${item.price} MXN
                <button onclick="removeItem(${index})">❌</button>
            </div>
        `;
    });

    document.getElementById("cart-items").innerHTML = itemsHTML;
    document.getElementById("cart-total").innerText = "$" + total + " MXN";
    document.getElementById("cart-modal").style.display = "block";
}

function closeCart() {
    document.getElementById("cart-modal").style.display = "none";
}

function removeItem(index) {
    cart.splice(index, 1);
    openCart();
    updateCartCount();
}
