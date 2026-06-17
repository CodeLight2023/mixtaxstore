import { Link } from 'react-router-dom'
import useAuthContext from '../../hook/useAuthContext'
import useShopCart from '../../hook/useShopCart'
import './ShoppingCart.css'
import { assets } from '../../data/data'
import { RiDeleteBinLine } from "react-icons/ri";
import ConfirmWarningPopup from '../AlertPopup/ConfirmWarningPopup'

function ShoppingCart() {
    const { cartItems, showConfirmAlert, handleQuantityIncrement, handleQuantityDecrement } = useShopCart()
    const { currentUser } = useAuthContext()

    return (
        <div>
            {currentUser ? (
                cartItems.length == 0 ? (
                    <div className="empty">
                        <img src={assets.empty} alt="No result found" />
                    </div>
                ) : (
                    <>
                        <div className="shoppinngCartContainer">
                            <div className="shoppingCart">
                                <div className="cart-head">
                                    <h2>Cart <span>({cartItems.length})</span></h2>
                                </div>
                                <div className="cart-container">
                                    <div className="cart-item">
                                        {cartItems.map((item) => (
                                            <div className="cart" key={item.id}>
                                                <div className="cart-info">
                                                    <div className="cart-img">
                                                        <img src={item.image} alt={item.name} title={item.name} loading='lazy' />
                                                    </div>
                                                    <div className="cart-details">
                                                        <h2>
                                                            {item.name}
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
                                    <div className="cart-summary">
                                        
                                    </div>
                                </div>
                            </div>
                        </div>
                        <ConfirmWarningPopup />
                    </>
                )
            ): (
                <div className="notloggedin">
                    <div className="notloggedinBox">
                        <h2>Please Signup/Login to continue</h2>
                        <div className="acct-link">
                            <Link to='/account'>Continue</Link>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}

export default ShoppingCart