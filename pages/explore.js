import Link from 'next/link'
import queryGraphql from '../shared/query-graphql'
import TripRow from '../components/TripRow'
import Head from 'next/head'
import Layout from '../components/layout'
import { useState } from 'react'
import styles from '../styles/triprow.module.css'

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
        <div className={styles.tripListContainer}>
          {trips.map((trip) => (
            <Link href="/trips/[id]" as={`/trips/${trip.id}`}>
              <div key={trip.id}>
                <TripRow 
                  key={trip.id}
                  id={trip.id} 
                  name={trip.name} 
                  region={trip.region} 
                  imageUrl={trip.imageUrl}
                  numberOfStops={trip.numberOfStops}
                />
              </div>
            </Link>
          ))}
        </div>
      </div>
      <div>
        <Link href="/">
          <a>← Back to home</a>
        </Link>
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
        numberOfStops
      }
    }
  `)
  return { props: { trips } }
}
