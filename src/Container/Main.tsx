import React, { FC } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link

} from 'react-router-dom';
import App from '../Pages/App';
import Template from '../Pages/Template';
import '../assets/black-dashboard.css';
import '../assets/scripts/black-diamond';

const Main: React.FC = () => {
    return (
        <Router>
            <div className="wrapper">
                <div className="sidebar">
                    <div className="sidebar-wrapper">
                        <div className="logo">
                            <a href="javascript:void(0)" className="simple-text logo-mini">
          </a>
                            <a href="javascript:void(0)" className="simple-text logo-normal">
Deveyloper
          </a>
                        </div>
                        <ul className="nav">
                            <li className="active">
                                <Link to="/">
                                    <i className="tim-icons icon-chart-pie-36"></i>
                                    <p>Home</p>
                                </Link>
                            </li>
                            <li>
                                <Link to="/App">
                                    <i className="tim-icons icon-chart-pie-36"></i>
                                    <p>App</p>
                                </Link>
                            </li>
                            <li>
                                <Link to="/Template">
                                    <i className="tim-icons icon-chart-pie-36"></i>
                                    <p>Template</p>
                                </Link>
                            </li>
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
                                <a className="navbar-brand" href="javascript:void(0)">Dashboard</a>
                            </div>
                            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navigation" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-bar navbar-kebab"></span>
                                <span className="navbar-toggler-bar navbar-kebab"></span>
                                <span className="navbar-toggler-bar navbar-kebab"></span>
                            </button>
                            <div className="collapse navbar-collapse" id="navigation">
                                <ul className="navbar-nav ml-auto">
                                  
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
                            <Route exact path="/">
                                <App />
                            </Route>
                            <Route path="/App">
                                <App />
                            </Route>
                            <Route path="/Template">
                                <Template />
                            </Route>
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
        </Router>

    )
}

export default Main;