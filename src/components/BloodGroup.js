import React, { useState } from 'react';
import './BloodGroup.css'; // import CSS file for styling

function BloodGroup() {
  const [bloodGroup, setBloodGroup] = useState(''); // initialize state for blood group

  // function to handle checkbox change event
  function handleCheckboxChange(e) {
    setBloodGroup(e.target.value); // set state to the value of the checkbox
  }

  return (
    <div>
      <label>Choose your blood group:</label>
      <br />
      <div className="checkbox-container">
        <label>
          <input 
            type="checkbox" 
            value="A+" 
            checked={bloodGroup === 'A+'} 
            onChange={handleCheckboxChange} 
          />
          A+
        </label>
        
        <label>
          <input 
            type="checkbox" 
            value="A-" 
            checked={bloodGroup === 'A-'} 
            onChange={handleCheckboxChange} 
          />
          A-
        </label>
        <label>
          <input 
            type="checkbox" 
            value="B+" 
            checked={bloodGroup === 'B+'} 
            onChange={handleCheckboxChange} 
          />
          B+
        </label>
        <label>
          <input 
            type="checkbox" 
            value="B-" 
            checked={bloodGroup === 'B-'} 
            onChange={handleCheckboxChange} 
          />
          B-
        </label>
      </div>
    </div>
  );
}

export default BloodGroup;
