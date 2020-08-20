import Layout from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import { useState, useMutation } from 'react';
// import { gql } from 'apollo-server-micro'

export default function Create({ }) {

  const [tripInfo, setTripInfo] = useState({
    name: '',
    description: '',
    photoUrl: '',
    stops: [],
  });

  function handleChange(e) {
    setTripInfo({ ...tripInfo, [e.target.name]: e.target.value });
  }

  function handleStopChange(e) {
    let copyOfStops = tripInfo.stops;
    copyOfStops[e.target.name] = e.target.value
    setTripInfo({ ...tripInfo, stops: copyOfStops })
  }

  function createTrip(){
    console.log(tripInfo);
    //Next steps:
    // setting up apollo client and resolver for this mutation
    // error handling on this page - empty inputs  
    // on mutation completed, some kind of success message / go to newly created trip page
    // const ADD_TRIP = gql`
    //   mutation AddTrip($name: String, $description: String, $photoUrl: String) {
    //     addTrip(name: $name, deescription: $description, photoUrlL: $photoUrl) {
    //       name
    //       description
    //       photoUrl
    //       region
    //     }
    //   }
    // `;
    // const [addTrip, { data }] = useMutation(ADD_TRIP);

  }

  return (
    <Layout >
      <div >
        <img src={'https://sgl-assets.imgix.net/files/article_hero/how-to-plan-trip-guide-aaa-via-magazine-shutterstock_446918872.jpg?w=1440&h=720&crop=faces,edges'} className={utilStyles.topImage}>
        </img>
      </div>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Create a trip</h2>
        <div className={utilStyles.lightText}>Enter road trip details below</div>
      </section>
      <div>Name</div>
        <input
          name={'name'}
          onChange={handleChange}
        />
      <div>Photo url</div>
        <input
          name={'photoUrl'}
          onChange={handleChange}
        />
      <div>Description</div>
        <input
          name={'description'}
          onChange={handleChange}
        />
      <div>Stops:</div>
      <div>1. 
        <input 
          name={0} 
          onChange={handleStopChange}
        />
      </div>
      <div>2. 
        <input 
          name={1} 
          onChange={handleStopChange}
        />
      </div>
      <div>3. 
        <input 
          name={2} 
          onChange={handleStopChange}
        />
      </div>
      <div>4. 
        <input 
          name={3} 
          onChange={handleStopChange}
        />
      </div>
      <button onClick={createTrip}>
        Save
      </button>
    </Layout>
  )
}