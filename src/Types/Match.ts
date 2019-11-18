import ResultTeam from './ResultTeam';
export default interface Match {
    date: string;
    team1: ResultTeam;
    team2: ResultTeam;
    score1?: number;
    score2?: number;
}
