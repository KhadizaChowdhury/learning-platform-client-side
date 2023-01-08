import React, { useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { deleteShoppingCart, removeFromDb } from '../../utilities/fakeDB';
import Cart from '../Cart/Cart';
import Review from '../ReviewCart/Review';
import './Order.css'

const Order = () => {
    const { products, previousCart } = useLoaderData();
    const [cart, setCart] = useState(previousCart);
    const removeFromCart = (id) => {
        // console.log(id);
        const remaining = cart.filter(product => product.id !== id)
        setCart(remaining);
        removeFromDb(id);
    }

    const clearCart = () => {
        setCart([]);
        deleteShoppingCart();
    }

    return (
        <div className="cart_cont">
            <div className='carts'>
                {/* <h2>Total Products:{products.length}</h2> */
                    cart.map(cartProduct => <Review
                        key={cartProduct.id}
                        cartProduct={cartProduct}
                        removeFromCart={removeFromCart}
                    ></Review>)
                }
                {previousCart.length === 0 && <h2>No items added. PLease <Link to={"/shop"}>Shop Now</Link></h2>}
            </div>
            <div>
                <h4>Added products in Cart:{previousCart.length}</h4>
                <Cart clearCart={clearCart} cart={cart}>
                    <Link to={"/shipping"}>
                        <button>Shipping</button>
                    </Link>
                </Cart>
            </div>
        </div>
    );
};

export default Order;