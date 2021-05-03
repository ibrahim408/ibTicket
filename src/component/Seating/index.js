import { useCreateReservation } from "../../queries/index";
function Seating(){
    // onsubmit set body 
    // set body to null on success
    const state = {
            performanceId: 1,
            customer: {
              id: 1
            },
            seatRequests: [
              {
                level: {
                  id: 3
                },
                numSeats: 5
              }
            ]
    }

    const onSubmit = () => {
        
    }

    return (
        <div>
            <button onClick={onSubmit}>Sir sir sir</button>
        </div>
    )

};

export default Seating;