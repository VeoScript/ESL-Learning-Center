<template>
  <div class="p-2">
    <b-row class="justify-content-center">
      <b-col sm="11">
        <b-card title="The Company" class="text-center">
          <b-tabs content-class="mt-4" class="p-0" align="center">
            <b-tab title="VISION">
              <p id="txtvision">
                <em class="quote">“</em> Stand out in delivering sustainable and holistic English
                Language learning,<br />
                able students to speak up in higher order thinking skills at
                multicultural level.<br />
                Produce globally competitive and lifelong learners for both
                child education and continuing professionals.
              </p>
            </b-tab>
            <b-tab title="MISSION">
              <p id="txtmission">
               <em class="quote">“</em> We victors the dream and make globally competitive learners and
                professionals.<br />
                Unleash the breakthrough English literacy for young learners<br />with
                the most authentic teaching approach.<br />
                Real time strengthening of Business and Professionals<br />in
                doing strong partnership strategically mentored from chosen
                SME's and partners.<br />
                At Victor Airclass Solutions "We Outsourced, Deliver, Transform
                lives in community".
              </p>
            </b-tab>
          </b-tabs>
        </b-card>
      </b-col>
    </b-row>
  </div>
</template>

<style lang="scss">
#txtvision {
  font-size: 20px;
  padding: 20px;
  font-style: italic;
}

#txtmission {
  font-size: 20px;
  padding: 20px;
  font-style: italic;
}
.quote {
  font-size: 90px;
  position: absolute;
  left: 20px;
  top: 90px;
}
</style>
