import React from 'react';

function UserProfile({ name, age, bio }) {
  return (
    <div style={{ border: '1px solid gray', padding: '20px', margin: '15px', borderRadius: '8px' }}>
      <h2 style={{ color: 'blue', fontSize: '1.5em' }}>{name}</h2>
      <p>Age: <span style={{ fontWeight: 'bold', fontSize: '1.2em' }}>{age}</span></p>
      <p>Bio: <span style={{ color: 'darkslategray' }}>{bio}</span></p>
    </div>
  );
}

export default UserProfile;
