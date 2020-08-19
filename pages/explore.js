import Link from 'next/link'
import queryGraphql from '../shared/query-graphql'
import TripRow from '../components//TripInfo/TripRow'
import Head from 'next/head'
import Layout from '../components/layout'

export default function Explore({ trips }) {
  return (
    <Layout home>
      <Head>        
        <title>Explore</title>
      </Head>
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
                  region={trip.region} 
                  imageUrl={trip.imageUrl}
                />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </Layout>
  )
}

export async function getStaticProps() {
  const { trips } = await queryGraphql(`
    query {
      trips {
        name
        id
        region
        imageUrl
      }
    }
  `)
  return { props: { trips } }
}
