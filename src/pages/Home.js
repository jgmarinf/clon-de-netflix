import React from 'react'
import { makeStyles } from '@material-ui/core';
import Header from '../components/Header';
import Banner from '../components/Banner';
import Row from '../components/Row';
import requests from '../requests';

const Home = () => {
    const classes = useStyle ();
    
    return (
        <div>
            <Header/>
            <Banner/>   
            <Row title= "NETFLIX ORIGINAL" fetchUrl={requests.fetchNetflixOriginals} isLargeRow/>
            <Row title= "COMEDY MOVIES" fetchUrl={requests.fetchComedyMovies}/>
            <Row title= "POPULAR MOVIES" fetchUrl={requests.fetchDrama}/>
            <Row title= "KIDS MOVIES" fetchUrl={requests.fetchKids}/>
            {/* <Row title= "HORROR MOVIES" fetchUrl={requests.fetchHorrorMovies}/>
            <Row title= "ROMANCE MOVIES" fetchUrl={requests.fetchRomanceMovies}/>
            <Row title= "DOCUMENTARIES" fetchUrl={requests.fetchDocumentaries}/>          */}
        </div>
    )
}
const useStyle = makeStyles((theme) => ({
    root : {
      
    },
  }));

export default Home
