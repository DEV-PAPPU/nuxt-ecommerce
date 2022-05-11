<template>
    <div class="home_sidebar bg-white">
       <div class="gradient__bg px-4 py-3">
         <h1 class="home_sidebar_title">Categories <span class="cat_link">See All ></span></h1>
       </div>
      <div class="p-4">
           <div v-for="cat in cats" :key="cat.id" class="py-1">
          <p>Category name</p>
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
                id: 9
            },
            {
                id: 8            
                },
            {
                id: 5
            },
        ]
    }
  },
})
</script>

<style scoped>
.home_sidebar{
    height: 510px;
    border-radius: 5px;
    box-shadow: 0px 0px 22px -9px #22D859;


}
.home_sidebar_title{
    font-size: 20px;
    font-weight: 700;
}

.cat_link{
    font-size: 15px;
}
</style>
