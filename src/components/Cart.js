
const Cart = ({cart, formatPrice,subtotal, tax ,total}) => {
    return (
        <section className="Cart">
            <h1>Cart</h1>
            <ul>
                {cart.map(product => {
                    const {name, price, id} = product
                    return (
                        <li key={id}>
                            {name}: {formatPrice(price)}
                        </li>
                    )
                })}
            </ul>
            <h3>Subtotal: {subtotal}</h3>
            <h3>Tax: {tax}</h3>
            <h3>Total: {total}</h3>
        </section>
    )
}

export default Cart