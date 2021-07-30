import gql from 'graphql-tag'

export const STUDENT_QUERY = gql`
    query studentQuery($firebase_id: String!) {
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