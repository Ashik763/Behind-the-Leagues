import Button from 'react-bootstrap/Button';
import React from 'react';
import { useState,useEffect } from 'react';

import { Link } from 'react-router-dom';
// import 'bootstrap/dist/css/bootstrap.min.css';


const League = (props) => {
    
    const {strLeague,strSport,idLeague,strBadge} = props.league;
    // console.log(props.league);
    const [league,setLeague] = useState({});
    
    useEffect(() =>{
        const url = `https://www.thesportsdb.com/api/v1/json/1/lookupleague.php?id=${idLeague}`;
        fetch(url)
        .then(res => res.json())
        .then(data => setLeague(data.leagues[0]))
    },[])
   
 
    return (
        <div className="col-md-4 mb-3">
           
           <div className="m-5 shadow rounded p-3">

           <img className="img-fluid p-3" src={league.strBadge} alt=""/>


            <h4>Name:{strLeague}</h4>
            <h6>Sports type:{strSport}</h6>
          <Link className="" to={`/league/${idLeague}`}>
                <Button className="justify-content-center btn btn-primary">Explore  </Button>
                </Link>

                </div>
           
                </div>
                
                
      
    );
};

export default League;