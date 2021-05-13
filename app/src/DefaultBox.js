import React from 'react';

export default function DefaultBox({ name }) {
  return (
    <div
      style={{
        backgroundColor: 'yellow',
        height: '200px',
        width: '200px',
        padding: '20px',
      }}
    >
      <p>This is `DefaultBox` from the `app` package</p>
      <p>Goodbye, {name}!</p>
    </div>
  );
}
