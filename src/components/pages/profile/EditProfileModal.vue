<template>
    <b-modal 
        id="edit-profile-modal" 
        title="Update Profile" 
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
            
            <b-row>
                <b-col>
                    <b-form-group
                        label="Firstname"
                    >
                        <b-form-input
                            v-model="student.firstname"
                            :disabled="loading"
                            ref="firstname"
                        ></b-form-input>
                    </b-form-group>
                </b-col>

                <b-col>
                    <b-form-group label="Lastname">
                        <b-form-input
                            v-model="student.lastname"
                            :disabled="loading"
                            ref="lastname"

                        ></b-form-input>
                    </b-form-group>
                </b-col>
            </b-row>

            <b-row>
                <b-col>
                    <b-form-group label="Phone">
                        <b-form-input
                            v-model="student.contact"
                            :disabled="loading"
                            ref="contact"
                        ></b-form-input>
                    </b-form-group>
                </b-col>
                <b-col>
                    <b-form-group label="Gender">
                        <b-form-select 
                            :options="['Male', 'Female']"
                            v-model="student.gender"
                            :disabled="loading"
                            ref="genderSelected"
                        ></b-form-select>
                    </b-form-group>
                </b-col>
            </b-row>

            <b-row>
                <b-col>
                    <b-form-group label="Birth date">
                        <b-input-group class="mb-3">
                            <b-form-input
                                v-model="student.birth_date"
                                type="text"
                                placeholder="YYYY-MM-DD"
                                autocomplete="off"
                                :disabled="loading"
                                ref="birthdate"
                            ></b-form-input>
                            <b-input-group-append>
                                <b-form-datepicker
                                    v-model="student.birth_date"
                                    button-only
                                    right
                                    @context="onContext"
                                ></b-form-datepicker>
                            </b-input-group-append>
                        </b-input-group>
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
                    >Save</b-button>
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
        name: 'edit-profile-modal',

        props: ['student'],

        components: {
            Alert: () => import('@/components/mixins/Alert')
        },

        data () {
            return {
                loading: false,
                formatted: null,
                gender: null,
                birthdateSelected: null,
                showpassword: false,
                error: null
            }
        },


        methods: {
            onContext(ctx) {
                this.formatted = ctx.selectedFormatted
                this.birthdateSelected = ctx.selectedYMD
            },

            onClickResetForm () {
                this.student = {}
                this.loading = false
                this.$v.$reset()
            },

            onClickSubmitForm () {
                
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