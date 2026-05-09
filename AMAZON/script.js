let cart = [];
let total = 0;

function toggleProducts() {

    let products = document.getElementById("dressProducts");

    if(products.style.display === "flex"){
        products.style.display = "none";
    }
    else{
        products.style.display = "flex";
    }
}

function addToCart(productName, price){

    cart.push(productName);

    total += price;

    updateCart();

}

function updateCart(){

    let cartItems = document.getElementById("cartItems");

    let totalPrice = document.getElementById("total");

    cartItems.innerHTML = "";

    cart.forEach(item => {

        let li = document.createElement("li");

        li.innerText = item;

        cartItems.appendChild(li);

    });

    totalPrice.innerText = total;

}

/* SIGN IN POPUP */

function openPopup(){

    document.getElementById("signinPopup").style.display = "block";

}

function closePopup(){

    document.getElementById("signinPopup").style.display = "none";

}

/* SEARCH */

const searchInput = document.querySelector(".search-input");

searchInput.addEventListener("keyup", function(){

    let filter = searchInput.value.toLowerCase();

    let products = document.querySelectorAll(".product-card");

    products.forEach(product => {

        let text = product.innerText.toLowerCase();

        if(text.includes(filter)){
            product.style.display = "block";
        }
        else{
            product.style.display = "none";
        }

    });

});