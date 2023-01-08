import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashCan} from '@fortawesome/free-solid-svg-icons';
import './Review.css';
const Review = (props) => {
    const {cartProduct, removeFromCart} = props;
    // console.log(cartProduct);
    const {id, img, name,} = cartProduct;
    return (
        <div className='cart-item'>
            <div className='cart-info'>
                <div>
                    <img src={img} alt="" />
                </div>
                <div className='cart-details-container'>
                    <div className='cart-details'>
                        <p className='name'>{name}</p>
                    </div>
                    <div className='deleteBtn'>
                        <button className='btn-delete' onClick={ ()=> removeFromCart(id)}><FontAwesomeIcon icon={faTrashCan}></FontAwesomeIcon></button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Review;