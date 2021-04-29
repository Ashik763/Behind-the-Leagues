import React from 'react';
import { useState,useEffect } from 'react';
import League from '../League/League';
// import car from '../../images/Rectangle 28';


const Home = () => {
    const [leagues,setLeagues] = useState([]);
    useEffect(()=>  {
      fetch('https://www.thesportsdb.com/api/v1/json/1/all_leagues.php')
      .then(res => res.json())
      .then(data => setLeagues(data.leagues))
    },[])

    // const style={
    //   backgroundImage: url("https://mdbootstrap.com/img/Photos/Horizontal/Nature/full page/img(11).jpg")
    


    // }
    
    return (
        // <div className="d-flex col-md-6">
           <div  className=" row" >
    
      {
        leagues.map(league =><League league={league} ></League> )
      }
      </div>

        // </div>

        
    );
};

export default Home;