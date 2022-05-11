<template>
  <div>
      <div class="title">
          <h3 class="mb-3">Top 10 Brands</h3>
      </div>
    <b-row class="mt-2">
      <b-col lg="6" v-for="cat in cats" :key="cat.id" class="my-2">
        <div class="flex_between category_item px-5 py-3">
          <div class="content flex">
            <img :src="url+cat.image" class="img" alt="">
            <p class="item_name mt-3">{{cat.name}}</p>
          </div>
          <div class="icon mt-2">
            <i class="las la-chevron-right icon"></i>
          </div>
        </div>
      </b-col>
    </b-row>
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

.title{
    border-width: 60px;
    border-bottom: solid 5px #7c7b7b;
    margin-top: 10px;
}
.img{
    width: 100px;
        border-radius: 5px;

}
.flex{
    display: flex;
    align-items: center;
    gap: 1em;
    justify-self: center;
}

.category_item{
    background: white;
    border-radius: 5px;
    box-shadow: 0px 0px 22px -15px #22D859;
    border-bottom: solid 5px green;

}

.item_name{
    font-size: 1.2em;
    font-weight: 700;
}

.icon{
    font-size: 1.4em;
}

.flex_between{
    display: flex;
    justify-content: space-between;
    align-items: center;
    justify-items: center;
}
</style>