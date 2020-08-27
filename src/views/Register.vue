<template>
    <b-modal id="register-modal" title="Registration" size="medium" hide-footer>
        <b-form>
            
            <b-row>
                <b-col>
                    <b-form-group
                        label="Firstname"
                    >
                        <b-form-input
                        ></b-form-input>
                    </b-form-group>
                </b-col>

                <b-col>
                    <b-form-group label="Lastname">
                        <b-form-input
                        ></b-form-input>
                    </b-form-group>
                </b-col>
            </b-row>

            <b-row>
                <b-col>
                    <b-form-group label="Email">
                        <b-form-input
                        ></b-form-input>
                    </b-form-group>
                </b-col>

                <b-col>
                    <b-form-group label="Contact">
                        <b-form-input
                        ></b-form-input>
                    </b-form-group>
                </b-col>
            </b-row>

            <b-row>
                <b-col>
                    <b-form-group label="Gender">
                        <b-form-select v-model="genderSelected" :options="gender"></b-form-select>
                    </b-form-group>
                </b-col>
                <b-col>
                    <b-form-group label="Birth date">
                        <b-input-group class="mb-3">
                            <b-form-input
                                v-model="birthdate"
                                type="text"
                                placeholder="YYYY-MM-DD"
                                autocomplete="off"
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
                    </b-form-group>
                </b-col>
            </b-row>
            <hr>
            <b-row>
                <b-col>
                    <b-button 
                        block
                        variant="primary"
                    >Register</b-button>
                </b-col>
                <b-col>
                    <b-button block @click="$bvModal.hide('register-modal')">Cancel</b-button>
                </b-col>
            </b-row>

        </b-form>
    </b-modal>
</template>

<script>



    export default {
        name: 'register',

        data () {
            return {
                genderSelected: null,
                gender: [
                    { value: 'Male', text: 'Male' },
                    { value: 'Female', text: 'Female' }
                ],
                birthdate: '',
                formatted: '',
                birthdateSelected: ''
            }
        },

        methods: {
            onContext(ctx) {
                // The date formatted in the locale, or the `label-no-date-selected` string
                this.formatted = ctx.selectedFormatted
                // The following will be an empty string until a valid date is entered
                this.birthdateSelected = ctx.selectedYMD
            }
        }
    }
</script>