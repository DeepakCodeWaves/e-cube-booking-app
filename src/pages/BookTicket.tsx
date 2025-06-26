import { useParams, useNavigate } from 'react-router-dom';
import { useState } from 'react';

export default function BookTicket() {
  const { movieId } = useParams();
  const navigate = useNavigate();

  const [tickets, setTickets] = useState(1);
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');

  const handleBooking = () => {
    const bookingData = { movieId, tickets, date, time };
    localStorage.setItem('booking', JSON.stringify(bookingData));
    navigate('/booking/summary');
  };

  return (
    <div>
      <h2>Book Your Ticket</h2>
      <label>
        Date: <input type="date" value={date} onChange={e => setDate(e.target.value)} />
      </label>
      <br />
      <label>
        Time:
        <select value={time} onChange={e => setTime(e.target.value)}>
          <option value="">Select</option>
          <option value="10AM">10 AM</option>
          <option value="2PM">2 PM</option>
          <option value="6PM">6 PM</option>
        </select>
      </label>
      <br />
      <label>
        Tickets:
        <input type="number" value={tickets} onChange={e => setTickets(Number(e.target.value))} />
      </label>
      <br />
      <button onClick={handleBooking}>Proceed to Summary</button>
    </div>
  );
}
