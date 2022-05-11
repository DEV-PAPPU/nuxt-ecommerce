<template>
  <div class="header">
    <div class="top__header">
     <header class="section-header">
      <section class="header-main border-bottom py-4">
        <div class="main__container">
          <div class="row align-items-center">
            <div class="col-lg-2 col-4">
              <a href="#" class="brand-wrap">
                <img class="logo" src="https://nuxtjs.org/design-kit/colored-text.svg">
              </a> <!-- brand-wrap.// -->
            </div>
            <div class="col-lg-6 col-sm-12">
              <form action="#" class="search" _lpchecked="1">
                <div class="input-group w-100">
                  <input type="text" class="form-control" placeholder="Search">
                  <div class="input-group-append">
                    <button class="btn btn-primary search__icon" type="submit">
                      <i class="fa fa-search"></i>
                    </button>
                  </div>
                </div>
              </form> <!-- search-wrap .end// -->
            </div> <!-- col.// -->
            <div class="col-lg-4 flex align-items-center col-sm-6 col-12">
              <div class="widgets-wrap d-flex align-items-center ga-3 float-md-right">

                <div class="widget-header  mr-3 icontext">
                  <a href="#" class="icon icon-sm rounded-circle div__border p-2 icon"><i
                      class="far fa-heart"></i></a>
                </div>

                <div class="widget-header  mr-3 icontext">
                  <nuxt-link :to="{ name: 'cart'}" class="icon icon-sm rounded-circle div__border p-2 icon"><i
                      class="fas fa-cart-plus"></i></nuxt-link>
                </div>

                <div class="widget-header d-flex icontext">
                  <a href="#" class="icon icon-sm rounded-circle div__border p-2 icon"><i
                      class="far fa-user user__icon"></i></a>
                  <div class="ml-3 text">
                    <span class="text-muted">Welcome!</span>
                    <div>
                      <div v-if="$auth.loggedIn" class="auth-user  flex">
                        <button @click="$auth.logout()" class="">Logout</button>
                        <nuxt-link :to="{ name: 'profile'}" class="">My Account</nuxt-link>
                      </div>

                      <div v-else class="guest flex">
                        <nuxt-link :to="{ name: 'login'}" class="mr-1">Login</nuxt-link> |
                        <nuxt-link :to="{ name: 'register'}" class="ml-1">Rigister</nuxt-link>
                      </div>
                    </div>
                  </div>
                </div>

              </div> <!-- widgets-wrap.// -->
            </div> <!-- col.// -->
          </div> <!-- row.// -->
        </div> <!-- container.// -->
      </section> <!-- header-main .// -->
    </header>
    </div>
    <nav class="primary__bg sticky-top">
      <div class="main__container flex menu_item mx-auto py-4">
        <nuxt-link :to="{ name: 'index'}" class="">Home</nuxt-link>
        <nuxt-link :to="{ name: 'about'}" class=""> About Us</nuxt-link>
        <nuxt-link :to="{ name: 'shop'}" class="">Shop</nuxt-link>
        <nuxt-link :to="{ name: 'categories'}" class="">Categories</nuxt-link>
        <a href="#" class="">Pricing</a>
        <a href="#" class="">Contact</a>
      </div>
    </nav>
  </div>
</template>

<script>

export default ({
     data() {
    return {
      scroll:'',
      visible:''
    }
  },

  mounted(){
        window.addEventListener('scroll', this.scrollListener)
       this.scroll = window.scrollY;
       console.log(this.scroll);

           window.addEventListener('scroll', this.scrollListener)

    },

    beforeDestroy: function () {
    window.removeEventListener('scroll', this.scrollListener)
  },

  methods:{
    home(){
      alert("home")
      this.$router.push('/')
    },

    scrollListener: function (e) {
      this.visible = window.scrollY > 150
    }
    
  }
    
    
})
</script>

<style scoped>
.menu_item a{
  list-style: none;
  padding: 10px 20px;
  text-align: center;
  font-weight: 700;
  transition-duration: 0.6s;
  color: rgb(15, 14, 14);
}

.search__icon{
  background: #35b361 !important;
}

.menu_item a:hover{
  background: #35b361;
  text-decoration: none;
  color: white;
  transition-duration: 0s;

}

.menu_item{
  align-items: center;
    box-shadow: 0px 0px 22px -9px #22D859;

}


.widget-header .icon{
 box-shadow: 0px 0px 22px -11px #22D859;
  
}
.widget-header .icon{
  font-size: 22px;
  padding: 8px 10px !important;
  color: black;
  
}

.user__icon{
  font-size: 20px;
  padding: 5px 5px;
}



.logo{
   cursor: pointer;
   width: 100%;
}
</style>
