export function createRequest(performance,customer,level,seats){
    return {
        performanceId: performance,
        customer: {
          id: customer
        },
        seatRequests: [
          {
            level: {
              id: level
            },
            numSeats: seats
          }
        ]
    }
}