import { useCreateReservation, createReservation } from '../../queries';
import { useQuery, useMutation, queryCache } from 'react-query'
import {createRequest} from '../../helper/generator'
import './Seating.css'

function Seating(props){
    const {fetching,status,seatings,error,selectedShowing,selectedPerformance,levelID,customer,setLevelID,numOfSeats,setNumOfSeats,onPlus,onMinus,clearReservation,setTab} = props;
    const mutation= useCreateReservation()


    if (fetching) return (<div>Loading...</div>)
    if (Object.keys(selectedPerformance).length === 0) return  (<div><h1>Please select a Performance</h1></div>)


    const onSubmit = () => {
      const body = createRequest(selectedPerformance.id,customer.id,levelID,numOfSeats)
      mutation.mutate(body);
    }

    const isDisabled = () => {
      if (!customer.id) return true;
      if (!selectedPerformance.id) return true;
      if (!levelID) return true;
      if (!numOfSeats) return true;

      return false;
    }

    const renderLevel = (level,index) => {
      return (
        <li key={index.toString()}  
            style={{backgroundColor: levelID === level.id ? 'grey' : null}}
            onClick={() => setLevelID(level.id)}
        >
            <p>{level.name}</p>
        </li>
        )
    }

    if (mutation.isSuccess || mutation.isLoading){
      clearReservation();
      mutation.reset();
      setTab('reservations')
    }

  

    return (
        <div className="seating-container">
            <h1>{selectedShowing.name}</h1>

            <h2>SHOWTIME</h2>
            <h3>{selectedPerformance.startingTime}</h3>
            <div style={{marginTop: 50}}></div>

            <h3>Select Level</h3>
            <ul>
              {
                seatings.levels.map((level,index) => {
                  return renderLevel(level,index);
                })
              }
            </ul>

            <div style={{marginTop: 50}}></div>
            <h3>Select Number of Seats</h3>
            <div className="select-seats-container">
              <div className="display-seat-count">
                <p>{numOfSeats}</p>
              </div>
              <div className="update-seat-count">
                <div onClick={() => onPlus()} className="plus-button">+</div>
                <div onClick={() => onMinus()} className="minus-button">-</div>
              </div>
            </div>
            <button style={{backgroundColor: isDisabled() ? 'pink' : null}} className="register-button" disabled={isDisabled()} onClick={onSubmit}>
              <h2>Book Now</h2>
            </button>
        </div>
    )

};

export default Seating;