import React, { useState } from "react";
import "./Confirmation.css";

function Confirmation() {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  return (
    <div className="checkbox-container">
      <label className="checkbox-label">
        <input
          type="checkbox"
          checked={isChecked}
          onChange={handleCheckboxChange}
        />
        <span className="checkmark"></span>
        I agree to donate my organs
      </label>
    </div>
  );
}

export default Confirmation;
