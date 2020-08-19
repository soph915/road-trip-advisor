import { ApolloServer, gql, makeExecutableSchema } from 'apollo-server-micro'
import trips from '../api/tripdata'

const typeDefs = gql`
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
    stops: [stop]
  }
  type stop {
    name: String
    description: String
  }
`

const resolvers = {
  Query: {
    trips() {
      return trips
    },
    trip(parent, { id }) {
      return trips.find((trip) => trip.id === id)
    },
  },
}

export const schema = makeExecutableSchema({ typeDefs, resolvers })

export const config = {
  api: {
    bodyParser: false,
  },
}

export default new ApolloServer({ schema }).createHandler({
  path: '/api/graphql',
})
