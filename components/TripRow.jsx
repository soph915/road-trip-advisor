import utilStyles from '../styles/utils.module.css'
import styles from '../styles/triprow.module.css'

const TripRow = (props) => {

  return (
    <div className={styles.listItem} key={props.id}>
      <div>
          <img src={props.imageUrl} className={utilStyles.listImage}/>
      </div>
      <div className={utilStyles.listItemCopy}>
        <div>
          <div className={styles.tripName}>{props.name}</div>
          <div>
            Region: {props.region}
            <br/>
            Number of stops: {props.numberOfStops}
          </div>
        </div>
      </div>
    </div>
  );

};
  
export default TripRow;