const Product = ({product, addProduct, formatPrice}) => {
    const {name, price, img, description} = product
    return (
        <li>
            <h3>{name}</h3>
            <p>Price: {formatPrice(price)}</p>
            <img src={img} alt="picture"/>
            <p>{description}</p>
            <button onClick={() => addProduct(product)}>Add To Cart</button>
        </li>
    )
}

export default Product