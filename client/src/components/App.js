import React from 'react';
import { Switch, Route, Redirect } from "react-router-dom";
import NavigationBar from "./NavigationBar/NavigationBar";
import BubbleList from "./BubbleList/BubbleList";
import BubbleDetail from "./BubbleDetail/BubbleDetail";
import BundleList from "./BundleList/BundleList";
import BundleDetail from "./BundleDetail/BundleDetail";
import About from "./About/About";
import Cart from "./Cart/Cart";
import style from "../styles/site.css";

const App = () => {
    return (
        <div style={ style } className="contain-app">
            <NavigationBar />
            <div className="container">
                <Switch>
                    <Redirect exact from="/" to="/bubbles" />
                    <Route exact path ="/bubbles" component={ BubbleList } />
                    <Route exact path ="/bubbles/:bubbleId" component={ BubbleDetail } />
                    <Route exact path="/bundles" component={ BundleList } />
                    <Route exact path="/bundles/:bundleId" component={ BundleDetail } />
                    <Route exact path="/about" component={ About } />
                    <Route exact path="/cart" component={ Cart } />
                </Switch>
            </div>
        </div>
    )
};

export default App;
