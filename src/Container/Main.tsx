import React, { FC, useState } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from 'react-router-dom';
import App from '../Pages/App';
import Template from '../Pages/Template';
import MatchDetail from '../Pages/MatchDetail';
import { MenuItem } from '../Types/MenuItem';
import './Main.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faUser, faCalendarAlt, faUserFriends, faAlignJustify, faEnvelope, faTools, faSearch } from '@fortawesome/free-solid-svg-icons';
import Fixture from '../Pages/Fixture';
import Team from '../Pages/Team';
import Standing from '../Pages/Standing';
import Search from '../Pages/Search';
import Settings from '../Pages/Settings';
import Messages from '../Pages/Messages';
import Home from '../Pages/Home';
const Main: React.FC = (props) => {

    const MenuData: MenuItem[] = [
        new MenuItem(Home, "home", "Home", faHome),
        new MenuItem(Team, "team", "Team", faUserFriends),
        new MenuItem(Fixture, "fixture", "Fixture", faCalendarAlt),
        new MenuItem(Standing, "standing", "Standing", faAlignJustify),
        new MenuItem(Search, "search", "Search", faSearch),
        new MenuItem(Settings, "settings", "Settings", faTools),
        new MenuItem(Messages, "messages", "Messages", faEnvelope),
    ]
    const [activeMenu, setActiveMenu] = useState<string | undefined>(undefined);

    return (
        <Router>
            <div className="page">
                <div className="logo"></div>
                <div className="header">
                    <div className="team-name">
                        Barcelona
          </div>
                    <div>Next match : in 7 days vs Real Madrid</div>
                </div>
                <div className="left-bar">
                    {
                        MenuData.map((menuData) => {
                            return (
                                <p>
                                    <Link to={"/" + menuData.Route}>
                                        <FontAwesomeIcon icon={menuData.Icon} />
                                        <span className="icon-span">{menuData.MenuName}</span>
                                    </Link>
                                </p>

                            )
                        })
                    }
                    <p>

                    </p>
                </div>
                <div className="content">
                    <Switch>
                        {
                            MenuData.map((menuData) => {
                                return <Route key={menuData.Route} path={"/" + menuData.Route} component={menuData.Component} />
                            })
                        }
                    </Switch>
                </div>
                <div className="footer"></div>
                <div className="user">
                    <FontAwesomeIcon icon={faUser} />
                    <span className="icon-span">Fatih Berksoz</span>
                    <i className="fas fa-cog"> </i>
                </div>

            </div>
        </Router >

    )
}

export default Main;