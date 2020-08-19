import { gql } from '@apollo/client'

export const typeDefs = gql`
  type Query {
    trips: [trip!]!
    trip(id: String): trip
  }
  type trip {
    name: String
    id: String
    imageUrl: String
    description: String
    region: String
  }
`

