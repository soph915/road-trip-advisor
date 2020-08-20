import queryGraphql from '../../shared/query-graphql'
import utilStyles from '../../styles/utils.module.css'
import Layout from '../../components/layout'
import styles from '../../styles/tripinfo.module.css'

export default function tripProfile({ trip }) {
  if (!trip) {
    return <h1>trip Not Found</h1>
  }
  return (
    <Layout>
      <div>
        <div>
          <div><img src={trip.imageUrl} className={utilStyles.topImage}></img></div>
          <h1 className={utilStyles.headingXl}>{trip.name}</h1>
          <div className={utilStyles.lightText}>
            Number of Stops: {trip.stops.length}
          </div>
          <div>{trip.description}</div>
        </div>
        <div>
          <ol>
            {trip.stops.map((stop) => (
              <li>{stop.name} - {stop.description}</li>
            ))}
          </ol>
        </div>
      </div>
    </Layout>
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
        description
        imageUrl
        stops {
          name
          description
        }
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
