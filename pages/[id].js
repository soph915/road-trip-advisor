import queryGraphql from '../shared/query-graphql'

export default function tripProfile({ trip }) {
  if (!trip) {
    return <h1>trip Not Found</h1>
  }
  return (
    <h1>
      {trip.id} is {trip.name}
    </h1>
  )
}

export async function getStaticProps(context) {
  const { params } = context
  const { id } = params
  const { trip = null } = await queryGraphql(
    `
    query($id: String) {
      trip(id: $id) {
        name
        id
      }
    }
  `,
    { id }
  )
  return { props: { trip } }
}

export async function getStaticPaths() {
  const { trips } = await queryGraphql(`
    query {
      trips {
        id
      }
    }
  `)
  return {
    paths: trips.map(({ id }) => ({
      params: { id },
    })),
    fallback: true,
  }
}
