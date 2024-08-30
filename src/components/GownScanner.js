
import React, { useState } from 'react';

const GownScanner = () => {
  const [scannedCode, setScannedCode] = useState('');

  const handleScan = (e) => {
    setScannedCode(e.target.value);
  };

  const submitCode = () => {
    alert(`Gown with code ${scannedCode} scanned!`);
    setScannedCode('');
  };

  return (
    <center>
    <div>
      <h2>Scan Gown</h2>
      <input 
        type="text" 
        value={scannedCode} 
        onChange={handleScan} 
        placeholder="Scan Gown Code"
      />
      <button onClick={submitCode}>Submit</button>
    </div>
    </center>
  );
};

export default GownScanner;
