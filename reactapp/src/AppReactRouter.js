import React, {Component} from 'react';
//import {BrowserRouter as Router,Route} from "react-router-dom";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link, useParams
} from "react-router-dom";
import NavBar from "./layout/NavBar";

import Home from "./components/Home";
import About from "./components/About";
import Dashboard from "./components/Dashboard";
import AppState from "./AppState";
import AddUser from "./forms/AddUser";
import AppStateEventChangeElementss from "./AppStateEventChangeElementss";
import NotFound from "./pages/NotFound";//404 Sayfası
import Contribute from "./pages/Contribute";//Contrubute sayfası
import updateUser from "./forms/updateUser";


const ilkComponentim = () => {
    return (
        <h3>İlk Ayrı Componentim</h3>
    )
}
const ikinciComponentim = () => {
    return (
        <h3>ikinciComponentim Componentim</h3>
    )
}

class AppReactRouter extends Component {
    render() {
        return (

            <Router>
                <div className="container">
                    <NavBar title="User App"/>
                    <hr/>
                    <Switch>
                        {/*Sadece istedigimiz endpoint sayfalarına gitsin diye switch kullanıyorum*/}
                        <Route exact path="/" component={AppStateEventChangeElementss}/>
                        <Route exact path="/add" component={AddUser}/>
                        <Route exact path="/github" component={Contribute}/>

                        <Route exact path="/edit/:id" component={updateUser}/>
                        {/*Üstte yazdıgım path lerden başka bir sayfa yazarsa
                        default notfound sayfasına 404.html gitsin diyorum*/}
                        <Route component={NotFound}/>

                    </Switch>


                </div>
                {/*<Route exact path="/" component={ilkComponentim}/>*/}
                {/*<Route exact path="/about" component={ikinciComponentim}/>*/}

                {/*        <div>*/}
                {/*            <ul>*/}
                {/*                <li>*/}
                {/*                    <Link to="/">Home</Link>*/}
                {/*                </li>*/}
                {/*                <li>*/}
                {/*                    <Link to="/about">About</Link>*/}
                {/*                </li>*/}
                {/*                <li>*/}
                {/*                    <Link to="/dashboard">Dashboard</Link>*/}
                {/*                </li>*/}
                {/*                /!*<li>*!/*/}
                {/*                /!*    <Link to="/AddUser">AddUser</Link>*!/*/}
                {/*                /!*</li>*!/*/}
                {/*                <li>*/}
                {/*                    <Link to="/navbar">Navbar</Link>*/}
                {/*                </li>*/}
                {/*            </ul>*/}

                {/*            <hr/>*/}

                {/*            /!**/}
                {/*  A <Switch> looks through all its children <Route>*/}
                {/*  elements and renders the first one whose path*/}
                {/*  matches the current URL. Use a <Switch> any time*/}
                {/*  you have multiple routes, but you want only one*/}
                {/*  of them to render at a time*/}
                {/**!/*/}
                {/*            <Switch>*/}
                {/*                <Route exact path="/">*/}
                {/*                    <Home/>*/}
                {/*                </Route>*/}
                {/*                <Route path="/about">*/}
                {/*                    <About/>*/}
                {/*                </Route>*/}
                {/*                <Route path="/dashboard">*/}
                {/*                    <Dashboard/>*/}
                {/*                </Route>*/}
                {/*                /!*<Route path="/AddUser">*!/*/}
                {/*                /!*    <AddUser />*!/*/}
                {/*                /!*</Route>*!/*/}
                {/*                <Route path="/navbar">*/}
                {/*                    <NavBar/>*/}
                {/*                </Route>*/}
                {/*            </Switch>*/}
                {/*        </div>*/}
            </Router>


        );
    }

}

export default AppReactRouter;
// function Home() {
//     return (
//         <div>
//             <h2>Home</h2>
//         </div>
//     );
// }
//
// function About() {
//     return (
//         <div>
//             <h2>About</h2>
//         </div>
//     );
// }
//
// function Dashboard() {
//     return (
//         <div>
//             <h2>Dashboard</h2>
//         </div>
//     );
// }