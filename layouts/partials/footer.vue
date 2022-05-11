<template>
 <div>
    <div class="bg py-5">
    <div class="main__container">
      <b-row>
        <b-col lg="4">
          <div class="logo">
            <img src="https://nuxtjs.org/design-kit/colored-text.svg" alt="" srcset="">
            <h6>Ecommerce Store</h6>
          </div>
        </b-col>
        <b-col lg="3">
          <h2 class="title">CONTACT INFO</h2>
          <div class="shop_info">
            <p class="label">Address:</p>
            <p>Chandra Kaliakair, Gazipur 1750</p>
          </div>
          <div class="shop_info">
            <p class="label">Phone:</p>
            <p>01629773987</p>
          </div>
          <div class="shop_info">
            <p class="label">Email:</p>
            <p>Ecom-shop@gmail.com</p>
          </div>
        </b-col>
        <b-col lg="3">
          <h2 class="title">CUSTOMER SUPPORT</h2>
          <div class="my_account">
            <a href="#">Login</a>
            <a href="#">Order History</a>
            <a href="#">My Wishlist</a>
            <a href="#">Track Order</a>
          </div>

        </b-col>
        <b-col lg="2">
          <h2 class="title">MY ACCOUNT</h2>
          <div class="my_account">
            <a href="#">Login</a>
            <a href="#">Order History</a>
            <a href="#">My Wishlist</a>
            <a href="#">Track Order</a>
          </div>
        </b-col>
      </b-row>
    </div>
  </div>
   <div class="footer_bottom py-2">
     <b-row class="main__container">
       <b-col lg="4"><p class="footer_text">Copyright © 2021 DevpappuShop.com</p></b-col>
       <b-col lg="4"></b-col>
       <b-col lg="4" align-self="end"> <img src="https://www.booklifebd.com/public/uploads/all/dIEPOwiWojbpZ8xhL1YUOlZ0vRiN0CPvWuKKQREX.jpg"  class="img" alt=""></b-col>
     </b-row>
   </div>
 </div>
</template>

<style scoped>
.bg{
  background: #111723;
  padding: 60px 0px;
}
.title{
  color: white;
  font-size: 1em;
}

.shop_info .label{
  color: white;
}
.shop_info p{
  color: #f2f3f8;
}
.my_account a{
  display: block;
  margin-bottom: 7px;
  color: #f2f3f8;
  text-decoration: none;
}

.footer_bottom{
  background: #000000;
}
.footer_text{
  color: white;
}
.img{
  width: 220px;
}
</style>