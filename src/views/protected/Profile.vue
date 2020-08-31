<template>
    <div class="profile">
        <b-container>
           <b-card class="mx-auto">
                <b-row>
                    <b-col md="2">
                        <b-avatar 
                            v-for="student in students" :key="student.id"
                            :src="getStudentAvatarUrl(student)" 
                            size="9rem"
                        ></b-avatar>
                    </b-col>
                    <b-col md="9">
                        <div 
                            style="line-height: 5px; margin-top: 16px;"
                            v-for="(student, index) in students" :key="index"
                        >
                            <b-card-title style="font-size: 2.0rem;" class="text-capitalize">
                                {{ `${student.firstname} ${student.lastname}`}}
                            </b-card-title>
                            <b-card-text class="text-lowercase">
                                {{ student.email }}
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
                                v-show="paramsId === currentUserId"
                                v-b-modal.edit-profile-modal
                            >
                                Edit Profile
                            </b-button>

                            <!-- Edit Profile Modal Show -->
                            <edit-profile-modal 
                                :student="student"
                            />

                        </div>
                    </b-col>
                </b-row>
                <hr>
                <b-row style="height: 500px;">

                </b-row>
            </b-card>
        </b-container>
    </div>
</template>

<script>

    import { auth } from '@/services'

    import { toastAlertStatus } from '@/utils'

    import { STUDENT_QUERY } from '@/graphql/queries'

    import { STUDENT_SUBSCRIPTION } from '@/graphql/subscriptions'

    export default {
        name: 'profile',

        components: {
            EditProfileModal: () => import('@/components/pages/profile/EditProfileModal')
        },

        data () {
            return {
                paramsId: this.$route.params.id,
                currentUserId: auth.currentUser.uid,
                students: []
            }
        },
        
        methods: {
            onClickLogout () {  
                auth
                .signOut()
                .then(() => this.$router.push({ name: 'home' }))
                .catch(error => toastAlertStatus(error, 'error'))
            },
            getStudentAvatarUrl (student) {
                if (student.profile_url === null) 
                    return 'https://i.pinimg.com/originals/19/b8/d6/19b8d6e9b13eef23ec9c746968bb88b1.jpg'
                else
                    return student.profile_url
            }
        },

        apollo: {
            students: {
                query: STUDENT_QUERY,
                subscribeToMore: {
                    document: STUDENT_SUBSCRIPTION,
                    variables () {
                        return {
                            firebase_id: this.paramsId
                        }
                    },
                    updateQuery(previousResult, { subscriptionData }) {
                        if (previousResult) {
                            return {
                                students: [
                                    ...subscriptionData.data.students
                                ]
                            }
                        }
                    }
                },
                variables () {
                    return {
                        firebase_id: this.paramsId
                    }
                },
                result ({ data }) {
                    this.students = data.students
                }
            }
        }
    }
</script>

<style scoped>
    .profile {
        padding: 25px 0px;  
    }
</style>

