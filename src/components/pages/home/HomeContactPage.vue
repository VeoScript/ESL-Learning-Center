<template>
  <div class="card-details">
    <b-container>
      <b-row class="justify-content-center">
        <b-col sm="12">
          <b-card>
            <b-row>
              <b-col md="6">
                <b-card-body title="Contact Us" id="box3">
                  <hr />

                  <b-form>
                    <b-row>
                      
                      <b-col sm="12">
                        <b-form-group>
                          <b-form-input 
                            placeholder="Name"
                            v-model.trim="$v.name.$model"
                            :class="{ 'is-invalid' : $v.name.$error, 'is-valid' : !$v.name.$invalid }"
                            :disabled="loading"
                          ></b-form-input>
                          <div class="invalid-feedback feedback">
                              <span v-if="!$v.name.required">Name is required</span>
                              <span v-if="!$v.name.minLength">Name must have at least {{ $v.name.$params.minLength.min }} letters.</span>
                              <span v-if="!$v.name.maxLength">Name must have at most {{ $v.name.$params.maxLength.max }} letters.</span>
                          </div>
                        </b-form-group>
                      </b-col> <!-- Name Text Field and Validations -->

                      <b-col sm="12">
                        <b-form-group>
                          <b-form-input 
                            placeholder="Email"
                            v-model.trim="$v.email.$model"
                            :class="{ 'is-invalid' : $v.email.$error, 'is-valid' : !$v.email.$invalid }"
                            :disabled="loading"
                          ></b-form-input>
                          <div class="invalid-feedback feedback">
                              <span v-if="!$v.email.required">Email is required</span>
                              <span v-if="!$v.email.email">Email is invalid.</span>
                          </div>
                        </b-form-group>
                      </b-col> <!-- Email Text Field and Validations -->

                      <b-col sm="12">
                        <b-form-group>
                          <b-form-input 
                            placeholder="Contact Number"
                            v-model.trim="$v.contact.$model"
                            :class="{ 'is-invalid' : $v.contact.$error, 'is-valid' : !$v.contact.$invalid }"
                            :disabled="loading"
                          ></b-form-input>
                          <div class="invalid-feedback feedback">
                              <span v-if="!$v.contact.required">Contact Number is required</span>
                          </div>
                        </b-form-group>
                      </b-col>  <!-- Phone Number Text Field and Validations -->


                      <b-col sm="12">
                        <b-form-group>
                          <b-form-textarea
                            placeholder="Message"
                            rows="4"
                            v-model.trim="$v.message.$model"
                            :class="{ 'is-invalid' : $v.message.$error, 'is-valid' : !$v.message.$invalid }"
                            :disabled="loading"
                          ></b-form-textarea>
                          <div class="invalid-feedback feedback">
                              <span v-if="!$v.message.required">Your message is required</span>
                          </div>
                        </b-form-group>
                      </b-col> <!-- Message Text Field and Validations -->


                    </b-row>
                    <b-button-group style="width: 100%;">

                        <b-button 
                          variant="outline-secondary"
                          @click="onResetForm"
                        >
                          <b-icon icon="x"></b-icon> Cancel
                        </b-button> <!-- Button Reset -->

                        <b-button 
                          variant="primary"
                          @click="onSubmitForm"
                          v-if="!loading"
                        >
                          <b-icon icon="chat-square-dots-fill"></b-icon> Send
                        </b-button> <!-- Button Submit -->

                        <b-button 
                            v-else 
                            variant="primary" 
                            disabled 
                        >
                            <b-spinner small type="grow"></b-spinner>
                            Loading...
                        </b-button>

                      </b-button-group>

                  </b-form>

                </b-card-body>

              </b-col>
              <b-col md="6">
                <b-card-body title="Connect With Us" id="box1">
                  <hr />
                  <div class="col-lg-12 col-md-12 col-sm-12 contact-w3-agile1" data-aos="flip-right">
                      <p class="contact-agile1"><strong>Phone :</strong> 09153246565</p>
                      <p class="contact-agile1"><strong>Email :</strong> <a href="https://victor@solutions.com">victor@solutions.com</a></p>
                      <p class="contact-agile1"><strong>Address :</strong> Maasin City, Southern Leyte PH</p>

                      <div class="social-bnr-agileits footer-icons-agileinfo">
                        <ul class="social-icons3">
                            <li>
                              <a href="#" target="_blank" class="fa fa-facebook icon-border facebook"></a>
                            </li>
                            <li>
                              <a href="#" target="_blank" class="fa fa-twitter icon-border twitter"></a>
                            </li>
                            <li>
                              <a href="#" target="_blank" class="fa fa-google-plus icon-border googleplus"></a>
                            </li>
                          </ul>
                      </div>
                      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d62832.8836922466!2d124.81454703162481!3d10.176166246458836!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x78195cc21965652c!2sOur%20Lady%20Of%20Assumption%20Parish!5e0!3m2!1sen!2sin!4v1591512506451!5m2!1sen!2sin" width="600" height="450" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
                    </div>
                </b-card-body>
              </b-col>
            </b-row>
          </b-card>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>

  import { toastAlertStatus } from '@/utils'

  import { ADD_INBOX_MUTATION } from '@/graphql/mutations'

  import { required, minLength, maxLength, email } from 'vuelidate/lib/validators'

  export default {
    name: 'home-contact-page',

    // Data initialization
    data () {
      return {
        name: null,
        email: null,
        contact: null,
        message: null,
        loading: false
      }
    },

    // Validation Rules
    validations: {
      name: {
        required,
        minLength: minLength(3),
        maxLength: maxLength(20)
      },
      email: {
        required,
        email
      },
      contact: {
        required
      },
      message: {
        required
      }
    },

    methods: {

      // Submit Function
      onSubmitForm () {
        if (this.$v.$touch()) return

        if (!this.$v.$invalid) {

          this.loading = true
          
          const {
            name,
            email,
            contact,
            message
          } = this.$data

          this
           .$apollo
           .mutate({
             mutation: ADD_INBOX_MUTATION,
             variables : { name, email, contact, message }
           })
           .then(() => {
              this.onResetForm()
              toastAlertStatus('You message successfully sent', 'success')
           })
           .catch(error => {
             toastAlertStatus(error, 'success')
             this.onSubmitForm()
           })
        }
      },

      // Reset Form Function
      onResetForm () {
        this.$v.$reset()
        this.name = null
        this.email = null
        this.contact = null
        this.message = null
        this.loading = false
      }
    }

  }
