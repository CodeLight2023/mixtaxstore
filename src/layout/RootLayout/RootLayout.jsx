import { Outlet } from 'react-router-dom'
import Navbar from '../../components/Navbar/Navbar'

function RootLayout() {
  return (
    <>
        <Navbar />
        <div className="app">
            <Outlet />
        </div>
    </>
  )
}

export default RootLayout