import { Navigate, Route, Routes } from 'react-router-dom'
import Home from './Screens/Home'
import Test from './Components/Test'
import Services from './Screens/Services'
import BookNowFloat from './Components/BookNowFloat'
import Booking from './Components/Booking'
import Contact from './Screens/Contact'
import Header from './Components/HeaderLayout'
import Accommodation from './Screens/Accommodation'



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
          <Route path='/test' element={<Test />} />
          <Route path='/accommodations' element={<Accommodation />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
        <BookNowFloat />
      </main>
    </>
  )
}

export default App
