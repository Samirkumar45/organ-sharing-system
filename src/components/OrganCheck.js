// import React, { useState } from 'react';
// import Checkboxfrom './OrganCheck.css';

// const hobbies = [
//   { label: 'Reading', isSelected: false },
//   { label: 'Gaming', isSelected: false },
//   // { label: 'Traveling', isSelected: false },
//   { label: 'Cooking', isSelected: false },
// ];

// const OrganCheck = () => {
//   const [selectedHobbies, setSelectedHobbies] = useState(hobbies);

//   const handleCheckboxChange = (label) => {
//     const updatedHobbies = selectedHobbies.map((hobby) =>
//       hobby.label === label
//         ? { ...hobby, isSelected: !hobby.isSelected }
//         : hobby
//     );
//     setSelectedHobbies(updatedHobbies);
//   };

//   return (
//     <div>
//       {selectedHobbies.map((hobby) => (
//         <Checkbox
//           key={hobby.label}
//           label={hobby.label}
//           isSelected={hobby.isSelected}
//           onCheckboxChange={() => handleCheckboxChange(hobby.label)}
//         />
//       ))}
//     </div>
//   );
// };

// export default OrganCheck;
