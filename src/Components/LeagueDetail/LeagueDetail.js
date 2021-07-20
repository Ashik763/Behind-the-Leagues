import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFlag,
  faFutbol,
  faLocationArrow,
} from "@fortawesome/free-solid-svg-icons";
import { Link, useParams } from "react-router-dom";
import male from "../../images/male.png";
import female from "../../images/female.png";
import facebook from "../../images/Icon/Facebook.png";
import youtube from "../../images/Icon/YouTube.png";
import Twitter from "../../images/Icon/Twitter.png";

const LeagueDetail = () => {
  const { idLeague } = useParams();
  const [league, setLeague] = useState({});

  useEffect(() => {
    const url = `https://www.thesportsdb.com/api/v1/json/1/lookupleague.php?id=${idLeague}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setLeague(data.leagues[0]));
  }, [idLeague]);

  const style = {
    backgroundColor: "dodgerBlue",
  };

  return (
    <div>
      <div style={{ 
      backgroundImage: `url("https://images.unsplash.com/photo-1540753003857-32db1552eead?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=890&q=80")`,
      backgroundColor: '#cccccc',
      height:' 400px',
      backgroundPosition: 'center',
      backgroundRepeat:' no-repeat',
      backgroundSize:' cover',
      position:'relative',
      opacity:'0..9'
      
      
    }}>
      
       <img style={{top:'30%',left:'35%',position:'absolute',height:'30%',width:'30%'}} src={league.strLogo} alt='' />
     
      </div>
      <div style={{ backgroundColor: "DarkBlue" }}>
        <div style={{}} className=" mt-2 container text-center">
          <div
            style={style}
            className="row d-grid  rounded   flex-wrap justify-content-center mb-3"
          >
            
            <div className=" col-md-6 p-5">
              <strong>{league.strLeague}</strong>
              <br />
              <FontAwesomeIcon icon={faFlag} />
              Founded:<h5> {league.intFormedYear}</h5>
              <FontAwesomeIcon icon={faLocationArrow} /> Country:{" "}
              <strong> {league.strCountry} </strong>
              <br />
              <FontAwesomeIcon icon={faFutbol} /> Sports Type:
              <strong> {league.strSport} </strong>
              <br />
              Gender:<strong>{league.strGender} </strong>
              <br />
            </div>
            {/* {} */}
            <div className="col-md-6 ">
              <img
                className="img-fluid p-2 mt-2"
                src={league.strGender === "Male" ? male : female}
                alt=""
              />
            </div>
          </div>

          <h6 style={{ color: "white" }}> {league.strDescriptionEN} </h6>

          <div className="d-flex justify-content-center">
            <a href="https://www.facebook.com/ashik.ghosh.3192/">
              <img style={{ height: "30px" }} src={facebook} alt="" />
            </a>
            <a href="https://www.youtube.com/">
              <img style={{ height: "30px" }} src={youtube} alt="" />{" "}
            </a>
            <a href="https://twitter.com/?lang=en">
              {" "}
              <img style={{ height: "30px" }} src={Twitter} alt="" />{" "}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeagueDetail;
