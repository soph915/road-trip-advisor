import Link from 'next/link'
import queryGraphql from '../shared/query-graphql'
import TripRow from '../components//TripInfo/TripRow'

export default function tripListing({ trips }) {
  return (
    <div>
      <h1>Explore</h1>
      <div>
        {trips.map((trip) => (
          <Link href="/trips/[id]" as={`/trips/${trip.id}`}>
            <div key={trip.id}>
              <TripRow 
                key={trip.id}
                id={trip.id} 
                name={trip.name} 
                stops={trip.stops} 
                region={trip.region} 
                imageUrl={trip.imageUrl}
              />
            </div>
          </Link>
        ))}
      </div>
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
