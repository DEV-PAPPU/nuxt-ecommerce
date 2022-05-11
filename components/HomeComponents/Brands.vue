<template>
    <div class="home_hero_brands">
      <div class="pt-4 grid">
           <div v-for="cat in cats" :key="cat.id" class="px-3 pt-3 bg-white rounded">
           <div>
               <img :src="url+cat.image" class="brand_img"/>
           </div>
           <h2 class="mt-2 gray_font cat_name">{{cat.name | trim(20)}}</h2>
       </div>
      </div>
    </div>
</template>

<script>

export default ({
     data() {
    return {
        cats:[],
        url: process.env.url,

    }
    
  },

  created(){
        this.$axios.get(`frontend-home-category`).then(res =>{
        this.cats = res.data
      })
  },


})
</script>

<style scoped>
.brand_img{
    width: 100%;
    border-radius: 2px;
    height: 80px;
    object-fit: cover;
}

.grid{
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(50px, 2fr));
  gap: 10px;
  
}
.cat_name{
    font-size: 14px;
}
.home_hero_brands{
    border-radius: 5px;
    
}
.rounded{
    box-shadow: 0px 0px 22px -20px #22D859;
}
</style>
