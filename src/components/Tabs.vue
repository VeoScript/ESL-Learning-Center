<template>
  <div class="tab-container">
    <b-container>
      <b-row class="justify-content-center">
        <b-col sm="12">
          <b-card title="The Company" class="text-center">
            <b-tabs content-class="mt-4" class="p-0 tab-style" align="center">
              <b-tab title="VISION">
                <blockquote>
                  Stand out in delivering sustainable and holistic English
                  Language learning,<br />
                  able students to speak up in higher order thinking skills at
                  multicultural level.<br />
                  Produce globally competitive and lifelong learners for both
                  child education and continuing professionals.
                </blockquote>
              </b-tab>
              <b-tab title="MISSION">
                <blockquote>
                  We victors the dream and make globally competitive learners
                  and professionals.<br />
                  Unleash the breakthrough English literacy for young
                  learners<br />with the most authentic teaching approach.<br />
                  Real time strengthening of Business and Professionals<br />in
                  doing strong partnership strategically mentored from chosen
                  SME's and partners.<br />
                  At Victor Airclass Solutions "We Outsourced, Deliver,
                  Transform lives in community.
                </blockquote>
              </b-tab>
            </b-tabs>
          </b-card>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<style lang="scss" scoped>

blockquote {
  font-family: "Lobster Two";
  font-size: 20px;
  font-style: italic;
  margin: 0.25em 0;
  padding: 0.35em 40px;
  line-height: 2.45;
  position: relative;
  color: #393536;

  overflow: hidden;
  text-shadow: horizontal-offset vertical-offset blur color;
  // text-shadow: 0px 1px 5px rgb(4, 133, 133);
  // text-shadow: rgb(13, 133, 133) 1px 0 1px;
}

blockquote:before {
  display: block;
  padding-left: 10px;
  content: "\201C";
  font-size: 80px;
  position: absolute;
  left: -20px;
  top: -65px;
  color: #000000;
}

.card {
  background: transparent;
  border: none;
  padding: 50px 0;
}

.tab-container {
  background: #fff;
}
</style>
