<template>
  <div>
    <b-carousel
      id="carousel-1"
      v-model="slide"
      :interval="4000"
      controls
      indicators
      background="#ababab"
      img-width="500"
      height="180"
      img-height="180"
      style="text-shadow: 1px 1px 2px #333;"
      @sliding-start="onSlideStart"
      @sliding-end="onSlideEnd"
    >
      <!-- Text slides with image -->
      <b-carousel-slide  class="slider__image" img-src="https://picsum.photos/1024/480/?image=16"
      ></b-carousel-slide>

      <!-- Slides with custom text -->
      <b-carousel-slide class="slider__image" img-src="https://picsum.photos/1024/480/?image=15">
       
      </b-carousel-slide>

      <!-- Slides with image only -->
      <b-carousel-slide class="slider__image" img-src="https://picsum.photos/1024/480/?image=13"></b-carousel-slide>

    </b-carousel>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        slide: 0,
        sliding: null
      }
    },
    methods: {
      onSlideStart(slide) {
        this.sliding = true
      },
      onSlideEnd(slide) {
        this.sliding = false
      }
    }
  }
</script>

<style scoped>
.slider__image{
     height: 355px !important;
     object-fit: cover;
     border-radius: 10px !important;
}
</style>