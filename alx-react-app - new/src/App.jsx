import WelcomeMessage from "./components/WelcomeMessage"
import Header from "./components/Header"
import Footer from "./components/Footer"
import UserProfile from "./components/UserProfile"
import Counter from "./components/Counter"
function App() {
  return (
    <>
      <div>
      <WelcomeMessage />
      <Header />
      <MainContent />
      <Footer />
      <UserProfile name="Alice" age="25" bio="Loves hiking and photography" />
      <h1 style={{ textAlign: 'center' }}>Counter Application</h1>
      <Counter />
      </div>
    </>
  )
}

export default App
