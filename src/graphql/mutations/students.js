import gql from 'graphql-tag'


export const ADD_STUDENT_MUTATION = gql`
    mutation AddStudentMutation($firebase_id: String!, $firstname: String!, $lastname: String!, $email: String, $contact: String, $gender: String, $birth_date: String, $password: String!) {
        insert_students(objects: {firebase_id: $firebase_id, firstname: $firstname, lastname: $lastname, email: $email, contact: $contact, gender: $gender, birth_date: $birth_date, password: $password}) {
            affected_rows
            returning {
                id
            }
        }
    }
`

export const UPDATE_STUDENT_MUTATION = gql`
    mutation UpdateStudentMutation($id: uuid!, $firstname: String, $lastname: String, $contact: String, $gender: String, $birth_date: String) {
        update_students(where: {id: {_eq: $id}}, _set: {firstname: $firstname, lastname: $lastname, contact: $contact, gender: $gender, birth_date: $birth_date}) {
            affected_rows
            returning {
                id
            }
        }
    }
`