import {useState} from 'react';

function useReservationHook() {
    const [selectedShowing,setShowing] = useState(null);
    const [selectedPerformance,setPerformance] = useState({});
    const [levelID,setLevelID] = useState(null);
    const [numOfSeats,setNumOfSeats] = useState(0);

    const clearReservation = () => {
        setShowing(null);
        setPerformance({});
        setLevelID(null);
        setNumOfSeats(0);
    }

    const onPlus = () => {
        if (numOfSeats < 10){
          setNumOfSeats(numOfSeats + 1);
        }
    };
  
    const onMinus = () => {
        if (numOfSeats > 0){
          setNumOfSeats(numOfSeats - 1);
        }
    };

    return {
        selectedShowing,
        selectedPerformance,
        levelID,
        numOfSeats,
        setShowing,
        setPerformance,
        setLevelID,
        setNumOfSeats,
        onPlus,
        onMinus,
        clearReservation
    }
}

export default useReservationHook;