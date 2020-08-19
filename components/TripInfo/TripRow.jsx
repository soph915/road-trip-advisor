import utilStyles from '../../styles/utils.module.css'
import Link from 'next/link'

const TripRow = (props) => {

    return (
      <div>
        <li className={utilStyles.listItem} key={props.id}>
            <div>
                <img src={props.imageUrl} className={utilStyles.listImage}/>
            </div>
            <div className={utilStyles.listItemCopy}>
                {props.name}
                <br />
                Region: {props.region}   
            </div>
        </li>
      </div>
    );

};
  
export default TripRow;