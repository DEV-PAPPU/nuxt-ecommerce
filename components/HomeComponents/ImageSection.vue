<template>
  <div class="mt-3 home_images">
    <b-row>
      <b-col lg="4" v-for="cat in cats" :key="cat.id" class="rounded">
        <div>
          <img src="~/assets/images/slider.png" class="image" />
        </div>
      </b-col>
    </b-row>
  </div>
</template>

<script>

export default ({
     data() {
    return {
        cats:[
            {
                id: 1,
                name: "Men Fashion"
            },
            {
                id: 3,
             name: "Men Fashion"

            },
            {
                id: 2,
                name: "Men Fashion"

            },
        ]
    }
  },
})
</script>

<style scoped>
.image{
    width: 100%;
}
</style>
