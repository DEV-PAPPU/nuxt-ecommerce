<template>
  <div>
    <b-row class="cart_section">
      <b-col lg="8">
        <div class="bg-white p-4 mr-3 div_rounded align-items-center">
          <div v-for="product in products" :key="product.id">
            <div class="flex rounded my-2 px-3 align-items-center cart_item">
              <div class="product_title_image align-items-center">
                <img :src="url+product.image" class="img-fluid image rounded" alt="Responsive image">
                <h5>{{product.title | trim(20)}}</h5>
              </div>
              <h5>{{product.price | currency}}</h5>
              <div class="nfo__quantity border">
                <div class="product__quantity my-4 input-group">
                  <span class="input-group-btn">
                    <button type="button" @click="qty_decrement" class="quantity-left-minus  btn-number"
                      data-type="minus" data-field="">
                      <i class="fas fa-minus"></i>
                    </button>
                  </span>
                  <input type="text" id="quantity" name="quantity" class="form-control input-number"
                    v-model="product_qty" min="1" max="10">

                  <span class="input-group-btn">
                    <button type="button" @click="qty_increment" class="-mr-2 quantity-right-plus btn-number"
                      data-type="plus" data-field="">
                      <i class="fas fa-plus"></i>
                    </button>
                  </span>
                </div>
              </div>
              <div @click="remove(product.id)" class="remove_product">
                <i class="las la-trash"></i>
              </div>
            </div>
          </div>
        </div>
      </b-col>
      <b-col lg="4" class="bg-white cart_info p-5 box__shawow div_rounded">
        <div>
          <h4>You have 10 Products</h4>

          <div class="btn_div">
            <button class="btn btn-primary">More Shop</button>

            <button class="btn btn-primary">Checkout Now</button>
          </div>
        </div>
      </b-col>
    </b-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
        url: process.env.url,
        products: {},
        product_qty: 1,
    }
  },

  created(){
     console.log(this.$store.state.test.cart)
      this.$store.commit('SET_CART')
      this.$axios.get('shop').then(res =>{
                   console.log(res);
                   this.products = res.data
               })
  },

  computed(){
     
  },

  methods: {

      remove(id){
          this.$store.commit('ADD_TO_CART')
      },
    
    async loadProduct() {
        try {
               this.$axios.get('shop').then(res =>{
                   console.log(res);
                   this.products = res.data
               })
             } 

            catch (err) {
                console.log(err);
                this.$toast.error({
                    title: 'Error!',
                    message: 'Someting is wrong!',
                });
            }
     
    },

        qty_increment(){
         
         let data = this.product_qty++;
        //  alert(data)
         console.log(data)

    },
    qty_decrement(){
         
         if(this.product_qty > 1){
             this.product_qty--;
         }
         else{
           this.$toast.error({
              title: 'Error!',
              message: 'Require minimum 1 quantity',
          });
         }

    },
  }
}
</script>

<style scoped>
.remove_product{
    cursor: pointer;
}
.image{
    width: 70px;
}
.flex{
  display: flex;
  align-items: center;
  justify-items: center;
  gap: 1em;
  
}

.product__quantity{
  width: 180px;
}

.btn-number{
  padding:
   5px 14px;
}

.quantity-left-minus{
  background: red;
  color: white;
  border-color: red;
}
.quantity-right-plus{
  background: green;
  color: white;
  border-color: green;
}

.la-trash{
    font-size: 25px;
}

.product_title_image{
    width: 400px;
     gap: 1em;
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
}

.cart_item{
    background: #E0E7FF;
}

.div_rounded{
    border-radius: 10px;
}

.cart_info{
    position: relative;
}
.cart_info{
    height: 400px;
}
</style>
