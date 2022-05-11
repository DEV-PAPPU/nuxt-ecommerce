<template>
    <div class="home_sidebar bg-blue-300 w-4/12">
        <div class="gradient__bg px-4 py-3">
         <h1 class="home_sidebar_title">Todays Deal <span class="cat_link">Hot</span></h1>
       </div>
      <div class="px-2">
           <div v-for="cat in cats" :key="cat.id" class="bg-white p-3 my-3 rounded">
           <div>
               <img src="~/assets/images/slider.png" class="category_img"/>
           </div>
       </div>
      </div>
    </div>
</template>

<script>

export default ({
     data() {
    return {
        cats:[
            {
                id: 1
            },
            {
                id: 3
            },
            {
                id: 2
            },
            {
                id: 4
            },
        ]
    }
  },
})
</script>

<style scoped>

.home_sidebar{
    background: rgb(161, 240, 161);
    height: 510px;
    width: 230px !important;
    overflow-y: hidden;
}

.home_sidebar{
    height: 526px;
    border-radius: 5px;


}
.home_sidebar_title{
    font-size: 20px;
    font-weight: 700;
}

.cat_link{
    font-size: 15px;
}

.category_img{
width: 180px;
border-radius: 5px;
}

</style>
