import gql from 'graphql-tag'


export const ADD_STUDENT_MUTATION = gql`
    mutation AddStudentMutation($firstname: String!, $lastname: String!, $email: String, $contact: String, $gender: String, $birth_date: String) {
        insert_students(objects: {firstname: $firstname, lastname: $lastname, email: $email, contact: $contact, gender: $gender, birth_date: $birth_date}) {
            affected_rows
            returning {
                id
            }
        }
    }  
`