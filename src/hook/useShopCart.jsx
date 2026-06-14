import { useContext } from "react"
import { ShopCartContext } from "../context/ShopCartContext/ShopCartContext"


function useShopCart() {
  return useContext(ShopCartContext)
}

export default useShopCart