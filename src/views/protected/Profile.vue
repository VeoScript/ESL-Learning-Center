<template>
    <div class="profile">
        <b-container>
           <b-card class="mx-auto">
                <b-row>
                    <b-col md="2">
                        <b-avatar 
                            src="https://placekitten.com/300/300" 
                            size="9rem"
                        ></b-avatar>
                    </b-col>
                    <b-col md="9">
                        <div style="line-height: 5px; margin-top: 16px;">
                            <b-card-title style="font-size: 2.0rem;">
                                Joshua Galit
                            </b-card-title>
                            <b-card-text>
                                joshuaimalay@gmail.com
                            </b-card-text>
                            <br>
                            <b-button 
                                variant="outline-secondary" 
                                size="sm" 
                                class="mr-1"
                                @click="onClickLogout"
                            >
                                Logout
                            </b-button>
                            <b-button 
                                variant="primary" 
                                size="sm"
                            >
                                Edit Profile
                            </b-button>
                        </div>
                    </b-col>
                </b-row>
            </b-card>
        </b-container>
    </div>
</template>

<script>

    import { auth } from '@/services'

    import { toastAlertStatus } from '@/utils'

    export default {
        name: 'profile',

        methods: {
            onClickLogout () {  
                auth
                .signOut()
                .then(() => this.$router.push('/'))
                .catch(error => toastAlertStatus(error, 'error'))
            }
        }
    }
</script>

<style scoped>
    .profile {
        padding: 25px 0px;  
    }
</style>

