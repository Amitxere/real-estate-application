import React from "react";

const bookings = [
  {
    id: 1,
    property: "3 BHK Luxury Apartment",
    location: "Kondapur, Hyderabad",
    price: "₹75,00,000",
    bookingAmount: "₹50,000",
    status: "Confirmed",
    date: "20 September 2026",
  },
  {
    id: 2,
    property: "2 BHK Modern Flat",
    location: "Kukatpally, Hyderabad",
    price: "₹55,00,000",
    bookingAmount: "₹30,000",
    status: "Pending",
    date: "18 September 2026",
  },
];

const BookingsPage = () => {
  return (
    <div className="bookings-page">
      <div className="bookings-container">
        <h1>My Bookings</h1>
        <p className="bookings-subtitle">
          View and manage your property bookings.
        </p>

        <div className="bookings-list">
          {bookings.map((booking) => (
            <div className="booking-card" key={booking.id}>
              <div className="booking-image">🏠</div>

              <div className="booking-info">
                <h2>{booking.property}</h2>
                <p>📍 {booking.location}</p>

                <div className="booking-details">
                  <p>
                    <strong>Property Price:</strong> {booking.price}
                  </p>

                  <p>
                    <strong>Booking Amount:</strong>{" "}
                    {booking.bookingAmount}
                  </p>

                  <p>
                    <strong>Booking Date:</strong> {booking.date}
                  </p>
                </div>

                <span
                  className={`booking-status ${
                    booking.status.toLowerCase()
                  }`}
                >
                  {booking.status}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BookingsPage;