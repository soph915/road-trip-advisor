import Head from 'next/head'
import Layout from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import { useState } from 'react';
import Select from 'react-select';
import tripData from '../pages/api/tripdata';

export default function Create({ }) {

  const [tripInfo, setTripInfo] = useState({
    name: '',
    description: '',
    region: '',
  });

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

  const saveTrip = () => {
    let newTrip = tripInfo;
    // TODO: next steps, would be to set up an apollo client to send this new trip to server to be created
  }

  return (
    <Layout >
      {/* <Head>...</Head> */}
      <div className={utilStyles.tripImage}><img src={'https://sgl-assets.imgix.net/files/article_hero/how-to-plan-trip-guide-aaa-via-magazine-shutterstock_446918872.jpg?w=1440&h=720&crop=faces,edges'}></img></div>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Create a trip</h2>
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
      <div>Add another:</div>
      <button onClick={() => saveTrip()}><a>Save</a></button>
    </Layout>
  )
}