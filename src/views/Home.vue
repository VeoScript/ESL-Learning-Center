<template>
  <div>

    <home-front-page 
       :sideImage="frontpage.sideImage"
       :title="frontpage.title"
       :description="frontpage.description"
       :buttonText="frontpage.buttonText"
    ></home-front-page> <!-- First Page to See Front Page -->
    

    <home-vision-mission-page
    ></home-vision-mission-page> <!-- Vision and Mission of the company -->

    <home-connect-page
    ></home-connect-page> <!-- Concern Page like contact information   -->


    <b-container>
      <home-horizontal-list :items="services" class="my-5">
        <template v-slot:default="{item}">
            <b-card
                :title="item.title"
                :img-src="item.image"
                img-alt="Image"
                img-top
                tag="article"
                class="mb-2 item"
                fluid
              >
                <b-card-text style="overflow-wrap: break-word;">
                  {{ item.content }}
                </b-card-text>
              </b-card>
          </template>
      </home-horizontal-list>
    </b-container> <!-- Home horizontal List for Services -->


  </div>
</template>

<script>
  export default {

    name: "Home",

    data () {
      return {
         frontpage: {
          sideImage: require('@/assets/photos/communication.png'),
          title: 'Air Class Solution, Inc.',
          description: 'Learning English Language Through Video Calls. Putting Children First. Preparing children for success in life.',
          buttonText: 'Learn More'
         },
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
    },

    components: {
      HomeFrontPage: () => import('@/components/mixins/FrontPage'),
      HomeVisionMissionPage: () => import('@/components/pages/home/HomeVisionMission'),
      HomeConnectPage: () => import('@/components/pages/home/HomeContactPage'),
      HomeHorizontalList: () => import('vue-horizontal-list')
    }

  }
</script>
