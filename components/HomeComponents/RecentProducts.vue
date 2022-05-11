<template>
  <div>

  </div>
</template>

<script>

export default {
  name: 'App',
  components: {
  },
   data() {
    return {
        url: process.env.url,
        products:{},
      hooperSettings: {
        centerMode: true,
        autoPlay: true,
        breakpoints: {
          800: {
            centerMode: false,
            itemsToShow: 3
          },
          1000: {
            itemsToShow: 4,
            pagination: 'fraction'
          }
        }
      }
    };
  },

   created(){
        this.$axios.get('shop').then(res =>{
          this.products = res.data
        })
    }
};
</script>