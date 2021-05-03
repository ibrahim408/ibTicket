import './Reservations.css' ;
import { getDate } from '../../helper/utility';

function Reservation({fetching,reservations,error}){
    if (fetching) return (<div>Loading...</div>)


    const renderReservation = (reservation,index) => {
        const date = getDate(reservation.expirationDate);
        return (
            <li key={index.toString()}>
                <h3> id: {reservation.id} <br/>  Expiration Date {date} </h3>
            </li>
        )
    }
    
    return (
        <div className="reservation-container">
            <ul>
                {reservations.map((reservation,index) => {
                        return renderReservation(reservation,index)
                })}
            </ul>
        </div>
    )

};

export default Reservation;