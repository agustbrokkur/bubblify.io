import React from "react"
import BundleListView from "../BundleListView/BundleListView";
import bundleService from "../../services/bundleService";
import { BundlesProvider } from "../../context/BundlesContext";

class BundleList  extends React.Component {
    componentDidMount() {
        bundleService.getAllBundles().then(data => this.setState({ bundles: data }));
    }
    constructor(props) {
        super(props);
        this.state = {
            bundles: []
        };
    }
    render() {
        return (
            <BundlesProvider value={ this.state.bundles }>
                <BundleListView />
            </BundlesProvider>
        );
    }
};

export default BundleList;
