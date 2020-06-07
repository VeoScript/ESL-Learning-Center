<template>
  <div id="about">
    <section>
      <vue-horizontal-list :items="items" :options="options">
        <template v-slot:default="{item}">
          <div class="item">
            <b-img :src="item.image" fluid alt="Responsive image"></b-img>
            <h5>{{item.title}}</h5>
            <p>{{item.content}}</p>
          </div>
        </template>
      </vue-horizontal-list>
    </section>
  </div>
</template>

<script>
  import Vue from 'vue'
  import VueHorizontalList from 'vue-horizontal-list';

  export default Vue.extend({
    name: 'About',
    components: {
      VueHorizontalList
    },
    data() {
      return {
        options: {
          responsive: [
            {end: 576, size: 1}, 
            {start: 576, end: 768, size: 2},
            {start: 768, end: 992, size: 3},
            {size: 4}
          ],
          list: {
            // 1200 because @media (min-width: 1200px) and therefore I want to switch to windowed mode
            windowed: 1200,
            
            // Because: #app {padding: 80px 24px;}
            padding: 24
          }
        },  
        items: [
          {
            title: 'Sed non ante non cras amet',
            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas non sagittis leo. Vestibulum sit amet metus nec neque dignissim dapibus.',
            image: 'https://picsum.photos/id/1015/600/600'
          },
          {
            title: 'Curabitur sit amet nunc',
            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec id mollis erat. Aliquam erat volutpat. Nunc erat lacus, rhoncus nec.',
            image: 'https://picsum.photos/id/1019/600/600'
          },
          {
            title: 'Proin pharetra, ante metus',
            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi ac diam ac ex efficitur posuere. Pellentesque cursus pellentesque risus, non.',
            image: 'https://picsum.photos/id/1039/600/600'
          },
          {
            title: 'Cras pharetra non enim a',
            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi malesuada varius nibh, a malesuada nisi feugiat eget. Aenean convallis semper.',
            image: 'https://picsum.photos/id/1042/600/600'
          },
          {
            title: 'Proin vulputate, augue eu accumsan',
            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas fringilla tempor libero sit amet mollis. Praesent quis leo erat. Integer.',
            image: 'https://picsum.photos/id/1044/600/600'
          },
          {
            title: 'Maecenas feugiat magna sapien in',
            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sit amet fringilla ante. Quisque at ipsum non lacus consequat dictum.',
            image: 'https://picsum.photos/id/1057/600/600'
          },
          {
            title: 'Donec commodo sed enim at',
            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc eu condimentum risus. Praesent dignissim, neque nec pharetra vestibulum, libero odio.',
            image: 'https://picsum.photos/id/1063/600/600'
          },
          {
            title: 'In bibendum urna et turpis',
            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse vitae ante volutpat leo vulputate volutpat et sed ex. Vivamus eu.',
            image: 'https://picsum.photos/id/1076/600/600'
          },
          {
            title: 'Phasellus iaculis dignissim erat at',
            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla mattis quam scelerisque, eleifend purus gravida, scelerisque orci. Ut et turpis.',
            image: 'https://picsum.photos/id/1083/600/600'
          },
        ]
      }
    }
  });
</script>

<style scoped>
  #about {
    max-width: 1400px;
    margin-left: auto;
    margin-right: auto;


    padding: 80px 24px;
  }

  @media (min-width: 1200px) {
    #about {
      padding-left: 80px;
      padding-right: 80px;
    }
  }
</style>