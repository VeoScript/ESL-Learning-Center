<template>
    <div id="carousel">
        <carousel-3d :autoplay="true" :autoplay-timeout="2400">
            <slide :index="0"><img src="https://res.cloudinary.com/ameo/image/upload/v1498843587/kTcPaQR_x77hor.jpg"/></slide>
            <slide :index="1"><img src="https://unsplash.it/400/300?image=456"/></slide>
            <slide :index="2"><img src="https://unsplash.it/400/300?image=222"/></slide>
            <slide :index="3"><img src="https://unsplash.it/400/300?image=1003"/></slide>
            <slide :index="4"><img src="https://unsplash.it/400/300?image=940"/></slide>
            <slide :index="5"><img src="https://unsplash.it/400/300?image=944"/></slide>
            <slide :index="6"><img src="https://source.unsplash.com/mEr7U5yfYt8/400x300"/></slide>
            <slide :index="7"><img src="https://unsplash.it/400/300?image=1041"/></slide>
        </carousel-3d>
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