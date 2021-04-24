import Product from "./Product"
import productData from "../data/productData"


const Products = ({formatPrice, addProduct}) => {
    return (
        <section className="Products">
            <h1>My Garage Sale</h1>
            <ul>
                {productData.map(product => {
                    return (
                    <Product
                        key={product.id}
                        product={product}
                        formatPrice={formatPrice}
                        addProduct={addProduct}
                    />
                    )
                })}
            </ul>
        </section>
    )
}

export default Products;