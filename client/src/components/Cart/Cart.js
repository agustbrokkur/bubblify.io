import React from 'react';
import CartItem from "../CartItem/CartItem";
import { BubblesConsumer } from "../../context/BubblesContext";


class Cart extends React.Component {
    componentDidMount() {
        if(localStorage.getItem("cart") !== null)
        {
            this.setState({ cart: JSON.parse(localStorage.getItem("cart")) });
        }
    }

    constructor(props) {
        super(props);
        this.handler = this.handler.bind(this);
        this.state = {
            cart: []
        };
    }

    handler() {
        this.setState({ cart: JSON.parse(localStorage.getItem("cart")) });
    }

    render() {
        return (
            <div className="jumbotron">
                <h3 className="display-4">Your shopping cart:</h3>
                {
                    this.state.cart.map(item => <CartItem action={ this.handler } key={ item.id } { ...item } />)
                }
            </div>
        );
    }
};

export default Cart;
