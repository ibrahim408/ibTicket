
function Performance({fetching,status,performances,error,showingID}){
    // please select a showing...

    console.log('performances: ',performances);
    console.log('showingID: ',showingID);
    
    const filteredPerformances = performances.filter(performance => performance.showId === 1);

    if (fetching) return (<div>Loading...</div>)
    console.log('performances: ',filteredPerformances);

    return (
        <div>
            Performance....
        </div>
    )

};

export default Performance;