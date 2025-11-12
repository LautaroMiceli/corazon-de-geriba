import { Navigate, Route, Routes } from 'react-router-dom'
import Home from './Screens/Home'
import Services from './Screens/Services'
import BookNowFloat from './Components/BookNowFloat'
import Booking from './Components/Booking'
import Contact from './Screens/Contact'
import Header from './Components/HeaderLayout'
import Accommodation from './Screens/Accommodation'
import Test from './Screens/Test'



function App() {
  return (
    <>
      <Header />
      <main className='flex flex-col flex-1 bg-yellow-50'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/booking' element={<Booking />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/services' element={<Services />} />
          <Route path='/accommodations' element={<Accommodation />} />
          <Route path="*" element={<Navigate to="/" replace />} />
          {/* <Route path='/test' element={<Test />} /> */}
        </Routes>
        <BookNowFloat />
      </main>
    </>
  )
}

export default App
