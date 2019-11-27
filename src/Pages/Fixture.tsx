import React, { useState, useEffect } from 'react';
import Match from '../Types/Match';

const Fixture : React.FC = () => {
    const [premireLeagueResults, setPremireLeagueResults] = useState<Match[]>([]);
    async function reloadPlayers() {
        var response = await fetch("https://raw.githubusercontent.com/openfootball/football.json/master/2019-20/en.1.json")
        var data = await response.json();
        var matches: Match[] = data.rounds[0].matches as Match[];
        setPremireLeagueResults(matches);        
    }

    useEffect(() => {
        reloadPlayers();
    }, [null]);
    
    return (       
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
    )
}

export default Fixture;