import { useParams } from "react-router-dom"
import useShopCart from "../../hook/useShopCart"
import './CartItemView.css'
import { assets, products } from "../../data/data"
import useAuthContext from "../../hook/useAuthContext"
import ConfirmWarningPopup from "../AlertPopup/ConfirmWarningPopup"
import { Helmet } from "react-helmet-async"


function CartItemView() {
  const {cartItems, handleQuantityIncrement, addToCart, showConfirmAlert, existingCartItem, handleQuantityDecrement } = useShopCart()

  const { currentUser } = useAuthContext()

  const { urlId } = useParams()

  const product = products.find(
    // the essence of the Number() is to convert the urlId to a number if it is in string i.e item.id = 1, urlId = "1", then 1 != "1", so when we convert the urlId to number it's make the item.id and urlId to match.
    (item) => item.id === Number(urlId)
  );

  const getQuantity = (id) => {
    const item = cartItems.find((item) => item.id === id);
    return item ? item.quantity : 0;
  };

  if (!product) {
    return (
      <div className="empty">
          <img src={assets.empty} alt="No result found" />
      </div>
    );
  }

  return (
    <>
      <Helmet>
          <title>{`${product.name} | Mixtax Store`}</title>
      </Helmet>
      
      <div className="cartViewContainer">
          <div className="cart-head">
              <h2>Product Details</h2>
          </div>
          <div className="cart-item">
                <div className="cart" key={product.id}>
                    <div className="cart-info">
                        <div className="cart-img">
                            <img src={product.image} alt={product.name} title={product.name} loading='lazy' />
                        </div>
                        <div className="cart-details">
                          <div className="cart-dinf">
                              <h2>
                                {product.name}
                                {getQuantity(product.id) > 1 && (
                                    <span>x {getQuantity(product.id)}</span>
                                )}
                              </h2>
                              <div className="category">{product.category}</div>
                                <p>{product.description}</p>
                                <div className="btn">
                                    {currentUser ? (
                                        existingCartItem(product.id) ? (
                                            <button className="delete" onClick={() => showConfirmAlert("error", "Are you sure, you want to delete?", product.id)}>Remove From Cart</button>
                                        ) : (
                                            <button onClick={() => addToCart(product.id)}>Add to Cart</button>
                                        )
                                    ) : (
                                        <button onClick={() => addToCart(product.id)}>Add to Cart</button>
                                    )} 
                              </div>
                          </div>
                          <div className="cart-quanp">
                              <div className="price">
                                  <h4>N{getQuantity(product.id) * product.price}</h4>
                              </div>
                              <div className="quantity">
                                  <button className='remove' onClick={() => handleQuantityDecrement(product.id)}>-</button>
                                  <span>{getQuantity(product.id)}</span>
                                  <button className='add' onClick={() => handleQuantityIncrement(product.id)}>+</button>
                              </div>
                          </div>
                        </div>
                    </div>
                </div>
          </div>
      </div>

      <ConfirmWarningPopup />
    </>
  )
}

export default CartItemView