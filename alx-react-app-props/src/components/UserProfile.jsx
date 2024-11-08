import React ,{ useContext } from "react"
import UserContext from "../components/UserContext"

const UserProfile = ({ name, age, bio }) => {
    return (

<div style={{ border: '1px solid gray', padding: '10px', margin: '10px' }}>
   <h2 style={{ color: 'blue' }}>{name}</h2>
   <p>Age: 26 <span style={{ fontWeight: 'bold' }}>{age}</span></p>
   <p>Bio: Loves travel and photography {bio}</p>
   <UserContext/>
 </div>

);
};

export default UserProfile;