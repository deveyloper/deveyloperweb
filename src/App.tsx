import React, { useState, useEffect } from 'react';
import './App.css';
import './assets/site.scss';
import * as firebase from 'firebase';
import { Team } from './Types/Team';
import TeamView from './Components/TeamView';



const App: React.FC = () => {

  const [teams, setTeams] = useState<Team[]>([]);
  const database = firebase.database();
    useEffect(() => {
    let teamsList: Team[] = [];
    database.ref("teams").once('value', (snap) => {
      snap.forEach((item) => {
        let team = item.val() as Team;
        team.Guid = item.key!;
        teamsList.push(team);
      })
      setTeams(teamsList);
    })

  }, [null])
  const a = firebase.firestore();
  /*
  a.doc("teams/0kvidBR7YWXSAdA9cbma").get()
    .then((response) => {
      if (response && response.exists) {
        setTeam(response.data() as Team);
      }
    });
  */

  //database.ref("teams").child("0kvidBR7YWXSAdA9cbma").push(new Team("a","b","c"));
  //database.ref("teams").child("0kvidBR7YWXSAdA9cbma").once('value').then((value)=> {
  return (
    <div className="container">
      <div className="row">
        <div className="col-sm-6">
          <input type="text" id="txtTeamName" />
        </div>
        <div className="col-sm-6">
          <button id="btnSave" className="btn btn-primary left">
            Save
        </button>
        </div>
      </div>
      <TeamView teams={teams} />
    </div>
  );
}

export default App;
