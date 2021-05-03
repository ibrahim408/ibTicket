import './App.css';
import Tabs from './component/Tabs';
import Reservations from './component/Reservations'
import Shows from './component/Shows'
import Performances from './component/Performances';
import Seating from './component/Seating';
import {useSeats, useReservations, usePerformances, useShows, useUser } from './queries'
import { QueryClient, QueryClientProvider, useQuery } from "react-query";
import useTabs from './hooks/useTabs';
import useReservation from './hooks/useReservation';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TicketGuru />
    </QueryClientProvider>
  );
}

function TicketGuru(){
  const { isFetching: fetchingCustomer, status: statusCustomer, data:  dataCustomer = {},  error: errorCustomer   } = useUser();
  const { isFetching: fetchingShows, status: statusShows, data:  dataShows = [],  error: errorShows  } = useShows();
  const { isFetching: fetchingPerformances, status: statusPerformances, data:  dataPerformances = [],  error: errorPerformances  } =  usePerformances();
  const { isFetching: fetchingReservations, status: statusReservations, data:  dataReservations= {},  error: errorReservations } = useReservations(dataCustomer);
  const { isIdle, isFetching: fetchingSeats, status: statusSeats, data:  dataSeats = {},  error: errorSeats  } = useSeats(dataPerformances);

  const {tab, setTab, onClickTab} = useTabs();
  const {showingID, performanceID, levelID, numOfSeats, setShowingID, setPerformanceID, setLevelID, setNumOfSeats} = useReservation();

  return (
    <div className="main">
      <div className="dashboard">
        <Tabs tab={tab} setTab={setTab} onClickTab={onClickTab} />
        <div className="dashboard-body">
          {tab === 'reservation' ? <Reservations 
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
            setShowingID={setShowingID} 
          /> : null}
          {tab === 'performances' ? <Performances 
            fetching={fetchingPerformances} 
            status={statusPerformances} 
            performances={dataPerformances}  
            error={errorPerformances} 
            showingID={showingID} 
            setPerformanceID={setPerformanceID}  
          /> : null }
          {tab === 'booking' ? <Seating 
            fetching={fetchingSeats} 
            status={statusSeats} 
            shows={dataSeats}  
            error={errorSeats}  
            showingID={showingID}
            performanceID={performanceID}
            levelID={levelID}
            setLevelID={setLevelID}
            numOfSeats={setNumOfSeats}
          /> : null }
          
        </div>
      </div>
    </div>
  )
}

export default App;


  // const { isFetching: fetchingPerson, status: statusPerson, data:  dataPerson = {},  error: errorPerson   } = useQuery("user", getUser);
  // const { isFetching: fetchingShows, status: statusShows, data:  dataShows = [],  error: errorShows  } = useQuery("shows", getShows);
  // const { isFetching: fetchingPerformances, status: statusPerformances, data:  dataPerformances = [],  error: errorPerformances  } =  useQuery("performances", getPerformances);
  // const { isFetching: fetchingReservations, status: statusReservations, data:  dataReservations= {},  error: errorReservations } = useQuery(
  //     ['reservations', dataPerson.id], 
  //     () => getReservations(dataPerson.id),
  //     { enabled: !!dataPerson.id,
  //   });
  // const { isIdle, isFetching: fetchingSeats, status: statusSeats, data:  dataSeats = {},  error: errorSeats  } = useQuery(
  //     ['seats', dataPerformances[0]?.id], 
  //     () => getSeats(dataPerformances[0]?.id),
  //     { enabled: !!dataPerformances[0]?.id,
  //   });