import React from 'react';
import './App.css';

import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";
import SideNav from "./components/SideNav";
import HOCPageComponent from "./components/HOC";
import CompoundComponentsPageComponent from "./components/CompoundComponents";
import HooksPageComponent from "./components/Hooks";

function App() {

    let appComponent = (
        <div className="App">
            <Router>
                <div>
                    <SideNav></SideNav>
                    {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
                    <Switch>
                        <Route path="/hoc">
                            <HOCPageComponent/>
                        </Route>
                        <Route path="/compound">
                            <CompoundComponentsPageComponent/>
                        </Route>
                        <Route path="/hooks">
                            <HooksPageComponent/>
                        </Route>
                        <Route path="/">
                            <Home/>
                        </Route>
                    </Switch>
                </div>
            </Router>
        </div>
    );
    return appComponent;

}

function Home() {
    return <h2>Home</h2>;
}

export default App;
