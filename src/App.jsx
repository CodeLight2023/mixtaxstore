import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from "./pages/Home/Home"
import Navbar from "./components/Navbar/Navbar"
import NavbarContextProvider from "./context/NavbarContext/NavbarContextProvider"
import Account from "./components/Account/Account"
import AccountContextProvider from "./context/AccountContext/AccountContextProvider"
import AuthContextProvider from "./context/AuthContext/AuthContextProvider"
import AlertContextProvider from "./context/AlertContext/AlertContextProvider"
import ShopPage from "./pages/Shop/Shop"
function App() {

  return (
    <>
    <Router>
        <AlertContextProvider>
          <AuthContextProvider>
            <NavbarContextProvider>
              <AccountContextProvider>
                <Navbar />
                <div className="app">
                  <Routes>
                    <Route path="/" element={<Home />}></Route>
                    <Route path="/shop" element={<ShopPage />}></Route>
                    <Route path="/account" element={<Account />}></Route>
                  </Routes>
                </div>
              </AccountContextProvider>
            </NavbarContextProvider>
          </AuthContextProvider>
        </AlertContextProvider>
    </Router>
    </>
  )
}

export default App
