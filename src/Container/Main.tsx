import React, { FC, useState } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useParams

} from 'react-router-dom';
import App from '../Pages/App';
import Template from '../Pages/Template';
import '../assets/black-dashboard.css';
import '../assets/scripts/black-diamond';
import MatchDetail from '../Pages/MatchDetail';
import { MenuItem } from '../Types/MenuItem';

const Main: React.FC = (props) => {

    const MenuData: MenuItem[] = [
        new MenuItem(App, "app", "App"),
        new MenuItem(Template, "template", "Template"),
        new MenuItem(MatchDetail, "matchDetail", "Match Detail")
    ]
    const [activeMenu, setActiveMenu] = useState<string | undefined>(undefined);

    let params = useParams();
    alert(params);
    return (
        <Router>
            <div className="white-content">
                <div className="wrapper">
                    <div className="sidebar">
                        <div className="sidebar-wrapper">
                            <div className="logo">
                                <a href="#" className="simple-text logo-mini">
                                </a>
                                <a href="#" className="simple-text logo-normal">
                                    Deveyloper
                                </a>
                            </div>
                            <ul className="nav">
                                {
                                    MenuData.map((menuData) => {
                                        return (
                                            <li key={menuData.Route + menuData.MenuName} className={activeMenu == menuData.Route ? "active" : ""}>
                                                <Link onClick={() => setActiveMenu(menuData.Route)} to={"/" + menuData.Route}>
                                                    <i className="tim-icons icon-chart-pie-36"></i>
                                                    <p>{menuData.MenuName}</p>
                                                </Link>
                                            </li>
                                        )
                                    })}
                            </ul>
                        </div>
                    </div>


                    <div className="main-panel">
                        <nav className="navbar navbar-expand-lg navbar-absolute navbar-transparent">
                            <div className="container-fluid">
                                <div className="navbar-wrapper">
                                    <div className="navbar-toggle d-inline">
                                        <button type="button" className="navbar-toggler">
                                            <span className="navbar-toggler-bar bar1"></span>
                                            <span className="navbar-toggler-bar bar2"></span>
                                            <span className="navbar-toggler-bar bar3"></span>
                                        </button>
                                    </div>
                                    <a className="navbar-brand" href="#">Dashboard</a>
                                </div>
                                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navigation" aria-expanded="false" aria-label="Toggle navigation">
                                    <span className="navbar-toggler-bar navbar-kebab"></span>
                                    <span className="navbar-toggler-bar navbar-kebab"></span>
                                    <span className="navbar-toggler-bar navbar-kebab"></span>
                                </button>
                                <div className="collapse navbar-collapse" id="navigation">
                                    <ul className="navbar-nav ml-auto">
                                        <li className="search-bar input-group">
                                            <button className="btn btn-link" id="search-button" data-toggle="modal" data-target="#searchModal">
                                                <i className="tim-icons icon-zoom-split"></i>
                                                <span className="d-lg-none d-md-block">Search</span>
                                            </button>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </nav>
                        <div className="modal modal-search fade" id="searchModal" role="dialog" aria-labelledby="searchModal" aria-hidden="true">
                            <div className="modal-dialog" role="document">
                                <div className="modal-content">
                                    <div className="modal-header">
                                        <input type="text" className="form-control" id="inlineFormInputGroup" placeholder="SEARCH" />
                                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                            <i className="tim-icons icon-simple-remove"></i>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="content">
                            <Switch>
                                {
                                    MenuData.map((menuData) => {
                                        return <Route key={menuData.Route} path={"/" + menuData.Route} component={menuData.Component} />
                                    })
                                }

                            </Switch>
                            <footer className="footer">
                                <div className="container-fluid">
                                    <ul className="nav">
                                        <li className="nav-item">

                                        </li>
                                        <li className="nav-item">

                                        </li>
                                        <li className="nav-item">

                                        </li>
                                    </ul>
                                    <div className="copyright">

                                    </div>
                                </div>
                            </footer>
                        </div>
                    </div>

                </div>
            </div>
        </Router>

    )
}

export default Main;