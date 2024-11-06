import React from 'react';
import Header from './components/Header';
import WelcomeMessage from './components/WelcomeMessage';
import UserProfile from './components/UserProfile';
import MainContent from './components/MainContent';
import Footer from './components/Footer'
import Counter from './components/Counter';
function App() {
  return (
    <>
      <div>
      <WelcomeMessage />
      <Header />
      <MainContent />
      <UserProfile name="Alice" age="25" bio="Loves hiking and photography" />
      <Footer />
      
      <Counter />
      </div>
    </>
  )
}

export default App
