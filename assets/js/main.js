//open
const cartIcon = document.querySelector("#cart-icon");
const cart = document.querySelector(".cart");
const closeCart = document.querySelector("#cart-close");
let x = 0;
cartIcon.addEventListener("click", () => {
  cart.classList.add("active");
});

closeCart.addEventListener("click", () => {
  cart.classList.remove("active");
});

// Start when the document is ready
if (document.readyState == "loading") {
  document.addEventListener("DOMContentLoaded", start);
} else {
  start();
}

// =============== START ====================
function start() {
  addEvents();
}

// ============= UPDATE & RERENDER ===========
function update() {
  addEvents();
  updateTotal();
}

// =============== ADD EVENTS ===============
function addEvents() {
  // Remove items from cart
  let cartRemove_btns = document.querySelectorAll(".cart-remove");
  console.log(cartRemove_btns);
  cartRemove_btns.forEach((btn) => {
    btn.addEventListener("click", handle_removeCartItem);
  });

  // Change item quantity
  let cartQuantity_inputs = document.querySelectorAll(".cart-quantity");
  cartQuantity_inputs.forEach((input) => {
    input.addEventListener("change", handle_changeItemQuantity);
  });

  // Add item to cart
  let addCart_btns = document.querySelectorAll(".add-cart");
  addCart_btns.forEach((btn) => {
    btn.addEventListener("click", handle_addCartItem);
  });

  // Buy Order
  const buy_btn = document.querySelector(".btn-buy");
  buy_btn.addEventListener("click", handle_buyOrder);
}
//var Productpackaging = [];

// ============= HANDLE EVENTS FUNCTIONS =============
let itemsAdded = [];

function handle_addCartItem() {
  if(itemsAdded.length != 4){}else{
    alert('cant sell bag 4 camert')
  itemsAdded.replace('hh')}
  let product = this.parentElement;
  let title = product.querySelector(".product-title").innerHTML;
  let price = product.querySelector(".product-price").innerHTML;
  let imgSrc = product.querySelector(".product-img").src;
  let inp4 = document.querySelector('.cart-quantity');
  let table = document.getElementById("outputTable");
  document.getElementById("demo").innerHTML = x += 1;
  var j = [];
  let NewProduct = {
    title,
    price,
    
  }  
  let newToAdd = {
    title,
    price,
    imgSrc,
  }
  j.push(NewProduct);
  // add NewProduct to Productpackaging
  // save after restert and close
  // handle item is already exist
  if (itemsAdded.find((el) => el.title == newToAdd.title)) {
    alert("This Item Is Already Exist!");
    return;
  } else {
    //itemsAdded.push(newToAdd);
    itemsAdded.push(NewProduct);
  }

  // Add product to cart
  let cartBoxElement = CartBoxComponent(title, price, imgSrc);
  let newNode = document.createElement("div");
  newNode.innerHTML = cartBoxElement;
  const cartContent = cart.querySelector(".cart-content");
  cartContent.appendChild(newNode);

  update();
}

function handle_removeCartItem() {
  this.parentElement.remove();
  itemsAdded = itemsAdded.filter(
    (el) =>
      el.title !=
      this.parentElement.querySelector(".cart-product-title").innerHTML
  );

  update();
}

function handle_changeItemQuantity() {
  if (isNaN(this.value) || this.value < 1) {
    this.value = 1;
  }
  this.value = Math.floor(this.value); // to keep it integer

  update();
}

function handle_buyOrder() {
  if (itemsAdded.length <= 0) {
    alert("There is No Order to Place Yet! \nPlease Make an Order first.");
    return;}
  var cartu = document.querySelector('.cart-product-title');
  var order = document.querySelector('#order');
  order.style.display = 'flex';
  const cartContent = cart.querySelector(".cart-content");
  cartContent.innerHTML = "";
  itemsAdded = [];

  update();
}

// =========== UPDATE & RERENDER FUNCTIONS =========
var ty = [];
function updateTotal() {
  let cartBoxes = document.querySelectorAll(".cart-box");
  const totalElement = cart.querySelector(".total-price");
  let total = 0;
  cartBoxes.forEach((cartBox) => {
    let priceElement = cartBox.querySelector(".cart-price");
    let price = parseFloat(priceElement.innerHTML.replace("$", ""));
    let quantity = cartBox.querySelector(".cart-quantity").value;
   // var q = {l:quantity,};
    //ty.push(q);
    total += price * quantity;
  });

  // keep 2 digits after the decimal point
  total = total.toFixed(2);
  // or you can use also
  // total = Math.round(total * 100) / 100;

  totalElement.innerHTML = "$" + total;
}

// ============= HTML COMPONENTS =============
function CartBoxComponent(title, price, imgSrc) {
  return `
    <div class="cart-box">
        <img src=${imgSrc} alt="" class="cart-img">
        <div class="detail-box">
            <div class="cart-product-title">${title}</div>
            <div class="cart-price">${price}</div>
            <input type="number" value="1" class="cart-quantity dd${x}">
        </div>
        <!-- REMOVE CART  -->
        <i class='bx bxs-trash-alt cart-remove'></i>
    </div>`;
}
function buy1(){
  var inp = document.querySelector('.inp');
  inp.value = JSON.stringify(itemsAdded);
}
var buyo = document.querySelector('.buyo');
buyo.addEventListener('click', function(){
 // localStorage.setItem('t', JSON.stringify(ty))
 var ddd0 = document.querySelector('.ddd0');var ddd1 = document.querySelector('.ddd1');
 var ddd2 = document.querySelector('.ddd2');var ddd3 = document.querySelector('.ddd3');
 var ddd4 = document.querySelector('.ddd4');var ddd5 = document.querySelector('.ddd5');
 //
 var dd1 = document.querySelector('.dd1');var dd2 = document.querySelector('.dd2');
 var dd4 = document.querySelector('.dd4');var dd3 = document.querySelector('.dd3');
 var dd5 = document.querySelector('.dd5');
 ddd0.value = dd1.value;
 ddd1.value = dd2.value;
 ddd2.value = dd3.value;
 ddd3.value = dd4.value;
 ddd4.value = dd5.value;
})