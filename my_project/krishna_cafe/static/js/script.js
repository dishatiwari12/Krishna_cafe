let cart= []

function addToCart(name,price){

    let index = {
        name:name,
        price:price,
        quantity:1,
    };
    cart.push(index);

    localStorage.setItem("mycart", JSON.stringify(cart)); //ye cart me jo item ayenge unhe text format me localstorage me save karega

    alert(name+" added to cart.");
}

console.log(cart)

let savedCart = JSON.parse(localStorage.getItem("mycart"));//ye usi text me save data ko array me wapas nikalega

console.log(savedCart)
let cartItemsDiv = document.getElementById("cart-items");

let totalBillDiv = document.getElementById("total-bill");

let totalBill = 0;

for (let index in savedCart){

    totalBill+=savedCart[index].price * savedCart[index].quantity //total billl ke liye

    cartItemsDiv.innerHTML += 
    `<div class= "cart-items">
    <h3>${savedCart[index].name}</h3> 
   <p>${savedCart[index].price} rs.</p>

   <button onclick="decresequantity(${index})">-</button>
   <span>${savedCart[index].quantity}</span>
   <button onclick="increasequantity(${index})">+</button>
    
    </div><br>`
    ;
}

totalBillDiv.innerHTML = "Total bill : " + totalBill + "rs."; //ye line total bill show karengi.

function increasequantity(index){
    savedCart[index].quantity+=1;
    localStorage.setItem("mycart", JSON.stringify(savedCart));
    location.reload()
}

function decresequantity(index){
    savedCart[index].quantity-=1;
    localStorage.setItem("mycart", JSON.stringify(savedCart));
    location.reload()
}

function checkout(){
    alert("Order Placed successfully. Thank You visit again!")
}


