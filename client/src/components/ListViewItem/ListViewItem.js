import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const ListViewItem = (props) => {
    const { description, image, name, price, bundle } = props;
    return (
        <div className="card mb-3 custom-card-order">
            <h4 className="card-header">{ name }</h4>
            <Link to={ "/bubbles/" + props.id }><img src={ image } alt="Card image" /></Link>
            <div className="card-body">
                <p className="card-text">{ description }</p>
            </div>
            <div className="card-footer text-muted">
              Price: { price } kr.
            </div>
            {
                bundle
                ? <div></div>
                : <button type="button" className="btn btn-success" onClick={
                    function buyItem() {
                        if (localStorage.getItem("cart") === null) {
                            var cart = []
                        } else {
                            var cart = JSON.parse(localStorage.getItem('cart'));
                        }

                        if(cart.find(item => item.id == props.id) !== undefined) {
                            var index = cart.findIndex(item => item.id == props.id);
                            cart[index].volume += 1;
                        } else {
                            cart.push({ id: props.id, name: name, price: price, volume: 1 });
                        }

                        localStorage.setItem("cart", JSON.stringify(cart));
                        console.log("Added", name, "to the cart!")
                    }
                 } >Buy</button>
            }

        </div>
    );
};

ListViewItem.propTypes = {
    id: PropTypes.oneOfType([ PropTypes.string, PropTypes.number ]).isRequired,
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired
};

export default ListViewItem;
