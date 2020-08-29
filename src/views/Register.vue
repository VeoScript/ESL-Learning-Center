<template>
    <b-modal 
        id="register-modal" 
        title="Student Registration" 
        size="lg" 
        hide-footer 
        centered
        content-class="shadow"
    >
        <alert 
            v-show="error"
            :message="`${error}`"
        />

        <b-form @submit.prevent="onClickSubmitForm">
            
            <b-row>
                <b-col>
                    <b-form-group
                        label="Firstname"
                    >
                        <b-form-input
                            v-model.trim="$v.firstname.$model"
                            :class="{ 'is-invalid' : $v.firstname.$error, 'is-valid' : !$v.firstname.$invalid }"
                            :disabled="loading"
                        ></b-form-input>
                        <div class="invalid-feedback feedback">
                            <span v-if="!$v.firstname.required">Firstname is required</span>
                            <span v-if="!$v.firstname.minLength">Firstname must have at least {{ $v.firstname.$params.minLength.min }} letters.</span>
                            <span v-if="!$v.firstname.maxLength">Firstname must have at most {{ $v.firstname.$params.maxLength.max }} letters.</span>
                        </div>
                    </b-form-group>
                </b-col>

                <b-col>
                    <b-form-group label="Lastname">
                        <b-form-input
                            v-model.trim="$v.lastname.$model"
                            :class="{ 'is-invalid' : $v.lastname.$error, 'is-valid' : !$v.lastname.$invalid }"
                            :disabled="loading"
                        ></b-form-input>
                        <div class="invalid-feedback feedback">
                            <span v-if="!$v.lastname.required">Lastname is required</span>
                            <span v-if="!$v.lastname.maxLength">Lastname must have at most {{ $v.lastname.$params.maxLength.max }} letters.</span>
                        </div>
                    </b-form-group>
                </b-col>
            </b-row>

            <b-row>
                <b-col>
                    <b-form-group label="Phone">
                        <b-form-input
                            v-model.trim="$v.contact.$model"
                            :class="{ 'is-invalid' : $v.contact.$error, 'is-valid' : !$v.contact.$invalid }"
                            :disabled="loading"
                        ></b-form-input>
                        <div class="invalid-feedback feedback">
                            <span v-if="!$v.contact.required">Phone is required</span>
                        </div>
                    </b-form-group>
                </b-col>
                <b-col>
                    <b-form-group label="Gender">
                        <b-form-select 
                            :options="gender"
                            v-model.trim="$v.genderSelected.$model"
                            :class="{ 'is-invalid' : $v.genderSelected.$error, 'is-valid' : !$v.genderSelected.$invalid }"
                            :disabled="loading"
                        ></b-form-select>
                        <div class="invalid-feedback feedback">
                            <span v-if="!$v.genderSelected.required">Gender is required</span>
                        </div>
                    </b-form-group>
                </b-col>
            </b-row>

            <b-row>
                <b-col>
                    <b-form-group label="Email">
                        <b-form-input
                            v-model.trim="$v.email.$model"
                            :class="{ 'is-invalid' : $v.email.$error, 'is-valid' : !$v.email.$invalid }"
                            :disabled="loading"
                        ></b-form-input>
                        <div class="invalid-feedback feedback">
                            <span v-if="!$v.email.required">Email is required</span>
                            <span v-if="!$v.email.email">Email is invalid.</span>
                        </div>
                    </b-form-group>
                </b-col>
                <b-col>
                    <b-form-group label="Password">
                        <div class="input-group">
                                <input 
                                type="password" 
                                id="password"
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
                                <span v-if="!$v.password.minLength">Password must have at least {{ $v.password.$params.minLength.min }} letters.</span>
                                <span v-if="!$v.password.maxLength">Password must have at most {{ $v.password.$params.maxLength.max }} letters.</span>
                            </div>
                        </div>
                    </b-form-group>
                </b-col>
            </b-row>

            <b-row>
                <b-col>
                    <b-form-group label="Birth date">
                        <b-input-group class="mb-3">
                            <b-form-input
                                v-model.trim="$v.birthdate.$model"
                                type="text"
                                placeholder="YYYY-MM-DD"
                                autocomplete="off"
                                :class="{ 'is-invalid' : $v.birthdate.$error, 'is-valid' : !$v.birthdate.$invalid }"
                                :disabled="loading"
                            ></b-form-input>
                            <b-input-group-append>
                                <b-form-datepicker
                                    v-model="birthdate"
                                    button-only
                                    right
                                    @context="onContext"
                                ></b-form-datepicker>
                            </b-input-group-append>
                        </b-input-group>
                        <div class="invalid-feedback feedback">
                            <span v-if="!$v.birthdate.required">Bithdate is required</span>
                        </div>
                    </b-form-group>
                </b-col>
            </b-row>

            <hr>
            <b-row>
                <b-col>
                    <b-button 
                        v-if="!loading"
                        block
                        variant="primary"
                        @click="onClickSubmitForm"
                    >Register</b-button>
                    <b-button 
                        v-else 
                        variant="primary" 
                        disabled 
                        block
                    >
                        <b-spinner small type="grow"></b-spinner>
                        Loading...
                    </b-button>
                </b-col>
                <b-col>
                    <b-button 
                        block 
                        @click="onClickResetForm"
                        variant="outline-secondary"
                    >Cancel</b-button>
                </b-col>
            </b-row>

        </b-form>
    </b-modal>
