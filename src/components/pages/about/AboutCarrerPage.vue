<template>
  <div>
    <vue-good-wizard 
      :steps="steps"
      :onNext="nextClicked" 
      :onBack="backClicked"
      data-aos-duration="1000"
      data-aos="zoom-out"
    >
      <div slot="page1">
        <h4>Step 1</h4>
        <b-row>
            <b-col>
                <b-img thumbnail fluid src="https://picsum.photos/250/250/?image=59" alt="Image 3"></b-img>
            </b-col>
            <b-col>
                <b-img thumbnail fluid src="https://picsum.photos/250/250/?image=59" alt="Image 3"></b-img>
            </b-col>
                <b-col>
                <b-img thumbnail fluid src="https://picsum.photos/250/250/?image=59" alt="Image 3"></b-img>
            </b-col>
        </b-row>
      </div>
      <div slot="page2">
        <h4 class="text-center">Step 2</h4>
         <b-row>
            <b-col>
                <b-img thumbnail fluid src="https://picsum.photos/250/250/?image=59" alt="Image 3"></b-img>
            </b-col>
            <b-col>
                <b-img thumbnail fluid src="https://picsum.photos/250/250/?image=59" alt="Image 3"></b-img>
            </b-col>
                <b-col>
                <b-img thumbnail fluid src="https://picsum.photos/250/250/?image=59" alt="Image 3"></b-img>
            </b-col>
        </b-row>
      </div>
      <div slot="page3">
        <h4 class="text-center">Step 3</h4>
        <b-row>
            <b-col>
                <b-img thumbnail fluid src="https://picsum.photos/250/250/?image=59" alt="Image 3"></b-img>
            </b-col>
            <b-col>
                <b-img thumbnail fluid src="https://picsum.photos/250/250/?image=59" alt="Image 3"></b-img>
            </b-col>
                <b-col>
                <b-img thumbnail fluid src="https://picsum.photos/250/250/?image=59" alt="Image 3"></b-img>
            </b-col>
        </b-row>
      </div>
      <div slot="page4">
        <h4 class="text-center">Step 4</h4>
        <b-row>
            <b-col>
                <b-img thumbnail fluid src="https://picsum.photos/250/250/?image=59" alt="Image 3"></b-img>
            </b-col>
            <b-col>
                <b-img thumbnail fluid src="https://picsum.photos/250/250/?image=59" alt="Image 3"></b-img>
            </b-col>
                <b-col>
                <b-img thumbnail fluid src="https://picsum.photos/250/250/?image=59" alt="Image 3"></b-img>
            </b-col>
        </b-row>
      </div>
    </vue-good-wizard>
  </div>
</template>

<script>
export default {
  name: 'demo',
  data(){
    return {
      steps: [
        {
          label: 'Online Registration',
          slot: 'page1',
        },
        {
          label: 'Select Lessons',
          slot: 'page2',
        },
        {
          label: 'Video Call Teaching Converstation',
          slot: 'page3',
        },
        {
          label: 'Get Certificate',
          slot: 'page4',
        }
      ],
    };
  },
  methods: {
    nextClicked(currentPage) {
      return true; 
    },
    backClicked(currentPage) {
      return true;
    }
  },
};
</script>

<style scoped>
.icon {
    width: 500px;   
}
</style>