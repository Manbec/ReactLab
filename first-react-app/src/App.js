import React, {forwardRef, useMemo} from 'react';
import logo from './logo.svg';
import './App.css';

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import makeStyles from "@material-ui/core/styles/makeStyles";
import SideNav from "./components/SideNav";
import HOCPageComponent from "./components/HOC";
import CompoundComponentsPageComponent from "./components/CompoundComponents";
import HooksPageComponent from "./components/Hooks";

const useStyles = makeStyles((theme) => ({
    title: {    
        flexGrow: 1,
    },
}));

function App() {

    const classes = useStyles();

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
