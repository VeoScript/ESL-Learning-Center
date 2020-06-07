<template>
  <div id="about">
    <section>
      <vue-horizontal-list :items="items">
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
      </vue-horizontal-list>
    </section>
  </div>
</template>

<script scoped>
  import Vue from 'vue'
  import VueHorizontalList from 'vue-horizontal-list';

  export default Vue.extend({
    name: 'About',
    components: {
      VueHorizontalList
    },
    data() {
      return {
        items: [
          {
            title: 'Jerome Villaruel',
            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas non sagittis leo.',
            image: 'https://avatars0.githubusercontent.com/u/26340308?s=460&u=bfa907f2fee8b19b3d7d9ebde07cfe0f33215b19&v=4'
          },
          {
            title: 'Joshua Galit',
            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec id mollis erat.',
            image: 'https://avatars0.githubusercontent.com/u/38458781?s=460&u=d2e21173ef861da3d8ca3a292398cbc0c6f7c000&v=4'
          },
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
  });
</script>

<style scoped>
  #about {
    max-width: 100%;
    margin-left: auto;
    margin-right: auto;
    padding: 80px 24px;
  }

  .card {
    border-bottom-left-radius: 5px;
    border-bottom-right-radius: 5px;
  }

  @media (min-width: 1200px) {
    #about {
      padding-left: 80px;
      padding-right: 80px;
    }
  }
</style>