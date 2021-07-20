import React from "react";
import { useState, useEffect } from "react";
import League from "../League/League";
import header from "../../images/header.jpg";


const Home = () => {
  const [leagues, setLeagues] = useState([]);
  useEffect(() => {
    fetch("https://www.thesportsdb.com/api/v1/json/1/all_leagues.php")
      .then((res) => res.json())
      .then((data) => setLeagues(data.leagues));
  }, []);



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
      
      
    }}>
       
      <h1 style={{  textAlign: 'center',
  position: 'absolute',
  top: '20%',
  left: '50%',
  transform:' translate(-50%, -50%)',
  color:'white'}} > <b>Behind the Leagues </b>  </h1>
      </div>
      <div className="row">
        {leagues.map((league) => (
          <League key={league.idLeague} league={league}></League>
        ))}
      </div>
    </div>
  );
};

export default Home;
