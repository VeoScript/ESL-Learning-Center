<template>
    <back-to-top bottom="50px" right="50px">
        <b-button variant="primary" class="btn-to-top">
            <i class="fa fa-chevron-up"></i>
        </b-button>
    </back-to-top>
</template>

<script>
    export default {
        
        components: {
            BackToTop: () => import('vue-backtotop')
        }

    }
</script>

<style scoped>
    .btn-to-top {
        width: 60px;
        height: 60px;
        padding: 10px 16px;
        border-radius: 50%;
        font-size: 22px;
        line-height: 22px;
    }
</style>