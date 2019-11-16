import React, { useState, useEffect, useRef } from 'react';
import './App.css';
import firebase from 'firebase';
import { Team } from '../Types/Team';
import TeamView from '../Components/TeamView';
import { Player } from '../Types/Player';
import '../assets/fresh-bootstrap-table.css';


const App: React.FC = () => {

  const a = firebase.firestore();
  const database = firebase.database();
  const [teams, setTeams] = useState<Team[]>([]);
  const [players, setPlayers] = useState<Player[]>([]);
  const txtPlayerId = useRef<HTMLInputElement>(null);
  const txtPlayerName = useRef<HTMLInputElement>(null);
  const txtPlayerSurname = useRef<HTMLInputElement>(null);
  const txtPlayerPosition = useRef<HTMLInputElement>(null);


  function savePlayer() {
    try {
      var newPlayer: Player = new Player(txtPlayerId.current!.value, txtPlayerName.current!.value, txtPlayerSurname.current!.value, txtPlayerPosition.current!.value);
      alert(JSON.stringify(newPlayer));
      a.doc("teams/galatasaray").collection("players").doc(newPlayer.Id).set(Object.assign({}, newPlayer))
        .then(() => {
          alert("Player saved");
          //reloadPlayers();
        })
        .catch((error) => {
          alert("Error adding player:" + error);
        })
    }
    catch (error) {
      alert(error);
    }
  }

  function reloadPlayers() {
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
  }

  useEffect(() => {
    reloadPlayers();
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
    <>
      <div className="input-fields-wrapper">
        <div className="row">
          <div className="col-md-12">
            <form>
              <div className="form-group">
                <input className="form-control" type="text" id="txtPlayerId" placeholder="Player ID" ref={txtPlayerId} />
              </div>
              <div className="form-group">
                <input className="form-control" type="text" id="txtPlayerName" placeholder="Player Name" ref={txtPlayerName} />
              </div>
              <div className="form-group">
                <input className="form-control" type="text" id="txtPlayerSurName" placeholder="Player Surname" ref={txtPlayerSurname} />
              </div>
              <div className="form-group">
                <input className="form-control" type="text" id="txtPlayerPosition" placeholder="Player Position" ref={txtPlayerPosition} />
              </div>
              <div className="form-group">
                <button id="btnSave" onClick={savePlayer} className="btn btn-primary save-button custom-button">
                  Save
                </button>
                <button id="btnSave" onClick={reloadPlayers} className="btn btn-primary refresh-button custom-button">
                  Reload
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div>
        <TeamView teams={undefined} />
      </div>
      <div className="fresh-table full-color-azure">
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
    </>
  );
}

export default App;
