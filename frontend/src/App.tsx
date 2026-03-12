// frontend\src\App.tsx
// This is the main entry point for the React application. 
// It renders the Heading component and can be expanded to include more components as needed.

import Heading from './components/Heading'
import BowlerTable from './components/BowlerTable'
import Footer from './components/Footer'
import './App.css'

function App() {

  return (
    <>
      <Heading />
      <br />
      <BowlerTable />
      <br />
      <Footer />
    </>
  )
}

export default App
