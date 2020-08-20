import Layout from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import { useState } from 'react';
import Select from 'react-select';
import { gql, useMutation } from '@apollo/client';

const ADD_TRIP = gql`
  mutation AddTrip($name: String, $description: String, $photoUrl: String, $region: String) {
    addTrip(name: $name, deescription: $description, photoUrlL: $photoUrl, region: $region) {
      name
      description
      photoUrl
      region
    }
  }
`;

export default function Create({ }) {

  const [tripInfo, setTripInfo] = useState({
    name: '',
    description: '',
    photoUrl: '',
    region: '',
  });

  const [addTrip, { data }] = useMutation(ADD_TRIP);

  const handleChange = e =>
    setTripInfo({ ...tripInfo, [e.target.name]: e.target.value });

  const handleRegionSelect = selectedOption => {
    setTripInfo({ region: selectedOption.value });
  };

  const regionOptions = [
    { value: 'Midwest', label: 'Midwest' },
    { value: 'Northeast', label: 'Northeast' },
    { value: 'Southeast', label: 'Southeast' },
    { value: 'Southwest', label: 'Southwest' },
    { value: 'West', label: 'West' },
  ];  

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
      <div>Region:</div>
      <Select
        value={tripInfo.region}
        onChange={handleRegionSelect}
        options={regionOptions}
      />
      <div>Photo url:</div>
        <input
          name={'photoUrl'}
          onChange={handleChange}
          placeholder={''}
        />
      <div>Stops:</div>
      <div>1. <input></input></div>
      <div>2. <input></input></div>
      <div>3. <input></input></div>
      <div>4. <input></input></div>
      {/* TODO: next steps, would be to set up an apollo client to handle create trip mutation*/}
      <button 
        onClick={() => addTrip({ variables: { } })}>
        Save
      </button>
    </Layout>
  )
}