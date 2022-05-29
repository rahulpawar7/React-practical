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

export const LOGOUTCUSTOMER = gql`
mutation {
  revokeCustomerToken {
    result
  }
}

`;

export const READ_ADDRESSBOOK = `
query{
  customer {
    firstname
    lastname
    email
    addresses {
      id
      city
  country_code
      region {
        region
        region_code
      }
      street
      postcode
      telephone
    }
  }
}
`;

export const createNewaddress = gql`
mutation {
  createCustomerAddress(input: {
    region: {
      region_id: 7
    }
    country_code: US
    street: ["123 Main Street"]
    telephone: "7777777777"
    postcode: "77777"
    city: "Phoenix"
    firstname: "Bob"
    lastname: "Loblaw"
    default_shipping: true
    default_billing: false
  }) {
    id
    region {
      region
      region_code
    }
    country_code
    street
    telephone
    postcode
    city
    default_shipping
    default_billing
  }
}`

export const UPDATEADDRESS = gql`
mutation {
  updateCustomerAddress(id:52, input: {
    city: "New City"
    postcode: "55555"
  }) {
    id
    city
    postcode
  }
}`