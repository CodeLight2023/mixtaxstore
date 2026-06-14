import { ShopCartContext } from './ShopCartContext'
import { useState } from "react"
import { products } from "../../data/data"
import useAlertContext from "../../hook/useAlertContext"
function ShopCartContextProvider(props) {
    const [selectedCategory, setSelectedCategory] = useState("All")
    const [cartItems, setCartItems] = useState([])
    const { showAlert } = useAlertContext()
    const handleSeleectedCategory = (cat) => {
        setSelectedCategory(cat)
    }
    // Creating an array of category from my product, so it going to select my product category and put it in an array, and remove all duplicate
    const category = ["All", ...new Set(products.map((product) => product.category)), "Men", "Women"]

    const filteredCategory = selectedCategory === "All" ? products : products.filter((product) => product.category == selectedCategory)

    const existingCartItem = (id) => {
        return cartItems.find(item => item.id === id)
    }
    
    const addToCart = (id) => {
        setCartItems((items) => {
            const existingItem = existingCartItem(items.id)
            const product = products.find(product => product.id === id)
            if(existingItem) {
                showAlert("error", "Item already exists in cart");
                return items
            } else {
                showAlert("success", "Successfully added to cart");
                return [...items, product]
            }
        })
    }

    // const removeFromCart = (id) => {
    //     setCartItems((items) => {
        
    //     })
    // }
    return (
        <ShopCartContext.Provider value={{selectedCategory, cartItems, handleSeleectedCategory, category, filteredCategory, addToCart, existingCartItem}}>
            {props.children}
        </ShopCartContext.Provider>
    )
}

export default ShopCartContextProvider