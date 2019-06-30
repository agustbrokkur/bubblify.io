import React from "react";
import BundleListView from "../BundleListView/BundleListView";
import bundleService from "../../services/bundleService";
import { BundlesProvider } from "../../context/BundlesContext";


class BundleDetail extends React.Component {
    componentDidMount() {
        bundleService.getBundleById(this.props.match.params.bundleId).then(data => this.setState({ bundleItem: data }));;
    }
    constructor(props) {
        super(props);
        this.state = {
            bundleItem: {},
        };
    }
    render() {
        if (!this.state.bundleItem.id) {
            return (
                <h1>404 NOT FOUND</h1>
            );
        }
        return (
            <BundlesProvider value={ [this.state.bundleItem] }>
                <BundleListView />
            </BundlesProvider>
        );

    }
};

export default BundleDetail;
