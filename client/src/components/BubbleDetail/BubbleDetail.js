import React from "react";
import ListViewItem from "../ListViewItem/ListViewItem";
import bubbleService from "../../services/bubbleService";


class BubbleDetail extends React.Component {
    componentDidMount() {
        var getId = this.props.bubbleId !== undefined ? this.props.bubbleId : this.props.match.params.bubbleId;
        bubbleService.getBubbleById(getId).then(data => this.setState({ bubbleItem: data, bundle: true }));;
    }
    constructor(props) {
        super(props);
        this.state = {
            bubbleItem: {},
            bundle: false
        };
    }
    render() {
        if (!this.state.bubbleItem.id) {
            return (
                <h1>404 NOT FOUND</h1>
            );
        }
        if (this.state.bundle) {
            return (
                <ListViewItem key={ this.state.bubbleItem.id } { ...this.state.bubbleItem } bundle={this.state.bundle} />
            );
        } else {
            return (
                <div className="sub-container">
                    <ListViewItem key={ this.state.bubbleItem.id } { ...this.state.bubbleItem } />
                </div>
            );
        }
    }
};

export default BubbleDetail;
