//open
//const cartIcon = document.querySelector("#cart-icon");
//const cart = document.querySelector(".cart");
var xi = 0;
if (document.readyState == "loading"){document.addEventListener("DOMContentLoaded", s);}
else {s();}
function s() {}
function up() {}
  // Add item to cart
  let AddC = document.querySelectorAll(".favorite");
  AddC.forEach((btn) => {
    btn.addEventListener("click", ha_c);
  });
let iA = [];
function ha_c() {
let product = this.parentElement;let title = product.querySelector(".product-title").innerHTML;
let price = product.querySelector(".product-price").innerHTML;let imgSrc = product.querySelector(".product-img").src;  
  let nTa = {title,price,imgSrc,};
  var AidC = this;
  AidC.innerHTML = `<span onclick='dlt(${xi})'>favorite</span>`;
  if(AidC.style.color != 'red'){  var cBe = cbcj(title, price, imgSrc);
    console.log('j');
    let ndb = document.createElement("div");
    ndb.innerHTML = cBe;
    const cC = cart.querySelector(".cart-content");
    cC.appendChild(ndb);
    up();AidC.style.color = 'red';
    }
  /*if (iA.find((el) => el.title == nTa.title)) {
    alert("This Item Is Already Exist!");
    return;} else {iA.push(nTa);}*/
  // Add product to cart}
  else{console.log(8);xi = 0;AidC.innerHTML = 'favorite';AidC.style.color = 'black';}}
// ============= HTML COMPONENTS =============
var u = [];
if(localStorage.tklk != null){u = JSON.parse(localStorage.tklk)}
function cbcj(title, price, imgSrc) {
  var i;
var newrow = {d:`
    <div class="cart-box">
        <img src=${imgSrc} alt="" class="cart-img1" id='${xi}'>
        <div class="detail-box">
            <div class="cart-product-title1" id='${xi}'>${title}</div>
            <div class="cart-price1" id='${xi}'>${price}</div>
            <button onclick='dlt(${xi})'>d</button>
        </div>
    </div>`}
    u.push(newrow);
    localStorage.setItem('tklk', JSON.stringify(u))
    document.getElementById("o0").innerHTML = xi += 1;
}
function nt(){
  var tr = document.getElementById('try');
  tr.innerHTML = '<img src="assets/img/close.png" alt="close" class="close" onclick="cansel()">' + localStorage.tklk;
tr.style.display = 'flex';
}
function dlt(xi){
  var tr = document.getElementById('try');
  u.splice(xi,1);
  localStorage.tklk = JSON.stringify(u);
  tr.innerHTML = '<img src="assets/img/close.png" alt="close" class="close" onclick="cansel()">' + localStorage.tklk;
}
function cansel(){
  var order = document.getElementById('order');
  order.style.display = 'none';
  var tr = document.getElementById('try');
  tr.style.display = 'none'
}