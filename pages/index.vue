<template>
  <div>
    <b-row class="hero_section">
      <b-col lg="3" class="category_section">
        <LeftCategory />
      </b-col>
      <b-col lg="9" class="slider_section">
        <Slider />
        <Brands />
      </b-col>
    </b-row>
    <div>
      <ImageSection/>
    </div>
    <!-- <Tutorial /> -->
    <div>
      <Top10Brands/>
    </div>
    <div class="mt-5">
      <Top10Categories/>
    </div>
  </div>
</template>

<script>
import LeftCategory from '~/components/HomeComponents/LeftCategory.vue'
import Slider from '~/components/HomeComponents/Slider.vue'
import Brands from '~/components/HomeComponents/Brands.vue'
import RightProducts from '~/components/HomeComponents/RightProducts.vue'
import Top10Categories from '~/components/HomeComponents/Top10Categories.vue'
import Top10Brands from '~/components/HomeComponents/Top10Brands.vue'
import ImageSection from '~/components/HomeComponents/ImageSection.vue'
export default {
    components:{LeftCategory,
     Slider,
     RightProducts, 
     Brands, 
     Top10Categories, 
     Top10Brands,
     ImageSection
    },
  data() {
    return {
      date: new Date(),
    }
  },
}
</script>

<style scoped>
/* .hero_section{
  display: flex;
  gap: 2em;
}
.slider_section{
  width: 1100px;
}
.category_section{
  width: 280px;
} */
</style>