import gql from 'graphql-tag'

export const ADD_INBOX_MUTATION = gql`
    mutation AddInboxMutation($name: String!, $email: String!, $contact: String!, $message: String!) {
        insert_inboxes(objects: {name: $name, email: $email, contact: $contact, message: $message}) {
            affected_rows
            returning {
                id
            }
        }
    }
`