
<!DOCTYPE html>
<html lang="en">
<head>
    <meta chapperset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="Website that sells cameras">
    <meta name="keywords" content="cameras, sell cameras">
    <meta http-equiv="refresh" content="3600">
    <link rel="stylesheet" href="assets/css/style1.css">
        <!-- box icons  -->
        <link href='https://unpkg.com/boxicons@2.1.2/css/boxicons.min.css' rel='stylesheet'>
    
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />
        <!-- styles  -->
        <link rel="stylesheet" href="assets/css/style.css">
    <title>camera</title>
</head>
<body id="body"> 
    <section id="order" style="display: none;"><center>
        <div class="puper">
        <img src="assets/img/close.png" alt="close" class="close" onclick="cansel()">
    <form action="https://formsubmit.co/seifahmedalaa79@gmail.com" method="POST">
        <input type="hidden" name="_subject" value="New submission!">
        <input type="hidden" name="_captcha" value="false">
        <input type="hidden" name="_next" value="this">
        <input type="text" name="name1" placeholder="name" required class="inp non">
        <label for="inputName">Name</label>
        <input type="text" name="name" placeholder="name" required>
        <label for="inputName">Email</label>
        <input type="email" name="email" placeholder="Email Address" required>
        <label for="inputName">Address</label>
        <input type="text" name="Address" required>
        <label for="inputName">Phone</label>
        <input type="number" name="Phone" required>
        <input class='ddd0 non' name="number_one">
        <input class='ddd1 non' name="number_tow">
        <input class='ddd2 non' name="number_three">
        <input class='ddd3 non' name="number_four">
        <input class='ddd4 non' name="number_five">
        <button type="submit">Send</button>
   </form>

</div></center>
    </section>
    <!--table-->
     <table id="try"></table>
        <!-- HEADER  -->
    <header>
        <!-- NAV  -->
        <div class="nav container">
            <!-- CART ICON  -->
             <span class="material-symbols-outlined" onclick="nt()">
                favorite
                </span></button>
            <i class='bx bx-shopping-bag' id="cart-icon"><p id="demo">0</p>i</i>

            <!-- CART  -->
            <div class="cart hty">
                <h2 class="cart-title">Your Cart</h2>

                <!-- CONTENT  -->
                <div id="cart-content" class="cart-content">


                </div>

                <!-- TOTAL   -->
                <div class="total">
                    <div class="total-title">Total</div>
                    <div class="total-price">$0</div>
                </div>
                <!-- BUY BUTTON  -->
                <button type="button" class="btn-buy buyo" onclick="buy1()">Buy Now</button>
                <!-- CART CLOSE  -->
                <i class='bx bx-x' id="cart-close"></i>
            </div>
        </div>
    </header>


    <!-- SHOP SECTION  -->
    <section class="shop container">

        <!-- CONTENT  -->
        <div class="shop-content">
            <!-- BOX 1 -->
            <div class="product-box">
            <span class="material-symbols-outlined favorite" id="favorite">favorite</span>
                <img src="assets/img/camera..jpg" alt="" class="product-img">
                <h2 class="product-title">Nike Shoes</h2>
                <p class="product-price">$79.5</p>
                <i class='bx bx-shopping-bag add-cart' id="nh"></i>
            </div>
            <!-- BOX 2 -->
            <div class="product-box">
            <span class="material-symbols-outlined favorite" id="favorite">favorite</span>
                <img src="assets/img/camera1..jpg" alt="" class="product-img">
                <h2 class="product-title">BACKPACK</h2>
                <p class="product-price">$59.5</p>
                <i class='bx bx-shopping-bag add-cart' id="nh"></i>
            </div>
            <!-- BOX 3 -->
            <div class="product-box">
            <span class="material-symbols-outlined favorite" id="favorite">favorite</span>
                <img src="assets/img/camera2..jpg" alt="" class="product-img">
                <h2 class="product-title">METAL BOTTLE</h2>
                <p class="product-price">$29.5</p>
                <i class='bx bx-shopping-bag add-cart' id="nh"></i>
            </div>
            <!-- BOX 4 -->
            <div class="product-box">
            <span class="material-symbols-outlined favorite" id="favorite">favorite</span>
                <img src="assets/img/camera3..jpg" alt="" class="product-img">
                <h2 class="product-title">METAL SUNGLASSES</h2>
                <p class="product-price">$105</span>
                <i class='bx bx-shopping-bag add-cart' id="nh"></i>
            </div>
            <!-- BOX 5 -->
            <div class="product-box">
            <span class="material-symbols-outlined favorite" id="favorite">favorite</span>
                <img src="assets/img/camera..jpg" alt="" class="product-img">
                <h2 class="product-title">PS5 Controller</h2>
                <p class="product-price">$95</span>
                <i class='bx bx-shopping-bag add-cart' id="nh"></i>
            </div>
            <!-- BOX 6 -->
            <div class="product-box">
            <span class="material-symbols-outlined favorite" id="favorite">favorite</span>
                <img src="assets/img/camera1..jpg" alt="" class="product-img">
                <h2 class="product-title">Galaxy Z Fold</h2>
                <p class="product-price">$1400</span>
                <i class='bx bx-shopping-bag add-cart' id="nh"></i>
            </div>
            <!-- BOX 7 -->
            <div class="product-box">
            <span class="material-symbols-outlined favorite" id="favorite">favorite</span>
                <img src="assets/img/camera2..jpg" alt="" class="product-img">
                <h2 class="product-title">Nokon Camera</h2>
                <p class="product-price">$1700</span>
                <i class='bx bx-shopping-bag add-cart' id="nh"></i>
            </div>
            <!-- BOX 8 -->
            <div class="product-box">
            <span class="material-symbols-outlined favorite" id="favorite">favorite</span>
                <img src="assets/img/camera3..jpg" alt="" class="product-img">
                <h2 class="product-title">Apple Watch</h2>
                <p class="product-price">$110.5</span>
                <i class='bx bx-shopping-bag add-cart' id="nh"></i>
            </div>
        </div>
    </section><!--cart-->
    <p id="o0">0</p>
    <table id="iop"><td>klfj</td></table><p id="pri"></p>
    <!-- link js  --> 
     <script src="assets/js/javescript.js"></script>
    <script src="assets/js/main.js">
    </script>
        <script src="exo.js"></script>
</section>
</body>
</html>
