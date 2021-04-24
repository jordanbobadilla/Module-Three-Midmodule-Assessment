import Product from "./Product"
import productData from "../data/productData"
import formatPrice from "../helpers/formatPrice"

const Products = ({addProduct}) => {
    return (
        <main className="Products">
            <h1>My Garage Sale</h1>
            <ul>
                {productData.map(product => {
                    return (
                    <Product
                        key={product.id}
                        name={product.name}
                        price={formatPrice(product.price)}
                        img={product.img}
                        description={product.description}
                        addProduct={addProduct}
                    />
                    )
                })}
            </ul>
        </main>
    )
}

export default Products;