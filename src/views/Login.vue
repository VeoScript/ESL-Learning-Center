<template>
      <b-modal 
        id="login-modal" 
        title="Login" 
        size="md" 
        hide-footer 
        centered
        content-class="shadow"
    >
        <alert 
            v-show="error"
            :message="`${error}`"
        />

        <b-form @submit.prevent="onClickSubmitForm">
            <b-form-group label="Email">
                <b-form-input
                    v-model.trim="$v.email.$model"
                    :class="{ 'is-invalid' : $v.email.$error, 'is-valid' : !$v.email.$invalid }"
                    :disabled="loading"
                    ref="email"
                ></b-form-input>
                <div class="invalid-feedback feedback">
                    <span v-if="!$v.email.required">Email is required</span>
                    <span v-if="!$v.email.email">Email is invalid.</span>
                </div>
            </b-form-group>
            <b-form-group label="Password">
                <div class="input-group">
                    <input 
                        type="password" 
                        id="password"
                        ref="password"
                        class="form-control" 
                        v-model.trim="$v.password.$model"
                        :class="{ 'is-invalid' : $v.password.$error, 'is-valid' : !$v.password.$invalid }"
                        :disabled="loading"
                    >
                    <div class="input-group-append" @click="onClickToggleShowPassword" style="cursor: pointer;">
                        <i v-if="!showpassword" class="input-group-text">
                            <i class="fa fa-eye-slash"></i>
                        </i>
                        <i v-else class="input-group-text">
                            <i class="fa fa-eye"></i>
                        </i>
                    </div>
                    <div class="invalid-feedback feedback">
                        <span v-if="!$v.password.required">Password is required</span>
                    </div>
                </div>
            </b-form-group>

            <hr>
            <b-row>
                <b-col>
                    <b-button 
                        v-if="!loading"
                        block
                        variant="primary"
                        @click="onClickSubmitForm"
                    >Login</b-button>
                    <b-button 
                        variant="primary" 
                        disabled 
                        block
                        v-else
                    >
                        <b-spinner small type="grow"></b-spinner>
                        Loading...
                    </b-button>
                </b-col>
                <b-col>
                    <b-button 
                        @click="onClickResetForm"
                        block 
                        variant="outline-secondary"
                    >Cancel</b-button>
                </b-col>
            </b-row>

        </b-form>
    </b-modal>
</template>


<script>

    import { auth } from '@/services'

    import { toastAlertStatus } from '@/utils'

    import { required, email } from 'vuelidate/lib/validators'

    export default {
        name: 'login',

        components: {
            Alert: () => import('@/components/mixins/Alert')
        },

        data () {
            return {
                loading: false,
                showpassword: false,
                email: null,
                password: null,
                error: null
            }
        },

        validations: {
            email: {
                required,
                email
            },
            password: {
                required
            }
        },

        methods: {

            onClickToggleShowPassword() {
                let show = document.getElementById('password')
                if(this.showpassword == false) {
                    this.showpassword = true
                    show.type = 'text'
                } else {
                    this.showpassword = false
                    show.type = 'password'
                }
            },

            onClickResetForm () {
                this.loading = false
                this.email = null
                this.password = null
                this.error = null
                this.$v.$reset()
            },

            onClickSubmitForm () {
                this.$v.$touch()

                if (this.$v.$invalid) {
                    this.autoFocusTextFields ()
                } else {

                    this.loading = true

                    const formData = {
                        email: this.email,
                        password: this.password
                    }

                    auth
                     .signInWithEmailAndPassword(formData.email, formData.password)
                     .then(() => {
                        toastAlertStatus('Successfully Login', 'success')
                        this.$bvModal.hide('login-modal')
                        this.onClickResetForm ()
                     })
                     .catch(error => {
                        this.loading = false
                        this.error = error
                        toastAlertStatus(error, 'error')
                     })
                }
            },

            autoFocusTextFields () {
                // 1. Loop the keys
                for (let key in Object.keys(this.$v)) {
                    // 2. Extract the input
                    const input = Object.keys(this.$v)[key];
                    // 3. Remove special properties
                    if (input.includes("$")) return false;

                    // 4. Check for errors
                    if (this.$v[input].$error) {
                        // 5. Focus the input with the error
                        this.$refs[input].focus();

                        // 6. Break out of the loop
                        break;
                    }
                }
            }
        }
    }
</script>