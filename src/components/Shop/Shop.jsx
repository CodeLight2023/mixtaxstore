import { useState } from "react"
import { assets, products } from "../../data/data"
import './Shop.css'
function Shop() {
    const [selectedCategory, setSelectedCategory] = useState("All")
    const handleSeleectedCategory = (cat) => {
        setSelectedCategory(cat)
    }
    // Creating an array of category from my product, so it going to select my product category and put it in an array, and remove all duplicate
    const category = ["All", ...new Set(products.map((product) => product.category)), "Men", "Women"]

    const filteredCategory = selectedCategory === "All" ? products : products.filter((product) => product.category == selectedCategory)
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
                                    <button>Add to Cart</button>
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