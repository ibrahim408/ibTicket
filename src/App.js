import './App.css';
import Tabs from './component/Tabs';
import Reservations from './component/Reservations'
import Shows from './component/Shows'
import Performances from './component/Performances';
import Seating from './component/Seating';
import {useSeats, useReservations, usePerformances, useShows, useUser } from './queries'
import { QueryClient, QueryClientProvider } from "react-query";
import useTabs from './hooks/useTabs';
import useReservationHook from './hooks/useReservationHook';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TicketGuru />
    </QueryClientProvider>
  );
}

function TicketGuru(){
  const {tab, setTab, onClickTab} = useTabs();
  const {selectedShowing, selectedPerformance, levelID, numOfSeats, setShowing, setPerformance, setLevelID, setNumOfSeats,onPlus,onMinus,clearReservation} = useReservationHook();

  const { isFetching: fetchingCustomer, status: statusCustomer, data:  dataCustomer = {},  error: errorCustomer   } = useUser();
  const { isFetching: fetchingShows, status: statusShows, data:  dataShows = [],  error: errorShows  } = useShows();
  const { isFetching: fetchingPerformances, status: statusPerformances, data:  dataPerformances = [],  error: errorPerformances  } =  usePerformances();
  const { isFetching: fetchingReservations, status: statusReservations, data:  dataReservations= [],  error: errorReservations } = useReservations(dataCustomer);
  const { isIdle, isFetching: fetchingSeats, status: statusSeats, data:  dataSeats = {},  error: errorSeats  } = useSeats(selectedPerformance);



  return (
    <div className="main">
      <div className="dashboard">
        <Tabs tab={tab} setTab={setTab} onClickTab={onClickTab} />
        <div className="dashboard-body">
          {tab === 'reservations' ? <Reservations 
            customer={dataCustomer} 
            fetching={fetchingReservations} 
            status={statusReservations} 
            reservations={dataReservations}  
            error={errorReservations} 
          /> : null}
          {tab === 'shows' ?  <Shows 
            fetching={fetchingShows} 
            status={statusShows} 
            shows={dataShows}  
            error={errorShows} 
            setShowing={setShowing} 
          /> : null}
          {tab === 'performances' ? <Performances 
            fetching={fetchingPerformances} 
            status={statusPerformances} 
            performances={dataPerformances}  
            error={errorPerformances} 
            selectedShowing={selectedShowing} 
            setPerformance={setPerformance}  
          /> : null }
          {tab === 'booking' ? <Seating 
            fetching={fetchingSeats} 
            status={statusSeats} 
            seatings={dataSeats}  
            error={errorSeats}  
            selectedShowing={selectedShowing}
            selectedPerformance={selectedPerformance}
            levelID={levelID}
            customer={dataCustomer} 
            numOfSeats={numOfSeats}
            setLevelID={setLevelID}
            setNumOfSeats={setNumOfSeats}
            onPlus={onPlus}
            onMinus={onMinus}
            setTab={setTab}
            clearReservation={clearReservation}
          /> : null }
          
        </div>
      </div>
    </div>
  )
}

export default App;
