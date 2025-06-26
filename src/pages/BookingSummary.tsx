import { useEffect, useState } from 'react';
import { QRCodeCanvas } from 'qrcode.react';
import Navbar from '../components/Navbar';

export default function BookingSummary() {
  const [booking, setBooking] = useState<any>(null);
  const [bookingId, setBookingId] = useState<string>('');

  useEffect(() => {
    const data = localStorage.getItem('booking');
    if (data) {
      const parsed = JSON.parse(data);
      setBooking(parsed);
      setBookingId(`BOOK-${Date.now()}`); 
    }
  }, []);

  if (!booking) return <p>Loading...</p>;

  const qrData = JSON.stringify({
    id: bookingId,
    movieId: booking.movieId,
    date: booking.date,
    time: booking.time,
    tickets: booking.tickets
  });

  return (
    <div style={{ textAlign: 'center' }}>
      <Navbar />
      <h2>Booking Confirmed!</h2>
      <p><strong>Booking ID:</strong> {bookingId}</p>
      <p><strong>Movie ID:</strong> {booking.movieId}</p>
      <p><strong>Date:</strong> {booking.date}</p>
      <p><strong>Time:</strong> {booking.time}</p>
      <p><strong>Tickets:</strong> {booking.tickets}</p>
      <p><strong>Total Amount:</strong> ₹{booking.tickets * 150}</p>

      <div style={{ marginTop: '20px' }}>
        <QRCodeCanvas value={qrData} size={180} />
        <p style={{ fontSize: '0.9rem', marginTop: '10px' }}>Scan this QR at the entrance</p>
      </div>
    </div>
  );
}
