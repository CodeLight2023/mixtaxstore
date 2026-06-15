import { assets } from '../../data/data'
import useAuthContext from '../../hook/useAuthContext'
import useShopCart from '../../hook/useShopCart'
import './ShoppingCart.css'

function ShoppingCart() {
    const { cartItems } = useShopCart()
    const { currentUser } = useAuthContext()
    return (
        <div>
            {currentUser ? (
                cartItems.map(item => (
                    <div key={item.id}>
                        <p>{item.id}</p>
                        <p>{item.name}</p>
                        <p>{item.category}</p>
                        <p>{item.price}</p>
                    </div>
                ))
            ): (
                <div className="empty">
                    <img src={assets.empty} alt="No result found" />
                </div>
            )}
        </div>
    )
}

export default ShoppingCart