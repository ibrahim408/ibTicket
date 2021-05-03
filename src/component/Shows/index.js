import './Shows.css'

function Shows({fetching,status,shows,error,setShowing}){

    if (fetching) return (<div>Loading...</div>)

    const renderShow = (show,index) => {
        return (
            <li key={index.toString()}  onClick = {() => setShowing({id: show.id, name: show.name})}>
                <h3>{show.name}</h3>
            </li>
        )
    }
    
    return (
        <div className="shows-container">
        <ul>
            {shows.map((show,index) => {
                    return renderShow(show,index)
            })}
        </ul>
        </div>
    )

};

export default Shows;