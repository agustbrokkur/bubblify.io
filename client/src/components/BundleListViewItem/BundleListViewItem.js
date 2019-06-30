import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import BubbleDetail from "../BubbleDetail/BubbleDetail";
import bubbleService from "../../services/bubbleService";

const BundleListViewItem = (props) => {
    const { items, name } = props;
    return (
        <div className="card mb-3 bundle-card-container">
            <Link to={ "/bundles/" + props.id }>
                <h4 className="card-header">{ name }</h4>
            </Link>
            <div className="bundle-bubble-container">
                {
                    items.map((item, key) => <BubbleDetail key={ key } bubbleId={ item }/>)
                }
            </div>
            <div>
                <button type="button" className="btn btn-success" onClick={
                    function buyItem() {
                        items.map((item, key) => {
                            bubbleService.getBubbleById(item).then(data => {
                                if (localStorage.getItem("cart") === null) {
                                    var cart = []
                                } else {
                                    var cart = JSON.parse(localStorage.getItem('cart'));
                                }

                                if(cart.find(thing => thing.id == item) !== undefined) {
                                    var index = cart.findIndex(thing => thing.id == item);
                                    cart[index].volume += 1;
                                } else {
                                    cart.push({ id: data.id, name: data.name, price: data.price, volume: 1 });
                                }

                                localStorage.setItem("cart", JSON.stringify(cart));
                            });
                        });

                        console.log("Bundle", name, " added to the cart!")
                    }
                } >Buy bundle</button>
            </div>
        </div>
    );
};

BundleListViewItem.propTypes = {
    id: PropTypes.oneOfType([ PropTypes.string, PropTypes.number ]).isRequired,
    items: PropTypes.array.isRequired,
    name: PropTypes.string.isRequired
};

export default BundleListViewItem;
