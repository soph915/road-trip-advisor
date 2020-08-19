import Link from 'next/link'
import queryGraphql from '../shared/query-graphql'
import TripRow from '../components//TripInfo/TripRow'
import Head from 'next/head'
import Layout from '../components/layout'
import { useState } from 'react'

const regions = [
  'All',
  'West',
  'Midwest', 
  'Southeast',
  'Northeast',
]

export default function Explore({ trips }) {

  const [region, setRegion] = useState('All');

  if (region !== 'All') {
    trips = trips.filter((trip) => trip.region === region)
  } else {
    trips = trips;
  }

  return (
    <Layout home>
      <Head>        
        <title>Explore </title>
      </Head>
      <div>
        <h1>Explore - {region}</h1>
        <div>
          {regions.map((region) => (
            <button onClick={() => setRegion(region)}>{region}</button>
          ))}
        </div>
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
