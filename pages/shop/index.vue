<template>
  <div class="">
    <div class="custom_section">
      <div class="custom_model">
        <!-- <h4>hello</h4> -->
      </div>
    </div>
    <b-modal v-if="product" v-model="modalShow" style="width: 800px;">
      <div>
        <div>
          <img :src="url+product.image" class="img-fluid rounded" />
        </div>
        <div>
          <div>
            <h1 class="product_title mt-3">{{product.title}}</h1>
            <h1 class="price">{{product.price | currency}}</h1>
            <button @click="addtocart" class="mt-3 btn btn-primary">Add To Cart</button>
          </div>
        </div>
      </div>
    </b-modal>
    <b-row v-if="products.length" class="text-center">
      <b-col md="3">
        <SideBar />
      </b-col>
      <b-col md="9">
          <div class="row">
          <div class="col-md-4"  v-for="product in products" :key="product.id">
            <div class="">
              <div class="products my-2 produvt_div div__border">
                <nuxt-link :to="'/shop/'+product.slug">
                  <img :src="url+product.image" class="img-fluid product-image">
                </nuxt-link>
                <div class="div_flex py-2">
                  <div class="text-left">
                    <h1 class="price">{{product.price | currency}}</h1>
                    <h1 class="product_title">{{product.title | trim(28)}}</h1>
                  </div>
                  <div @click="showModel(product)" class="quick_view">
                    <i class="las la-eye icon"></i>
                  </div>
                </div>
              </div>
              <div class="product_action">
                <div class="addtocart">
                  <div @click="showModel(product)" class="action_icon_div">
                    <i class="las la-heart"></i> </div>
                  <div @click="showModel(product)" class="action_icon_div">
                    <i class="las la-shopping-cart icon"></i>
                  </div>
                  <div @click="showModel(product)" class="action_icon_div">
                    <i class="las la-shopping-cart icon"></i>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </b-col>
    </b-row>
    <tbody v-else>
      <tr>
        <td colspan="6">
          <h5 class="text-center mt-4 mb-4">No product Found.</h5>
        </td>
      </tr>
    </tbody>
  </div>
</template>
<script>
import SideBar from '~/components/ShopComponents/Sidebar.vue'
export default {
  components:{SideBar},
  data() {
    return {
        url: process.env.url,
        modalShow: false,
        product:{},
        products:{},
    }
  },

  created(){
    this.loadProduct();
  },

  methods: {

    showModel(product){
        this.modalShow = true;
        this.product = product
    },

    addtocart(){
        this.modalShow = false;
        this.$store.commit('ADD_TO_CART',this.product);
        this.$toast.success({
              title: 'Success!',
              message: 'Product Added',
          });
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
     
    }
  }
}
</script>

<style scoped>
.grid{
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 2fr));
}
.products{
  background: white;
   transition: all ease 0.5s;
    border-radius: 4px;
    box-shadow: 0px 4px 4px rgba(26, 196, 139, 0.09)
}
.product-image{
  height: 180px;
  object-fit: cover;
  cursor: pointer;
  
}
.product_title{
  font-size: 16px;
}

.price{
  font-size: 20px;
  color: #000;
}

.produvt_div{
  position: relative;
  overflow: hidden;
}


.product_action .action_icon_div{
  margin-left: 20px;
}
.product_action {
  position: absolute;
  top: 7px;
  right: 23px;
}

.quick_view{
  display: none;
 background: rgb(243, 241, 241);
 padding: 2px 7px;
 border-radius: 50%;
 cursor: pointer;
 border: solid 2px rgb(77, 78, 76);
 transition: all ease 0.3s;
  font-size: 20px;

}
.product_action .action_icon_div{
 background: white;
 padding: 8px 10px;
 margin: 8px 0px;
 border-radius: 50%;
 cursor: pointer;
 box-shadow: 0px 0px 22px -8px #1eb94d;
 transition: all ease 0.3s;

}
.product_action .action_icon_div:hover{
 background: #22D859;
 color: white;
 transition: all 0.2s ease-in-out
}

.product_action .action_icon_div .icon{
font-size: 20px;
text-align: center;
}


.div_flex{
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 5px 15px 0px 10px;
}

.products:hover {
    transform: scale(1.08);
    transition: all 0.4s ease-in-out
}

.custom_model{
  padding: 20px;
  position: fixed;
  top: 17em;
  left: 45em;
  z-index: 6;
}

.custom_section {
    position: relative;
    background: black !important;
    width: 100%;
   }

.modal-dialog {
    max-width: 500px !important;

  }
</style>