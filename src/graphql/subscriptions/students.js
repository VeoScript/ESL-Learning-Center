import gql from 'graphql-tag'

export const STUDENT_SUBSCRIPTION = gql`
    subscription studentSubscription($firebase_id: String!) {
        students(where: {firebase_id: {_eq: $firebase_id}}) {
            id
            firebase_id
            firstname
            lastname
            gender
            password
            email
            contact
            birth_date
            profile_url
        }
    }
`