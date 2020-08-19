import utilStyles from '../../styles/utils.module.css'
import TripRow from '../TripInfo/TripRow'

const TripInfo = (props) => {
  return (
    <div>
      <ul className={utilStyles.list}>
        {props.tripData.trips.map(({ id, name, stops, region, imageUrl }) => (
          <TripRow 
            key={id}
            id={id} 
            name={name} 
            stops={stops} 
            region={region} 
            imageUrl={imageUrl}
          />
        ))}
      </ul>
    </div>
  );
  }

  
  export default TripInfo;