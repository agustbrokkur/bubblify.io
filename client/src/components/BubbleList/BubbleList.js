import React from "react"
import ListView from "../ListView/ListView";
import bubbleService from "../../services/bubbleService";
import { BubblesProvider } from "../../context/BubblesContext";

class BubbleList  extends React.Component {
    componentDidMount() {
        bubbleService.getAllBubbles().then(data => this.setState({ bubbles: data }));
    }
    constructor(props) {
        super(props);
        this.state = {
            bubbles: []
        };
    }
    render() {
        return (
            <BubblesProvider value={ this.state.bubbles }>
                <ListView />
            </BubblesProvider>
        );
    }
};

export default BubbleList;
