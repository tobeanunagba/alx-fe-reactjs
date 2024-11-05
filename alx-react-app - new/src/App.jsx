import React from 'react';
import Header from './components/Header'
import WelcomeMessage from './components/WelcomeMessage';
import UserProfile from './components/UserProfile';
import MainContent from './components/Maincontent';
import Footer from './components/Footer'
import Counter from './components/Counter';
function App() {
  return (
    <>
      <div>
        <Header />
       <WelcomeMessage />
        <MainContent />
        <UserProfile name="Alice" age="25" bio="Loves hiking and photography" />
       <Footer />
      <h1 style={{ textAlign: 'center' }}>Counter Application</h1>
      <Counter />
      </div>
    </>
  )
}

export default App
