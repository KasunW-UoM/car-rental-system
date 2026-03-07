import Booking from "../models/Booking"


// Function to check Availability of Car for a given Date
const checkAvailability = async (Car, pickupDate, returnDate)=>{
    const bookings = await Booking.find({
        car,
        pickupDate: {$lte: returnDate},
        returnDate: {$gte: pickupDate}
    })
    return bookings.length === 0;
}