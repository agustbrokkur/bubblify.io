import React from "react";
import BundleListViewItem from "../BundleListViewItem/BundleListViewItem";
import { BundlesConsumer } from "../../context/BundlesContext";

const BundleListView = (props) => {
    return (
        <div className="bundle-container">
            <BundlesConsumer>
                {
                    bundlesContext => bundlesContext.map(item => <BundleListViewItem key={ item.id } { ...item } />)
                }
            </BundlesConsumer>
        </div>
    )
    return ;
};


export default BundleListView;
