import React from 'react';
import { useMouseLocation } from '../hooks/useMouseLocation';

export default function TestBox() {
  const location = useMouseLocation();
  return (
    <div
      style={{
        width: '100px',
        height: '100px',
        backgroundColor: location.y > 200 ? 'royalblue' : 'tomato',
      }}
    >
      TestBox
    </div>
  );
}
