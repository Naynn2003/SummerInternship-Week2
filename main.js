import React from 'react';

function MyComponent() {
  // Define an object map
  const objectMap = {
    key1: 'Value 1',
    key2: 'Value 2',
    key3: 'Value 3',
  };

  // Access values from the object map
  const value1 = objectMap.key1;
  const value2 = objectMap.key2;
  const value3 = objectMap.key3;

  return (
    <div>
      <h1>Object Map Example</h1>
      <ul>
        <li>{value1}</li>
        <li>{value2}</li>
        <li>{value3}</li>
      </ul>
    </div>
  );
}

export default MyComponent;
