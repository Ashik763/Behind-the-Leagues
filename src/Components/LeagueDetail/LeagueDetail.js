import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFlag, faFutbol, faLocationArrow } from '@fortawesome/free-solid-svg-icons'
import { useParams } from "react-router-dom";
import male from "../../images/male.png";
import female from "../../images/male.png";

const LeagueDetail = () => {
  const { idLeague } = useParams();
  const [league, setLeague] = useState({});

  useEffect(() => {
    const url = `https://www.thesportsdb.com/api/v1/json/1/lookupleague.php?id=${idLeague}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setLeague(data.leagues[0]));
  }, []);

  const style = {
    backgroundColor: "dodgerBlue",
  };

  return (
    <div className="m-5 rounded" >
      <div style={style} className="row">
        <div className="d-grid col-md-6 p-5">
          <strong>{league.strLeague}</strong><br/>
          <FontAwesomeIcon icon={faFlag} />Founded:<h5> {league.intFormedYear}</h5>
          <FontAwesomeIcon icon={faLocationArrow}/>  Country: <strong> {league.strCountry} </strong>
          <br />
          <FontAwesomeIcon icon={faFutbol}/> Sports Type:<strong> {league.strSport} </strong>
          <br />
          Gender:<strong> {league.strGender} </strong>
          <br />
        </div>

        <div className="d-grid col-md-6">
          <img className="img-fluid mt-2 p-2" src={male} alt="" />
        </div>

           


      </div>

      <h6> {league.strDescriptionEN} </h6>

    </div>
  );
};

export default LeagueDetail;