</template>

<script>

    import { fb } from '@/services'

    import { toastAlertStatus } from '@/utils'

    import { ADD_STUDENT_MUTATION } from '@/graphql/mutations'

    import { required, minLength, maxLength, email } from 'vuelidate/lib/validators'

    export default {
        name: 'register',

        components: {
            Alert: () => import('@/components/mixins/Alert')
        },

        data () {
            return {
                loading: false,
                firstname: '',
                lastname: '',
                email: '',
                password: '',
                contact: '',
                genderSelected: '',
                gender: [
                    { value: 'Male', text: 'Male' },
                    { value: 'Female', text: 'Female' }
                ],
                birthdate: '',
                formatted: null,
                birthdateSelected: null,
                showpassword: false,
                error: null
            }
        },

        validations: {
            firstname: {
                required,
                minLength: minLength(3),
                maxLength: maxLength(25)
            },
            lastname: {
                required,
                maxLength: maxLength(25)
            },
            email: {
                required,
                email
            },
            contact: {
                required
            },
            genderSelected: {
                required
            },
            birthdate: {
                required
            },
            password: {
                required,
                minLength: minLength(4),
                maxLength: maxLength(25)
            }
        },

        methods: {
            onContext(ctx) {
                // The date formatted in the locale, or the `label-no-date-selected` string
                this.formatted = ctx.selectedFormatted
                // The following will be an empty string until a valid date is entered
                this.birthdateSelected = ctx.selectedYMD
            },

            onClickResetForm () {
                this.firstname = null
                this.lastname = null
                this.email = null
                this.contact = null
                this.birthdate = null
                this.genderSelected  = null
                this.password = null
                this.loading = false
                this.$v.$reset()
            },

            onClickSubmitForm () {
                this.$v.$touch()

                if (!this.$v.$invalid) {

                    this.loading = true

                    const formData = {
                        firstname: this.firstname,
                        lastname: this.lastname,
                        email: this.email,
                        contact: this.contact,
                        birth_date: this.birthdate,
                        gender: this.genderSelected,
                        password: this.password
                    }

                    fb
                     .auth()
                     .createUserWithEmailAndPassword(formData.email, formData.password)
                     .then((firebase) => {
                        this.createStudentInHasura (firebase.uid, formData)
                     })
                     .catch(error => {
                        this.loading = false
                        this.error = error
                        toastAlertStatus(error, 'error')
                     })

                }
            },

            createStudentInHasura (firebase_id, formData) {
                this
                 .$apollo
                 .mutate({
                     mutation: ADD_STUDENT_MUTATION,
                     variables: {
                        firebase_id,
                        firstname: formData.firstname,
                        lastname: formData.lastname,
                        email: formData.email,
                        contact: formData.contact,
                        birth_date: formData.birth_date,
                        gender: formData.gender,
                        password: formData.password
                     }
                 })
                 .then(() => {
                    this.onClickResetForm()
                    this.$bvModal.hide('register-modal')
                    toastAlertStatus('Successfully Registered', 'success')
                 })
                 .catch(error => {
                    this.loading = false
                    this.error = error
                    toastAlertStatus(error, 'error')
                 })
            },

            onClickToggleShowPassword() {
                let show = document.getElementById('password')
                if(this.showpassword == false) {
                    this.showpassword = true
                    show.type = 'text'
                } else {
                    this.showpassword = false
                    show.type = 'password'
                }
            }
        }
    }
</script>