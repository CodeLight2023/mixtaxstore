import { assets } from "../../data/data"
import useShopCart from "../../hook/useShopCart"
import './Shop.css'
function Shop() {
    
    const { category, selectedCategory, handleSeleectedCategory, filteredCategory, addToCart, existingCartItem} = useShopCart()
    
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
                                    <h2>{product.name}</h2>
                                    <p>{product.description}</p>
                                    <div className="price">
                                        <h3>NGN{product.price}</h3>
                                    </div>
                                </div>
                                <div className="btn">
                                    {existingCartItem(product.id) ? (
                                        <button class="delete" onClick={() => removeFromCart(product.id)}>Remove From Cart</button>
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
        </>
    )
}
export default Shop