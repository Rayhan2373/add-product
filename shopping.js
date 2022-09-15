//Display form LocalStorage
const displayLocalStorageCart = ()=>{
    const cart = getCart()
    for(const name in cart){
        displayProduct(name)
    }
}
//Add Product item
const addItem=()=>{
    const nameField = document.getElementById('product-name')
    const name = nameField.value;
    if(!name){
        return;
    }
    //display in the ul 
    displayProduct(name)
    addProductToCart(name)
    //reset name field
    nameField.value = '';
}
//Display Products
const displayProduct=(name)=>{
    const ul = document.getElementById('products')
    const h4= document.createElement('h4')
    h4.innerText = name;
    ul.appendChild(h4)
}
//Get Products
const getCart =()=>{
    const cart = localStorage.getItem('cart')
    let cartObj;
    if(cart){
        cartObj = JSON.parse(cart)
    }
    else{
        cartObj={}
    }
    return cartObj;
}
//Add to Localstorage
const addProductToCart = name =>{
    const cart = getCart()
    cart[name] = 1;
    const cartStringFied = JSON.stringify(cart)
    localStorage.setItem('cart', cartStringFied)
}
const placeOrder=()=>{
    document.getElementById('products').textContent = ''
    localStorage.removeItem('cart')
}
displayLocalStorageCart()