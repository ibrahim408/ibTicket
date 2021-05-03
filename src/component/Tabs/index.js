
import "./Tabs.css";

function Tabs({tab, setTab, onClickTab}){
    
    const renderTab = (type,typeText) => {
        return (
            <div 
                className="tab-box" 
                style={{
                    backgroundColor: tab === type ? '#1B2438' : null,
                    borderTop: tab === type ? '5px solid #ffffff' : null
                    }}
                onClick={() => onClickTab(type)}
            >
                <h3 style={{color: tab === type ? '#ffffff' : null}} >{typeText}</h3>
            </div>          
        )
    }
    
    return (
        <div className="tabs-container">
            {renderTab('reservation','Reservation')}
            {renderTab('shows','Shows')}
            {renderTab('performances','Performances')}
            {renderTab('booking','Booking')}
        </div>
    )

};

export default Tabs;