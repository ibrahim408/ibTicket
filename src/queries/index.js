import { useQuery, useMutation} from 'react-query'

const getUser = async () => {
    try {
        const response = await fetch("http://ec2-54-159-33-6.compute-1.amazonaws.com:5005/ticket-guru/api/customers")
        if (!response.ok || response.status !== 200) throw new Error('Having trouble retrieving data, please try again later');
        const customer = await response.json();
        return {
            id: customer[0].id,
            firstName: customer[0].firstName,
            lastName: customer[0].lastName
        }
    } catch(err){
        throw new Error('Having trouble retrieving data, please try again later');
    }

}

const getReservations = async (id) => {
    try {
        const response = await fetch(`http://ec2-54-159-33-6.compute-1.amazonaws.com:5005/ticket-guru/api/reservations?customerId=${id}`)
        if (!response.ok || response.status !== 200) throw new Error('Having trouble retrieving data, please try again later');
        return await response.json();
    } catch(err){
        throw new Error('Having trouble retrieving data, please try again later');
    }
}

const getShows = async () => {
    try {
        const response = await fetch("http://ec2-54-159-33-6.compute-1.amazonaws.com:5005/ticket-guru/api/shows")
        if (!response.ok || response.status !== 200) throw new Error('Having trouble retrieving data, please try again later');
        return await response.json();
    } catch(err){
        throw new Error('Having trouble retrieving data, please try again later');
    }
}

const getPerformances = async () => {
    try {
        const response = await fetch("http://ec2-54-159-33-6.compute-1.amazonaws.com:5005/ticket-guru/api/performances")
        if (!response.ok || response.status !== 200) throw new Error('Having trouble retrieving data, please try again later');
        return await response.json();
    } catch(err){
        throw new Error('Having trouble retrieving data, please try again later');
    }
}

const getSeats = async (id) => {
    try {
        const response = await fetch(`http://ec2-54-159-33-6.compute-1.amazonaws.com:5005/ticket-guru/api/performances/${id}/availability`);
        if (!response.ok || response.status !== 200) throw new Error('Having trouble retrieving data, please try again later');
        return await response.json();
    } catch(err){
        throw new Error('Having trouble retrieving data, please try again later');
    }
}
const createReservation = async (body) => {
    try {
        const response = await fetch('http://ec2-54-159-33-6.compute-1.amazonaws.com:5005/ticket-guru/api/reservations',
        {
            method: 'post',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(body)
        })
        if (!response.ok || response.status !== 201) throw new Error('Having trouble retrieving data, please try again later');
        return await response.json();
    } catch(err){
        throw new Error('Having trouble retrieving data, please try again later');
    }  
}






export function useUser() {
    return useQuery("user", getUser);
}

export function useShows() {
    return useQuery("shows", getShows);
}

export function usePerformances() {
    return useQuery("performances", getPerformances);
}

export function useReservations(dataCustomer) {
    return useQuery(['reservations', dataCustomer.id], 
        () => getReservations(dataCustomer.id),
        { enabled: !!dataCustomer.id,
      });
}

export function useSeats(selectedPerformance = {}) {
    return useQuery(['seats', selectedPerformance.id], 
        () => getSeats(selectedPerformance.id),
        { enabled: !!selectedPerformance.id,
      });
}

export function useCreateReservation() {
    return useMutation(body => createReservation(body))    
}

{
    // onSuccess: () => queryClient.invalidateQueries('reservations')
}