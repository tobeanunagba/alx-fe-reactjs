import { createContext, useState } from 'react';

// Initialize the context
const UserContext = createContext();

// Create a provider component
export function UserProvider({ children }) {
  // Set up any default user data here or keep it flexible
  const [userData, setUserData] = useState({
    name: "Jane Doe",
    email: "jane.doe@example.com"
  });

  return (
    <UserContext.Provider value={userData}>
      {children}
    </UserContext.Provider>
  );
}

export default UserContext;
