<template>
    <div class="hero">
        <b-container>
            <b-row class="text-center d-flex align-items-center justify-content-center">
                <b-col md="12">
                    <b-img width="300px;" class="mt-4" src="@/assets/photos/logo.png" ></b-img>
                </b-col>
                <b-col md="12">
                    <h2>Air Class Solution, Inc.</h2>
                    <h3>Learning English Language Through Video Calls</h3>
                    <p>ESL Learning Center Putting Children First. Preparing children for success in life.</p>
                    <b-button pill variant="danger" size="lg">Get Started</b-button>
                </b-col>
            </b-row>
        </b-container>
    </div>
</template>

<style lang="scss" scoped>

.hero {
     background: 
      radial-gradient(circle at 50% 0,
        rgba(255, 75, 75, 0.5),
        rgba(248, 108, 108, 0) 70.71%),
      radial-gradient(circle at 6.7% 75%,
        rgba(70, 70, 255, 0.5),
        rgba(66, 66, 255, 0) 70.71%),
      radial-gradient(circle at 93.3% 75%,
        rgb(18, 223, 223),
        rgba(0,255,0,0) 70.71%) beige;
    
    height: 90vh;
}

h2 {
    font-weight: bold;
}

h2, h3, p {
    color: white;
}

p {
    font-weight: lighter;
    font-size: 15px;
}

</style>