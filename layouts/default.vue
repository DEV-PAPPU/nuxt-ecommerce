<template>
  <div>
    <Header />
    <div class="body_bg">
      <div class="main__container">
        <div class="py-4 main_content">
          <nuxt/>
        </div>
      </div>
    </div>
    <div class="footer">
      <Footer/>
    </div>
  </div>
</template>
<script>
import Header from '../layouts/partials/header.vue';
import Footer from '../layouts/partials/footer.vue';

export default ({
    components:{Header,Footer},
    methods:{

    },
    mounted(){
       
      console.log("layout mount");
      const token = localStorage.getItem('token')
       if(token){
          this.$store.commit('SET_AUTHENTICATED',true);
       };

       this.$nextTick(() => {
      this.$nuxt.$loading.start()
      setTimeout(() => this.$nuxt.$loading.finish(), 500)
    })
    }
})
</script>

<style>
body{
    overflow-x: hidden;
}

.body_bg{
  background: #e0e7ff;
}

</style>