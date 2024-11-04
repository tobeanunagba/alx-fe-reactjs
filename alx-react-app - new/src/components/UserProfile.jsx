const UserProfile = (props) => {
    return (
      <div style={{ border: '1px solid gray', padding: '20px', margin: '15px', borderRadius: '8px' }}>
      <h2 style={{ color: 'blue', fontSize: '1.5em' }}>{props.name}</h2>
      <p>Age: <span style={{ fontWeight: 'bold', fontSize: '1.2em' }}>{props.age}</span></p>
     <p> Bio:{props.bio}</span></p>
    </div>
    );
  };
  
  export default UserProfile;
