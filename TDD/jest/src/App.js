import React, { useState } from 'react';

function App() {
  const [buttonColor, setButtonColor] = useState('red');
  const newColor = buttonColor === 'red' ? 'blue' : 'red';

  return (
    <button
      style={{ backgroundColor: buttonColor }}
      onClick={(e) => {
        setButtonColor(newColor);
      }}
    >
      change to {newColor}!
    </button>
  );
}

export default App;
