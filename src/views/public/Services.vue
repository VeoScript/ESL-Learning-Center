<template>
    <div>
        <service-front-page 
            :sideImage="frontpage.sideImage"
            :title="frontpage.title"
            :description="frontpage.description"
            :buttonText="frontpage.buttonText"
        ></service-front-page> <!-- First Page to See Front Page -->

        <service-page
        ></service-page>
    </div>
</template>

<script>
    export default {
        name: 'services',

        data () {
            return {
                frontpage: {
                    sideImage: require('@/assets/photos/communication.png'),
                    title: 'Our Services',
                    description: 'Learning English Language Through Video Calls. Putting Children First. Preparing children for success in life.',
                    buttonText: 'Learn More'
                }
            }
        },

        components: {
            ServiceFrontPage: () => import('@/components/mixins/FrontPage'),
            ServicePage: () => import('@/components/pages/service/ServicePage')
        }
    }
</script>