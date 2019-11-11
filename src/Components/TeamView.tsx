import React from 'react';
import { Team } from "../Types/Team";

interface TeamViewProps {
    teams?: Team[]
}
const TeamView: React.SFC<TeamViewProps> = (props) => {
    let rows:any = [];
    if (props.teams && props.teams.length > 0) {
        props.teams.forEach((team) => {
            rows.push(
                <tr key={team.Guid}>
                    <td>{team.Guid}</td>
                    <td>{team.Name}</td>
                    <td>{team.Url}</td>
                </tr>
            )
        })
    }

    return (
        <table className="table table-dark">
            <thead>
                <tr>
                    <th scope="col">Guid</th>
                    <th scope="col">Name</th>
                    <th scope="col">Url</th>
                </tr>
            </thead>
            <tbody>
                {rows}

            </tbody>
        </table>
    )
}

export default TeamView