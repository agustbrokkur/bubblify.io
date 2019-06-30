import React from "react";
import ListViewItem from "../ListViewItem/ListViewItem";
import { BubblesConsumer } from "../../context/BubblesContext";

const ListView = (props) => {
    return (
        <div className="sub-container">
            <BubblesConsumer>
                {
                    bubblesContext => bubblesContext.map(item => <ListViewItem key={ item.id } { ...item } />)
                }
            </BubblesConsumer>
        </div>
    )
    return ;
};


export default ListView;
