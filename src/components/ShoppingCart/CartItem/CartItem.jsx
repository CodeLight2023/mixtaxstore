import { RiDeleteBinLine } from "react-icons/ri"
import useShopCart from "../../../hook/useShopCart"
import { Link } from "react-router-dom"

function CartItem() {
    const { cartItems, showConfirmAlert, handleQuantityIncrement, handleQuantityDecrement } = useShopCart()
    return (
        <>
            <div className="cart-item">
                {cartItems.map((item) => (
                    <div className="cart" key={item.id}>
                        <div className="cart-info">
                            <div className="cart-img">
                                <img src={item.image} alt={item.name} title={item.name} loading='lazy' />
                            </div>
                            <div className="cart-details">
                                <h2>
                                    <Link to={`/shop/${item.id}`}>
                                        {item.name}
                                    </Link>
                                    {item.quantity > 1 && (
                                        <span>x {item.quantity}</span>
                                    )}
                                </h2>
                                <div className="category">{item.category}</div>
                                <p>{item.description.slice(0, 20) + "..."}</p>
                            </div>
                        </div>
                        <div className="cart-quanp">
                            <div className="price">
                                <h4>N{item.quantity * item.price}</h4>
                            </div>
                            <div className="quantity">
                                <button className='remove' onClick={() => handleQuantityDecrement(item.id)}>-</button>
                                <span>{item.quantity}</span>
                                <button className='add' onClick={() => handleQuantityIncrement(item.id)}>+</button>
                            </div>
                        </div>
                        <div className="cart-del">
                            <button onClick={() => showConfirmAlert("error", "Are you sure, you want to delete?", item.id)}>
                                <RiDeleteBinLine />
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </>
    )
}
export default CartItem