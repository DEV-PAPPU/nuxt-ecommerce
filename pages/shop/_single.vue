<template>
  <div class="text-center max-w-2xl mx-auto py-4">
    <b-row>
      <b-col lg="6">
        <div>
          <img :src="url+product.image" class="img-fluid z-depth-1 border">
        </div>
      </b-col>
      <b-col lg="6" class="mt-5 text-left">
        <h3 class="product__title">{{product.title}}</h3>
        <h3 class="mt-3 price">{{product.price | currency}}</h3>
        <div>
          <h5 class="mt-2">Stock : Instock</h5>
        </div>
        <div class="product__quantity my-4 input-group">
          <span class="input-group-btn">
            <button type="button" @click="qty_decrement" class="quantity-left-minus  btn-number" data-type="minus"
              data-field="">
              <i class="fas fa-minus"></i>
            </button>
          </span>
          <input type="text" id="quantity" name="quantity" class="form-control input-number" v-model="product_qty" min="1"
            max="10">

          <span class="input-group-btn">
            <button type="button" @click="qty_increment" class="-mr-2 quantity-right-plus btn-number" data-type="plus"
              data-field="">
              <i class="fas fa-plus"></i>
            </button>
          </span>
        </div>
        <button type="button" class="btn btn-primary btn-md mr-1 mb-2">Buy now</button>
        <button type="button" @click="addtocart" class="btn btn-light btn-md mr-1 mb-2"><i
            class="fas fa-cart-plus"></i>Add to cart</button>
      </b-col>
    </b-row>

    <div class="tab mt-5 text-left">
      <div>
        <b-card no-body>
          <b-tabs v-model="tabIndex" card>
            <b-tab title="Description" :title-link-class="linkClass(0)">
              <p v-html="product.description"></p>
            </b-tab>
            <b-tab title="Addtional Information" :title-link-class="linkClass(1)">Tab contents 2</b-tab>
            <b-tab title="Reviews" :title-link-class="linkClass(2)">Tab contents 3</b-tab>
          </b-tabs>
        </b-card>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
        url: process.env.url,
        product:{},
        product_qty: 1,
        tabIndex: 0,
    }
  },

  created(){
      const slug = this.$route.params.single;
        this.$axios.get(`product-single/${slug}`).then(res =>{
        this.product = res.data
      })
  },

  methods: {
    addtocart(){
          this.$store.commit('ADD_CART',this.product);
          // this.$toast.success({
          //     title: 'Success!',
          //     message: 'Product Added',
          // });
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


    linkClass(idx) {
        if (this.tabIndex === idx) {
          return ['bg-primary', 'text-white']
        } else {
          return ['bg-light', 'text-info']
        }
    }
  }
}
</script>

<style scoped>
.product__title{
  text-transform: uppercase;
}
.product__quantity{
  width: 200px;
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
</style>