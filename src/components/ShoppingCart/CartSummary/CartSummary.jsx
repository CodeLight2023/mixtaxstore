import useShopCart from "../../../hook/useShopCart"

function CartSummary() {
    const { cartItems, total } = useShopCart()
    return (
        <>
            <div className="cart-summary">
                <div className="cart-summary-box">
                    <div className="cart-summary-head">
                        <h2>Cart Summary</h2>
                    </div>
                    <div className="cart-summary-content">
                        <div className="item-sum">
                            <div className="item-head">
                                <h4>Item's Total ({cartItems.length})</h4>
                            </div>
                            <div className="item-price">
                                <h5>N{total}</h5>
                            </div>
                        </div>
                        <div className="subtotal">
                            <div className="subtotal-head">
                                <h4>Subtotal (3)</h4>
                            </div>
                            <div className="subtotal-price">
                                <h5>N50000</h5>
                            </div>
                        </div>
                        <div className="cart-summary-btn">
                            <button>Checkout (N{total})</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default CartSummary