const Product = ({name, price, img, description, addProduct}) => {
    return (
        <li>
            <h3>{name}</h3>
            <p>Price: {price}</p>
            <img src={img} alt="picture"/>
            <p>{description}</p>
            <button>Add To Cart</button>
        </li>
    )
}

export default Product