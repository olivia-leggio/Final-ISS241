let Cart = window.localStorage;

//adds an item to the cart
function addCart(item, info) {
    //alerts if already existing in cart
    if(Cart.getItem(item)) {
        window.alert(item + " is already in your cart!");
    }
    else {
        Cart.setItem(item, info);
        console.log("adding " + item + " to cart");
    }
}

//removes and item from the cart
function removeCart(item) {
    Cart.removeItem(item);
    console.log("removing " + item + " from cart");
    location.reload();
}

//returns an array of all keys in the cart
function loadCart() {
    return Object.keys(Cart);
}

//returns a specific item
function getItem(item) {
    return Cart.getItem(item);
}

//performs checkout operations
//removes all items from cart
function checkout() {
    Cart.clear();
    console.log("cart cleared");
}
/*
function addItem(item, info) {
    addCart(item, info);
    let popup = document.getElementById("popup");
    popup.classList.add("shown");
}
*/