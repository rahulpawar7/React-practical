import gql from "graphql-tag";

// for login
export const LOGINCUSTOMER = gql`
mutation {
    generateCustomerToken(
      email: "roni_cost@example.com"
      password: "roni_cost3@example.com"
    ) {
      token
    }
  }  
`;

const READ_TODOS = gql`
  query todos{
    todos {
      id
      text
      completed
    }
  }
`;

const CREATE_TODO = gql`
  mutation CreateTodo($text: String!) {
    createTodo(text: $text)
  }
`;

const REMOVE_TODO = gql`
  mutation RemoveTodo($id: String!) {
    removeTodo(id: $id)
  }
`;