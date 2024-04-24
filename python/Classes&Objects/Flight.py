class Flight() :

    def __init__(self, defaultCapacity) :
        self.capacity = defaultCapacity
        self.passengers = []

    def bookFlight(self, name) :
        if not self.checkOpenSeats() :  #meaning if self.checkOpenSeats == 0
            return False
        else :
            self.passengers.append(name)
            return True
    
    def checkOpenSeats(self) :
        return self.capacity - len(self.passengers)
    

flightZ751 = Flight(4)
friends = ["Brian","Annie","Truong","Tram","John","Dick"]
for f in friends :
    if flightZ751.bookFlight(f) :
        print(f"Seat booked successfully for {f}")
    else :
        print(f"Bad luck! No more Seat Available! \nSeat booked failed for {f} \nBooking Closed Temporarily")
        break