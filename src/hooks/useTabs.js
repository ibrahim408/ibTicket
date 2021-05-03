import {useState} from 'react';

function useTabs() {
    const [tab,setTab] = useState('reservations');
    
    const onClickTab = (tb) => {
        setTab(tb);
    };
      
    return {
        tab,
        setTab,
        onClickTab
    }
}

export default useTabs;