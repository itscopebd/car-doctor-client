import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import BookingRow from './BookingRow';

const Bookings = () => {
    const { user } = useContext(AuthContext);

    const [bookings, setBookings] = useState([])

    const url = `http://localhost:5000/bookings?email=${user.email}`;
    useEffect(() => {
        fetch(url, {
            method: "GET",
            headers: {
                authorization: `Bearer ${JSON.parse(localStorage.getItem('car-access-token'))}`
            }
        })
            .then(res => res.json())
            .then(data => setBookings(data))
    }, [])


    const handleDelete = (id) => {
        const url = `http://localhost:5000/bookings/${id}`;
        fetch(url, {
            method: "DELETE"
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.deletedCount > 0) {
                    const remining = bookings.filter(data => data._id !== id)
                    setBookings(remining)

                }
            })
    }

    return (
        <div>
            {
                bookings.map(bookingRow => <BookingRow key={bookingRow._id} bookingRow={bookingRow} handleDelete={handleDelete}></BookingRow>)

            }
        </div>
    );
};

export default Bookings;