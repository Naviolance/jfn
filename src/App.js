
import React from 'react';
import StudentDashboard from './components/StudentDashboard';
import GownScanner from './components/GownScanner';
import ReceiptUpload from './components/ReceiptUpload';

function App() {
  return (
    <div className="App">
      
     <center> <h1>Graduation Gown Rental Platform</h1></center>
      <StudentDashboard />
      <GownScanner />
      <ReceiptUpload />
    </div>
  );
}

export default App;
