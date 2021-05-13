import React from 'react';

export default function ExtendedBox({ name }) {
  return (
    <div
      style={{
        backgroundColor: 'blue',
        color: 'white',
        height: '200px',
        width: '200px',
        padding: '20px',
      }}
    >
      <p>This is `ExtendedBox` component from `extensions` package.</p>
      <p>Hello, {name}!</p>
    </div>
  );
}
