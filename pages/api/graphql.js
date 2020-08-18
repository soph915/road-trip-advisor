import { ApolloServer, gql, makeExecutableSchema } from 'apollo-server-micro'

const typeDefs = gql`
  type Query {
    trips: [trip!]!
    trip(id: String): trip
  }
  type trip {
    name: String
    id: String
  }
`
const trips = [
  { name: 'Pacific Coast Highway', id: 'pacific-coast-highway' },
  { name: 'Utah Mighty 5', id: 'utah-mighty-five' },
]

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
