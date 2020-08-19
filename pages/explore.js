import Link from 'next/link'
import queryGraphql from '../shared/query-graphql'
import TripInfo from '../components/TripInfo/TripInfo'
import TripRow from '../components//TripInfo/TripRow'

export default function tripListing({ trips }) {
  return (
    <div>
      <h1>Explore</h1>
        {trips.map((trip) => (
          <Link href="/trips/[id]" as={`/trips/${trip.id}`}>
            <TripRow 
              key={trip.id}
              id={trip.id} 
              name={trip.name} 
              stops={trip.stops} 
              region={trip.region} 
              imageUrl={trip.imageUrl}
            />
          </Link>
        ))}
    </div>
  )
}

export async function getStaticProps() {
  const { trips } = await queryGraphql(`
    query {
      trips {
        name
        id
        stops
        region
        description
        imageUrl
      }
    }
  `)
  return { props: { trips } }
}
