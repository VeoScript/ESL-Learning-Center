<template>
    <b-alert show dismissible variant="warning">
        {{ message }}
    </b-alert>
</template>

<script>
    export default {
        name: 'alert',

        props: {
            message: {
                type: String,
                required: true
            }
        }
    }
</script>