import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from "react-router-dom"
import Home from "./pages/Home/Home"
import NavbarContextProvider from "./context/NavbarContext/NavbarContextProvider"
import Account from "./components/Account/Account"
import AccountContextProvider from "./context/AccountContext/AccountContextProvider"
import AuthContextProvider from "./context/AuthContext/AuthContextProvider"
import AlertContextProvider from "./context/AlertContext/AlertContextProvider"
import ShopPage from "./pages/Shop/Shop"
import RootLayout from "./layout/RootLayout/RootLayout"
import Error from "./error/Error"
import Construction from "./pages/PageOnConstruction/Construction"

const router = createBrowserRouter (
  createRoutesFromElements (
    <Route path="/" element={<RootLayout />} errorElement={<Error />}>
      <Route index element={<Home />} />
      <Route path="shop" element={<ShopPage />} />
      <Route path="account" element={<Account />} />

      <Route path="*" element={<Construction />} />
    </Route>
  )
)
function App() {

  return (
    <>
      <AlertContextProvider>
        <AuthContextProvider>
          <NavbarContextProvider>
            <AccountContextProvider>
              <RouterProvider router={router} />
            </AccountContextProvider>
          </NavbarContextProvider>
        </AuthContextProvider>
      </AlertContextProvider>
    </>
  )
}

export default App
