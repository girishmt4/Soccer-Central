import { useState } from "react";
import Card from "../UI/Card";

const LiveScore = () => {
  const [matchData, setMatchData] = useState({});
  const [team, setTeam] = useState({});
  const [score, setScore] = useState("");

  const testAPI = () => {
    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": VITE_SPORTSCORE_RAPIDAPI_KEY,
        "X-RapidAPI-Host": "api-football-v1.p.rapidapi.com",
      },
    };

    fetch(
      "https://api-football-v1.p.rapidapi.com/v3/fixtures?live=all",
      options
    )
      .then((response) => response.json())
      .then((response) => {
        console.log(response);
        setScore(
          response.response[0].goals.home +
            " - " +
            response.response[0].goals.away
        );
      })
      .catch((err) => console.error(err));
  };

  return (
    <Card>
      <button onClick={testAPI}>Test</button>
      <div>{score}</div>
    </Card>
  );
};

export default LiveScore;
