import { Link } from 'react-router-dom'
import useAuthContext from '../../hook/useAuthContext'
import useShopCart from '../../hook/useShopCart'
import './ShoppingCart.css'
import { assets } from '../../data/data'
import ConfirmWarningPopup from '../AlertPopup/ConfirmWarningPopup'
import CartItem from './CartItem/CartItem'
import CartSummary from './CartSummary/CartSummary'

function ShoppingCart() {
    const { cartItems } = useShopCart()
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
                                    <CartItem />
                                    <CartSummary />
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