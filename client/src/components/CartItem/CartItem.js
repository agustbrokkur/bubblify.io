import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const CartItem = (props) => {
    const { id, name, price, volume } = props;
    return (
        <div className="card">
          <div className="card-body">
            <h4 className="card-title">{ name }</h4>
            <p className="card-text"><strong>Price: { price } kr.</strong></p>
            <p className="card-text"><strong>Volume: x{ volume }</strong></p>
            <Link to={ "/bubbles/" + props.id }>Item details</Link>
            <div>
                <button type="button" className="btn btn-primary buy-button">Checkout</button>
                <button type="button" className="btn btn-danger cart-remove-button" onClick={
                    function removeItem() {
                        var cart = JSON.parse(localStorage.getItem('cart'));
                        var item = cart.find(item => item.id == id);
                        var index = cart.findIndex(item => item.id == props.id);

                        if(item.volume > 1) {
                            cart[index].volume -= 1;
                        } else {
                            cart.splice(index, 1);
                        }
                        localStorage.setItem("cart", JSON.stringify(cart));
                        props.action();
                    }
                } >Remove from cart</button>
            </div>
          </div>
        </div>
    );
};

CartItem.propTypes = {
    id: PropTypes.oneOfType([ PropTypes.string, PropTypes.number ]).isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired
};

export default CartItem;
