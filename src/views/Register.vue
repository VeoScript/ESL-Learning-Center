<template>
    <b-modal 
        id="register-modal" 
        title="Student Registration" 
        size="medium" 
        hide-footer 
        centered
        content-class="shadow"
    >
        <b-form @submit.prevent="onClickSubmitForm">
            
            <b-row>
                <b-col>
                    <b-form-group
                        label="Firstname"
                    >
                        <b-form-input
                            v-model.trim="$v.firstname.$model"
                            :class="{ 'is-invalid' : $v.firstname.$error, 'is-valid' : !$v.firstname.$invalid }"
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
                    <b-form-group label="Email">
                        <b-form-input
                            v-model.trim="$v.email.$model"
                            :class="{ 'is-invalid' : $v.email.$error, 'is-valid' : !$v.email.$invalid }"
                        ></b-form-input>
                        <div class="invalid-feedback feedback">
                            <span v-if="!$v.email.required">Email is required</span>
                            <span v-if="!$v.email.email">Email is invalid.</span>
                        </div>
                    </b-form-group>
                </b-col>
                <b-col>
                    <b-form-group label="Contact">
                        <b-form-input
                            v-model.trim="$v.contact.$model"
                            :class="{ 'is-invalid' : $v.contact.$error, 'is-valid' : !$v.contact.$invalid }"
                        ></b-form-input>
                        <div class="invalid-feedback feedback">
                            <span v-if="!$v.contact.required">Contact is required</span>
                        </div>
                    </b-form-group>
                </b-col>
            </b-row>

            <b-row>
                <b-col>
                    <b-form-group label="Gender">
                        <b-form-select 
                            :options="gender"
                            v-model.trim="$v.genderSelected.$model"
                            :class="{ 'is-invalid' : $v.genderSelected.$error, 'is-valid' : !$v.genderSelected.$invalid }"
                        ></b-form-select>
                        <div class="invalid-feedback feedback">
                            <span v-if="!$v.genderSelected.required">Gender is required</span>
                        </div>
                    </b-form-group>
                </b-col>
                <b-col>
                    <b-form-group label="Birth date">
                        <b-input-group class="mb-3">
                            <b-form-input
                                v-model.trim="$v.birthdate.$model"
                                type="text"
                                placeholder="YYYY-MM-DD"
                                autocomplete="off"
                                :class="{ 'is-invalid' : $v.birthdate.$error, 'is-valid' : !$v.birthdate.$invalid }"
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
                        block
                        variant="primary"
                        @click="onClickSubmitForm"
                    >Register</b-button>
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

    import { toastAlertStatus } from '@/utils'

    import { required, minLength, maxLength, email } from 'vuelidate/lib/validators'

    export default {
        name: 'register',

        data () {
            return {
                loading: false,
                firstname: '',
                lastname: '',
                email: '',
                contact: '',
                genderSelected: '',
                gender: [
                    { value: 'Male', text: 'Male' },
                    { value: 'Female', text: 'Female' }
                ],
                birthdate: '',
                formatted: null,
                birthdateSelected: null
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
                //this.$bvModal.hide('register-modal')
                this.$v.$reset()
            },

            onClickSubmitForm () {
                this.$v.$touch()

                if (!this.$v.$invalid) {
                    
                    const { 
                        firstname,
                        lastname,
                        email,
                        contact,
                        birthdate,
                        genderSelected
                    } = this.$data

                    

                   this.onClickResetForm()
                }
            }
        }
    }
</script>