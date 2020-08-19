import queryGraphql from '../../shared/query-graphql'
import utilStyles from '../../styles/utils.module.css'
import Layout from '../../components/layout'


export default function tripProfile({ trip }) {
  if (!trip) {
    return <h1>trip Not Found</h1>
  }
  return (
    <Layout>
      <div className={utilStyles.tripImage}><img src={trip.imageUrl}></img></div>
      <article>
        <h1 className={utilStyles.headingXl}>{trip.name}</h1>
        <div className={utilStyles.lightText}>
          Stops: {trip.stops}
        </div>
        <div>{trip.description}</div>
      </article>
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
