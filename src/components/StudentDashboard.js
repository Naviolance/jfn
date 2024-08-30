
import React, { useState } from 'react';
const StudentDashboard = () => {
  const [gowns, setGowns] = useState([
    { id: 1, code: 'GOWN001', available: true },
    { id: 2, code: 'GOWN002', available: true },
    { id: 3, code: 'GOWN003', available: true },
    { id: 4, code: 'GOWN004', available: true },

  ]);

  const rentGown = (gownId) => {
    setGowns(gowns.map(gown => gown.id === gownId ? { ...gown, available: false } : gown));
    alert(`Gown ${gownId} rented!`);
  };

  return (
  <center>
    <div className='toto'>
      <h2>Available Gowns</h2>
      <ul>
        {gowns.map(gown => (
          <li key={gown.id}>
            {gown.code} - {gown.available ? 'Available' : 'Rented'}
            {gown.available && <button onClick={() => rentGown(gown.id)}>Rent</button>}
          </li>
        ))}
      </ul>
    </div>
    </center>
  );
};

export default StudentDashboard;
