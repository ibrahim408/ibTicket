import {useState} from 'react';

function useReservation() {
    const [showingID,setShowingID] = useState(null);
    const [performanceID,setPerformanceID] = useState(null);
    const [levelID,setLevelID] = useState(null);
    const [numOfSeats,setNumOfSeats] = useState(0);
 
    return {
        showingID,
        performanceID,
        levelID,
        numOfSeats,
        setShowingID,
        setPerformanceID,
        setLevelID,
        setNumOfSeats
    }
}

export default useReservation;