<template>
  <div>
    <b-carousel
      id="carousel-1"
      controls
      indicators
      img-width="1024"
      img-height="480"
      style="text-shadow: 1px 1px 2px #333;"
      sliding-start="onSlideStart"
      sliding-end="onSlideEnd"
    >
      <b-carousel-slide>
        <template v-slot:img>
          <img
            class="d-block img-fluid w-100"
            width="1024"
            height="300"
            src="@/assets/photos/vic1.png"
            alt="image slot"
          />
        </template>
      </b-carousel-slide>

      <b-carousel-slide>
        <template v-slot:img>
          <img
            class="d-block img-fluid w-100"
            width="1024"
            height="300"
            src="@/assets/photos/vic2.png"
            alt="image slot"
          />
        </template>
      </b-carousel-slide>
    </b-carousel>
  </div>
</template>

<style>
.carousel {
  margin-top: 55px;
}
</style>
