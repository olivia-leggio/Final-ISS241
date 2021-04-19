Cart = window.localStorage;

//adds an item to the cart
function addCart(item, info) {
    //updates if already existing in cart
    if(Cart.getItem(item)) {
        let oldQuantity = Cart.getItem(item)[0];
        let newQuantity = oldQuantity + info[0];
        let array = Cart.getItem(item)[1];
        removeCart(item);

        Cart.setItem(item, [newQuantity, array]);
    }
    Cart.setItem(item, info);
    console.log("adding " + item + " to cart");
    console.log(JSON.parse(info[1]));
}

//removes and item from the cart
function removeCart(item) {
    Cart.removeItem(item);
    console.log("removing " + item + " from cart");
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