import { Link } from "react-router-dom"
import { assets } from "../../data/data"
import useAuthContext from "../../hook/useAuthContext"
import useShopCart from "../../hook/useShopCart"
import ConfirmWarningPopup from "../AlertPopup/ConfirmWarningPopup"
import './Shop.css'
function Shop() {
    
    const { category, selectedCategory, handleSeleectedCategory, filteredCategory, addToCart, existingCartItem, showConfirmAlert} = useShopCart()

    const { currentUser } = useAuthContext()

    
    return (
        <>
            <section id="shop">
                <div className="heading">
                    <h1>Shop</h1>
                </div>
                <div className="shop-filter">
                    {category.map((cat, index) => (
                        <button key={index} onClick={() => handleSeleectedCategory(cat)} className={cat == selectedCategory ? 'active' : ''}>{cat}</button>
                    ))}
                </div>
                <div className="product-container">
                    {filteredCategory.length > 0 ? (
                        filteredCategory.map((product) => (
                            <div className="products" key={product.id}>
                                <div className="category">
                                    <h5>{product.category}</h5>
                                </div>
                                <div className="product-img">
                                    <img src={product.image} alt={product.image} draggable='false' loading="lazy" />
                                </div>
                                <div className="product-details">
                                    <h2><Link to={`/shop/${product.id}`}>{product.name}</Link></h2>
                                    <p>{product.description}</p>
                                    <div className="price">
                                        <h3>NGN{product.price}</h3>
                                    </div>
                                </div>
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
                        ))
                    ) : (
                        <div className="empty">
                            <img src={assets.empty} alt="No result found" />
                        </div>
                    )}
                </div>
            </section>

            <ConfirmWarningPopup />
        </>
    )
}
export default Shop