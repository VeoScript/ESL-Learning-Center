<template>
  <div class="mcarousel">
    <b-carousel
    id="carousel-fade"
    style="text-shadow: 0px 0px 2px #000"
  >
    <b-carousel-slide
      img-src="@/assets/photos/vic2.png"
    ></b-carousel-slide>
  </b-carousel>
  </div>
</template>

<style lang="scss">
  .mcarousel{
    margin-top: 50px;

    .marg{
      margin-top: 60px;
      position: absolute;
    }

    .card{
      background: none;
    }
  }
</style>