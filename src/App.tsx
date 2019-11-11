import React, { useState, useEffect, useRef } from 'react';
import './App.css';
import * as firebase from 'firebase';
import { Team } from './Types/Team';
import TeamView from './Components/TeamView';
import { Player } from './Types/Player';



const App: React.FC = () => {

  const a = firebase.firestore();
  const [teams, setTeams] = useState<Team[]>([]);
  const [players, setPlayers] = useState<Player[]>([]);
  const txtPlayerId = useRef<HTMLInputElement>(null);
  const txtPlayerName = useRef<HTMLInputElement>(null);
  const txtPlayerSurname = useRef<HTMLInputElement>(null);
  const txtPlayerPosition = useRef<HTMLInputElement>(null);

  function savePlayer() {
    try {
      var newPlayer: Player = new Player(txtPlayerId.current!.value, txtPlayerName.current!.value, txtPlayerSurname.current!.value, txtPlayerPosition.current!.value);
      a.doc("teams/galatasaray").collection("players").doc(newPlayer.Id).set(Object.assign({}, newPlayer))
        .then(() => {
          alert("Player saved");
        })
        .catch((error) => {
          alert("Error adding player:" + error);
        })
    }
    catch (error) {
      alert(error);
    }
  }

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
    let playerList: Player[] = [];
    a.doc("teams/galatasaray").collection("players").get()
      .then((data) => {
        data.docs.forEach((item) => {
          playerList.push(item.data() as Player);
          console.log(item.data() as Player)
        })
        setPlayers(playerList);
      })

  }, [null]);

  const floatLeft = {
    "float": "left"
  }
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
        <div className="col-sm-12 mT5">
          <input type="text" id="txtPlayerId" ref={txtPlayerId} />
        </div>
        <div className="col-sm-12 mT5">
          <input type="text" id="txtPlayerName" ref={txtPlayerName} />
        </div>
        <div className="col-sm-12 mT5">
          <input type="text" id="txtPlayerSurName" ref={txtPlayerSurname} />
        </div>
        <div className="col-sm-12 mT5">
          <input type="text" id="txtPlayerPosition" ref={txtPlayerPosition} />
        </div>
        <div className="col-sm-12 mT5">
        </div>
        <div className="col-sm-12 mT5">
          <button id="btnSave" onClick={savePlayer} className="btn btn-primary left">
            Save
        </button>
        </div>
      </div>
      <TeamView teams={teams} />
      <table className="table table-custom">
        <thead>
          <tr>
            <th>Name</th>
            <th>Surname</th>
            <th>Position</th>
          </tr>
        </thead>
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
  );
}

export default App;
