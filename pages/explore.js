import Link from 'next/link'
import queryGraphql from '../shared/query-graphql'

export default function tripListing({ trips }) {
  return (
    <div>
      <h1>Explore</h1>
      <ul>
        {trips.map((trip) => (
          <li key={trip.id}>
            <Link href="/trips/[id]" as={`/trips/${trip.id}`}>
              <a>{trip.name}</a>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export async function getStaticProps() {
  const { trips } = await queryGraphql(`
    query {
      trips {
        name
        id
      }
    }
  `)
  return { props: { trips } }
}
