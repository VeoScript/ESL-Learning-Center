<template>
    <b-container>
        <service-page
        ></service-page>
    </b-container>
</template>

<script>
    export default {
        name: 'services',

        components: {
            ServicePage: () => import('@/components/pages/service/ServicePage')
        }
    }
</script>