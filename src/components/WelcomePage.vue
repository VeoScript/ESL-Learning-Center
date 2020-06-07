<template>
    <div class="frontpage">
        <b-container>
            <b-row class="hero-section text-center ma-3">
                <b-col md="6">
                    <b-img width="400" src="@/assets/photos/logo.png" ></b-img>
                </b-col>
                <b-col lg="6" class="text-center">
                    <h2>Air Class Solution, Inc.</h2>
                    <h4>Learning English Language Through Video Calls</h4>
                    <p>ESL Learning Center Putting Children First. Preparing children for success in life.</p>
                    <b-button pill variant="danger" size="lg">Learn More</b-button>
                </b-col>
            </b-row>
        </b-container>
    </div>
</template>

<style lang="scss" scoped>
.frontpage {
    background-image: url('../assets/photos/bg1.jpg');
    background-repeat: no-repeat;
    background-size: 100% 100%;
    filter: brightness(95%);
    height: 85vh;
    display: flex;
    justify-content: center;
    align-items: center;
}

.hero-section {
    h2 {
        font-weight: bold;
    }
    h2, h4, p {
        color: white;
    }
    p {
        font-size: 15px;
    }
}
</style>