import { ShopCartContext } from './ShopCartContext'
import { useState } from "react"
import { products } from "../../data/data"
import useAlertContext from "../../hook/useAlertContext"
import useAuthContext from '../../hook/useAuthContext'
function ShopCartContextProvider(props) {
    const [selectedCategory, setSelectedCategory] = useState("All")
    const [cartItems, setCartItems] = useState(() => {
        return JSON.parse(localStorage.getItem("cartContent")) || [];
    })
    const { showAlert } = useAlertContext()
    const [ConfirmAlertType, setConfirmAlertType] = useState(null);
    const [ConfirmAlertMsg, setConfirmAlertMsg] = useState(null);
    const [ConfirmAlertActiveProductId, setConfirmAlertActiveProductId] = useState(null);
    const cartQuantity = cartItems.length;
    const { currentUser } = useAuthContext()

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
        const currentUserName = currentUser ? currentUser.fullName : "Guest";
        const cartContent = JSON.parse(localStorage.getItem("cartContent")) || []
        const existingItem = cartContent.find(item => item.id == id && item.user == currentUserName)
        const product = products.find(product => product.id === id)
        if(!product) return;

        if (!currentUser) {
            showAlert("error", "Please log in to add items to the cart");
            return;
        }

        if(existingItem) {
            showAlert("error", "Item already exists in cart");
            return;
        }
        const newCartItem = {...product, user: currentUserName, quantity: 1}
        const updatedCartContent = [...cartContent, newCartItem];
        
        localStorage.setItem("cartContent", JSON.stringify(updatedCartContent));
        setCartItems((prevItems) => [...prevItems, newCartItem]);
        showAlert("success", "Successfully added to cart");
    }

    const removeFromCart = (id) => {
        setCartItems((items) => {
            return items.filter((item) => item.id !== id);
        })

        const cartContent = JSON.parse(localStorage.getItem("cartContent")) || [];
        const updatedCartContent = cartContent.filter((item) => item.id !== id);
        localStorage.setItem("cartContent", JSON.stringify(updatedCartContent));

        setConfirmAlertType(null);
        setConfirmAlertMsg(null);
        showAlert("success", "Successfully Removed from cart");
        
    }

    const handleQuantityIncrement = (id) => {
        const currentUserName = currentUser?.fullName || "Guest";

        const cartContent = JSON.parse(localStorage.getItem("cartContent")) || [];

        const updatedCart = cartContent.map(item => {

            if(item.id == id && item.user == currentUserName) {
                return {
                    ...item,
                    quantity: item.quantity + 1
                };
            }
            return item;

        });

        setCartItems(updatedCart)

        localStorage.setItem("cartContent", JSON.stringify(updatedCart));
    };

    const handleQuantityDecrement = (id) => {
        const currentUserName = currentUser?.fullName || "Guest";

        const cartContent = JSON.parse(localStorage.getItem("cartContent")) || [];
        const item = cartContent.find(
            i => i.id === id && i.user === currentUserName
        );

        if (!item) return;

        if (item.quantity === 1) {
            showConfirmAlert(
                "error",
                "Are you sure you want to delete?",
                id
            );
            return;
        }
        
        const updatedCart = cartContent.map(currentItem => {
            if (currentItem.id == id && currentItem.user == currentUserName) {
                return {...currentItem, quantity: currentItem.quantity - 1};
            } 
            return currentItem
        });

        const filteredCart = updatedCart.filter(
            item => item.quantity > 0
        );

        setCartItems(filteredCart);
        localStorage.setItem("cartContent",JSON.stringify(filteredCart));

    }

    
    const showConfirmAlert = (type, msg, id) => {
        setConfirmAlertType(type);
        setConfirmAlertMsg(msg);
        setConfirmAlertActiveProductId(id);

        // auto hide after 10s
        setTimeout(() => {
            setConfirmAlertType(null);
            setConfirmAlertMsg(null);
            setConfirmAlertActiveProductId(null);
        }, 12000);
    };
    
    const closeConfirmAlert = () => {
        setConfirmAlertType(null);
        setConfirmAlertMsg(null);
        setConfirmAlertActiveProductId(null);
    }
    return (
        <ShopCartContext.Provider value={{ cartQuantity, selectedCategory, cartItems, handleSeleectedCategory, category, filteredCategory, addToCart, existingCartItem, handleQuantityIncrement, handleQuantityDecrement, removeFromCart, showConfirmAlert, closeConfirmAlert, ConfirmAlertMsg, ConfirmAlertType, ConfirmAlertActiveProductId}}>
            {props.children}
        </ShopCartContext.Provider>
    )
}

export default ShopCartContextProvider