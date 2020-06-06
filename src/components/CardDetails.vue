<template>
  <div class="p-2 card-details">
    <b-container>
    <b-row class="justify-content-center">
      <b-col sm="12">
        <b-card no-body class="overflow-hidden">
          <b-row no-gutters>
            <b-col sm="3">
              <b-card-body title="Lessons In PDF File" id="box1">
                <hr />
                <b-card-text>
                  Advance Learning through PDF. We provide it for you.
                </b-card-text>
                <b-button>Get Yours Now</b-button>
                <hr />
                <b-card-text>
                  Proceed to Lessons?
                </b-card-text>
                <b-button>Lessons</b-button>
              </b-card-body>
            </b-col>
            <b-col sm="3">
              <b-card-body title="Opening Hours" id="box2">
                <hr />
                <b-card-text>
                  Monday - Friday (8:00 AM - 5:00 PM)
                </b-card-text>
                <hr />
                <b-card-text>
                  Saturday (9:30 AM - 5:30 PM)
                </b-card-text>
                <hr />
                <b-card-text>
                  Sunday (10:00 AM - 5:00 PM)
                </b-card-text>
                <hr />
              </b-card-body>
            </b-col>
            <b-col sm="6">
              <b-card-body title="Tell Us Your Concern" id="box3">
                <hr />
                <b-row>
                  <b-col sm="6">
                    <b-form-group>
                      <b-form-input placeholder="Name"></b-form-input>
                    </b-form-group>
                    <b-form-group>
                      <b-form-input
                        type="date"
                        placeholder="Date"
                      ></b-form-input>
                    </b-form-group>
                  </b-col>
                  <b-col sm="6">
                    <b-form-group>
                      <b-form-input placeholder="Email"></b-form-input>
                    </b-form-group>
                    <b-form-group>
                      <b-form-input placeholder="Phone"></b-form-input>
                    </b-form-group>
                  </b-col>
                  <b-col sm="12">
                    <b-form-group>
                      <b-form-textarea
                        placeholder="Message"
                        max-rows="3"
                      ></b-form-textarea>
                    </b-form-group>
                  </b-col>
                  <b-col sm="12">
                    <b-form-group>
                      <b-button block variant="info">Send Message</b-button>
                    </b-form-group>
                  </b-col>
                </b-row>
              </b-card-body>
            </b-col>
          </b-row>
        </b-card>
      </b-col>
    </b-row>
   </b-container>
  </div>
</template>

<style lang="scss">

.card-details {
  background: white;
}

#box1 {
  // background: #17242a;
  // color: #6cc4c5;
  border: 1px solid #eee;
  height: 430px;

  .card-text {
    color: teal;
  }
}

#box2 {
  // background: #2b7a77;
  color: teal;
  height: 430px;


  .card-text {
    color:teal;
    font-size: 14px;
  }
}

#box3 {
  // background: #17242a;
  // color: #6cc4c5;
  height: 430px;
  border: 1px solid #eee;


  .card-text {
    color: teal;
  }
}
</style>
