import React, { useState, useEffect } from 'react';
import './BlackWhite.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faUserFriends, faCalendarAlt, faAlignJustify, faSearch, faUser, faTools, faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { Player } from '../Types/Player';
import firebase from 'firebase';

import '../assets/fresh-bootstrap-table.css';
import '../assets/fresh-bootstrap-table.css';
import Round from '../Types/Round';
import Match from '../Types/Match';

const BlackWhite: React.FC = () => {
    const a = firebase.firestore();
    const database = firebase.database();
    const [players, setPlayers] = useState<Player[]>([]);
    const [premireLeagueResults, setPremireLeagueResults] = useState<Match[]>([]);
    async function reloadPlayers() {
        var response = await fetch("https://raw.githubusercontent.com/openfootball/football.json/master/2019-20/en.1.json")
        var data = await response.json();
        var matches: Match[] = data.rounds[0].matches as Match[];
        setPremireLeagueResults(matches);
        let playerList: Player[] = [];
        a.doc("teams/galatasaray").collection("players").get()
            .then((data) => {
                data.docs.forEach((item) => {
                    playerList.push(item.data() as Player);
                    console.log(item.data() as Player)
                })
                setPlayers(playerList);
            })
    }

    useEffect(() => {
        reloadPlayers();
    }, [null]);

    return (
        <div className="page">
            <div className="logo"></div>
            <div className="header">
                <div className="team-name">
                    Barcelona
          </div>
                <div>Next match : in 7 days vs Real Madrid</div>
            </div>
            <div className="left-bar">
                <p>
                    <FontAwesomeIcon icon={faHome} />
                    <span className="icon-span">Home</span>
                </p>
                <p>
                    <FontAwesomeIcon icon={faUserFriends} />
                    <span className="icon-span">Team</span>
                </p>
                <p>
                    <FontAwesomeIcon icon={faCalendarAlt} />
                    <span className="icon-span">Fixture</span>
                </p>
                <p>
                    <FontAwesomeIcon icon={faAlignJustify} />
                    <span className="icon-span">Standing</span>
                </p>
                <p>
                    <FontAwesomeIcon icon={faSearch} />
                    <span className="icon-span">Search</span>
                </p>
                <p>
                    <FontAwesomeIcon icon={faTools} />
                    <span className="icon-span">Settings</span>
                </p>
                <p>
                    <FontAwesomeIcon icon={faEnvelope} />
                    <span className="icon-span">Messages</span>
                </p>
            </div>
            <div className="content">
                <div className="fresh-table white" style={{ display: "none" }}>
                    <table className="table white">
                        <tbody>
                            {players.map((player) => {
                                return <tr key={player.Id}>
                                    <td>{player.Name}</td>
                                    <td>{player.SurName}</td>
                                    <td>{player.Position}</td>
                                </tr>
                            })}
                        </tbody>
                    </table>
                </div>

                <div className="fresh-table white">
                    <table className="table white result-table">
                        <tbody>
                            {premireLeagueResults.map((round, index) => {
                                return <tr key={index}>
                                    <td className={"home-team " + (round.score1! > round.score2! ? "win" : "")}>
                                        <div className="team-name">{round.team1.name}</div>
                                        <div className="team-code">{round.team1.code}</div>
                                        </td>
                                    <td className="match-result"> <b>{round.score1} - {round.score2}</b></td>
                                    <td className={"away-team " + (round.score2! > round.score1! ? "win" : "")}>
                                        <div className="team-name"> {round.team2.name}</div>
                                        <div className="team-code"> {round.team2.code}</div>
                                        </td>
                                </tr>
                            })}
                        </tbody>
                    </table>
                </div>
            </div>
            <div className="footer"></div>
            <div className="user">
                <FontAwesomeIcon icon={faUser} />
                <span className="icon-span">Fatih Berksoz</span>
                <i className="fas fa-cog"> </i>
            </div>
        </div>

    )
}

export default BlackWhite;