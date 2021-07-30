<template>
    <div class="service-page">
        <b-container class="carddetails">
            <b-card class="body-card">
                <b-row>
                    <b-col data-aos="flip-left" data-aos-duration="1000">
                       <b-container>
                            <service-horizontal-list :items="services">
                                <template v-slot:default="{item}">
                                    <b-card
                                        :title="item.title"
                                        :img-src="item.image"
                                        img-alt="Image"
                                        img-top
                                        data-aos="flip-left"
                                        data-aos-duration="1000"
                                    >
                                        <b-card-text style="overflow-wrap: break-word;">
                                        {{ item.content }}
                                        </b-card-text>
                                    </b-card>
                                </template>
                            </service-horizontal-list>
                        </b-container> <!-- Home horizontal List for Services -->
                    </b-col>
                </b-row>
            </b-card>
        </b-container>
    </div>
</template>

<script>
    export default {
        name: 'service-page',

        components: {
            ServiceHorizontalList: () => import('vue-horizontal-list')
        },

        data () {
            return {
                services: [
                    {
                        title: 'Proin pharetra',
                        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi ac diam ac ex',
                        image: 'https://picsum.photos/id/1039/600/600'
                    },
                    {
                        title: 'Cras pharetra',
                        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi malesuada ',
                        image: 'https://picsum.photos/id/1042/600/600'
                    },
                    {
                        title: 'Proin vulputate',
                        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas fringilla',
                        image: 'https://picsum.photos/id/1044/600/600'
                    },
                    {
                        title: 'Maecenas feugiat ',
                        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sit amet ',
                        image: 'https://picsum.photos/id/1057/600/600'
                    },
                    {
                        title: 'Donec commodo',
                        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc eu condimentum',
                        image: 'https://picsum.photos/id/1063/600/600'
                    },
                    {
                        title: 'In bibendum u',
                        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse vitae',
                        image: 'https://picsum.photos/id/1076/600/600'
                    },
                    {
                        title: 'Phasellus iac',
                        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla mattis quam ',
                        image: 'https://picsum.photos/id/1083/600/600'
                    },
                ]
            }
        }
    }
</script>

<style lang="scss" scoped>
  .carddetails, .vision-mission{
    background: transparent;
  }
  p {
      line-height: 1.5;
      
  }
  .body-card {
      background: none;
      border: none;
      padding: 20px;
  }
</style>