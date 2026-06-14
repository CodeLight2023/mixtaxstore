import useShopCart from '../../hook/useShopCart'
import './ShoppingCart.css'

function ShoppingCart() {
    const { cartItems } = useShopCart()
    return (
        <div>
            {cartItems.map(item => (
                <div>
                    <p>{item.id}</p>
                    <p>{item.name}</p>
                    <p>{item.category}</p>
                    <p>{item.price}</p>
                </div>
            ))}
        </div>
    )
}

export default ShoppingCart