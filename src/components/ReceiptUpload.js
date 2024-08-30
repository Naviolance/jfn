
import React, { useState } from 'react';

const ReceiptUpload = () => {
  const [receipt, setReceipt] = useState(null);

  const handleFileChange = (e) => {
    setReceipt(e.target.files[0]);
  };

  const submitReceipt = () => {
    if (receipt) {
      alert(`Receipt ${receipt.name} uploaded!`);
      setReceipt(null);
    }
  };

  return (
    <center>
    <div>
      <h2>Upload Payment Receipt</h2>
      <input type="file" onChange={handleFileChange} />
      <button onClick={submitReceipt}>Upload</button>
    </div>
    </center>
  );
};

export default ReceiptUpload;
