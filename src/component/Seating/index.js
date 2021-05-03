import { useCreateReservation, createReservation } from '../../queries';
import { useQuery, useMutation, queryCache } from 'react-query'

function Seating(){

    const mutation= useCreateReservation()


    const reservationRequest = {
            performanceId: 2,
            customer: {
              id: 2
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
        mutation.mutate(reservationRequest);
    }

    console.log('isSuccess: ',mutation.isSuccess)
    console.log('isLoading: ',mutation.isLoading)
    console.log('isError: ',mutation.isError)
    console.log(' ');

    return (
        <div>
            <button onClick={onSubmit}>Sir sir sir</button>
        </div>
    )

};

export default Seating;