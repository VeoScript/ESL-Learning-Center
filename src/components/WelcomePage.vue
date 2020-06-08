<template>
    <div class="frontpage">
        <b-container>
            <b-row class="d-flex justify-content-center align-items-center hero-section text-center ma-3">
                <b-col md="6">
                    <b-img class="side-image" width="180" src="@/assets/photos/communication.png" ></b-img>
                </b-col>
                <b-col lg="6" class="text-center">
                    <h2>Air Class Solution, Inc.</h2>
                    <p>Learning English Language Through Video Calls. Putting Children First. Preparing children for success in life.</p>
                    <b-button pill variant="danger" size="lg">Learn More</b-button>
                </b-col>
            </b-row>
        </b-container>
    </div>
</template>

<style lang="scss" scoped>
.frontpage {
    background-image: url('../assets/photos/bg.png');
    background-repeat: no-repeat;
    background-size: 100% 100%;
        // filter: brightness(95%);
    padding: 100px 0;
    display: flex;
    justify-content: center;
    align-items: center;
}

.hero-section {
    h2 {
        font-weight: bold;
    }
    h2, p {
        color: white;
    }
    p {
        font-size: 15px;
    }
}

@media only screen and (min-width: 1000px) {
  .hero-section {   
    .side-image {
        width: 400px;
    }
  }
}

@media only screen and (max-width: 1000px) {
  .hero-section {
    h2 {
        font-size: 20px;
    }
    p {
        font-size: 13px;
    }
  }
}
</style>