</script>

<style lang="scss" scoped>

.card {
  border: none;
}
.card-details {
  background: white;
}

#box1 {
  // background: #17242a;
  // color: #6cc4c5;
  border: 1px solid #eee;
  min-height: 430px;

  .card-text {
    padding: 10px;
  }
}

#box2 {
  // background: #2b7a77;
  color: teal;
  min-height: 430px;

  .card-text {
    color: teal;
    font-size: 14px;
  }
}

#box3 {
  // background: #17242a;
  // color: #6cc4c5;
  min-height: 430px;
  border: 1px solid #eee;

  .card-text {
    color: teal;
  }
}


/*--social-icons--*/
ul.social-icons3 {
    display: block;
    padding: 0;
    margin-top: .55em;
}
.social-icons3 li{
	display:inline-block;
}
.social-icons3 li a{  
    display: block;
    height: 30px;
    width: 30px;
    margin-right: 1em;
    -webkit-transition: .5s all;
    transition: .5s all;
    -moz-transition: .5s all;
	margin-right: 1em;
	-webkit-transition: .5s all;
    transition: .5s all;
    -moz-transition: .5s all;
	box-shadow: 0 10px 20px rgba(0, 0, 0, 0.16);
    -webkit-box-shadow: 0 10px 20px rgba(0, 0, 0, 0.16);
    -moz-box-shadow: 0 10px 20px rgba(0, 0, 0, 0.16);
    -o-box-shadow: 0 10px 20px rgba(0, 0, 0, 0.16);
    -ms-box-shadow: 0 10px 20px rgba(0, 0, 0, 0.16);
    line-height: 30px;
	color:#fff;
	text-align:center;
}
.social-icons3 li a.fa.fa-facebook.icon-border.facebook{
	 background:#4D669C;
}
.social-icons3 li a.fa.fa-twitter.icon-border.twitter{
	 background:#1da1f2;
}
.social-icons3 li a.fa.fa-google-plus.icon-border.googleplus{
	 background:#d34836;
}
.social-icons3 li a.fa.fa-rss.icon-border.rss{
	 background:#ee802f;
}
.social-icons3 li a:hover{
	text-decoration:none;
	opacity:0.8;
}

.contact-w3-agile1 iframe {
    width: 100%;
    height: 130px;
    outline: none;
    border: none;
}
</style>
