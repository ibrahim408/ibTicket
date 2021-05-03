import './Performances.css';
import { getHour } from '../../helper/utility';
function Performance({fetching,status,performances,error,selectedShowing,setPerformance}){
    const filteredPerformances = performances.filter(performance => selectedShowing && performance.showId === selectedShowing.id);

    if (fetching) return (<div>Loading...</div>)
    if (!selectedShowing) return  (<div><h1>Please select a Showing</h1></div>)


    const renderPerformance = (performance,index) => {
        const startingTime = getHour(performance.showTime);
        return (
            <li key={index.toString()}  onClick = {() => setPerformance({id: performance.id, startingTime: startingTime})}>
                <h3>{startingTime}</h3>
            </li>
        )
    }
    
    return (
        <div className="performance-container">
            <ul>
                {filteredPerformances.map((performance,index) => {
                        return renderPerformance(performance,index)
                })}
            </ul>
        </div>
    )

};

export default Performance;