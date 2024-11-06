import WelcomeMessage from './Components/WelcomeMessage';
import Header from './Components/Header';
import MainContent from './Components/MainContent';
import UserProfile from './Components/UserProfile';
import Footer from './Components/Footer';
import { useState } from 'react';

function Counter(){
  const [count, setCount] = useState(0)
  return (
    <>
    <div>
      <Header />
      <WelcomeMessage />
      <MainContent />
      <UserProfile name="Alice" age="25" bio="Loves hiking and photography" />
      <p>Current Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setCount(count - 1)}>Decrement</button>
      <button onClick={() => setCount(0)}>Reset</button>
      <Footer />
    </div>
    </>
  );
}

export default Counter;
