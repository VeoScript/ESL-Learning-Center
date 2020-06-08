<template>
    <div id="carousel">
        <Carousel3d :autoplay="true" :autoplay-timeout="2400">
            <slide :index="0"><img src="https://3dwarehouse.sketchup.com/warehouse/v1.0/publiccontent/ebe3260c-5f9c-4d6b-ad25-ef4f4afe56e9"/></slide>
            <slide :index="1"><img src="https://i.ytimg.com/vi/394VjIrmgaY/maxresdefault.jpg"/></slide>
            <slide :index="2"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQJ9aqjZLkXyvUlXsZ5urUTMrYJ6SIy8BtG76J88yU2o5Ik-GuP&usqp=CAU"/></slide>
            <slide :index="3"><img src="https://i.pinimg.com/originals/0a/ee/a1/0aeea112717a5e1f4be2a6310d1eb0aa.jpg"/></slide>
            <slide :index="4"><img src="https://d1yjjnpx0p53s8.cloudfront.net/styles/logo-thumbnail/s3/042012/mang-inasal-logo1.jpg?itok=O_ztSdvT"/></slide>
            <slide :index="5"><img src="https://www.designyourway.net/blog/wp-content/uploads/2019/10/s1-3-7.jpg"/></slide>
            <slide :index="6"><img src="https://static1.squarespace.com/static/59765fd317bffcafaf5ff75c/59bcb126d2b857894100e8a9/5bfffe220e2e7287056305a2/1585698927380/7-Eleven-store.jpg?format=1500w"/></slide>
            <slide :index="7"><img src="https://i.ytimg.com/vi/3R25UKb9L_Q/maxresdefault.jpg"/></slide>
        </Carousel3d>
    </div>
</template>

<script>

import { Carousel3d, Slide } from 'vue-carousel-3d';

export default {
    name: 'CarouselOverflow',
    data() {
        return {
        }
    },
    components: {
        Carousel3d,
        Slide
    }
}
</script>

<style scoped>
body {
    background-image: url('https://wallpaperscraft.com/image/butterflies_texture_background_pattern_9681_2560x1600.jpg');
    background-size:cover;
} 
.carousel-3d-slide {
    height: auto !important;
    background-color: rgba(0, 0, 0, 0.25) !important;
}
</style>