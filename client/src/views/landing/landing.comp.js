import React from "react";
import './landing.css'
import { Link } from 'react-router-dom'
import Video from './../../assets/img/pexels-kelly-lacy-6498483.mp4'


function LandingPage() {
    return (
        <div>
            <video className="video" autoPlay muted loop id='bgVideo'>
                <source src={Video} type='video/mp4'></source>
            </video>
            <div className="welcome">
                <h1>Henry's Dogs</h1>
                <small>Proyecto Individual por <a target='_blank' rel="noreferrer">Simon Andres Arboleda</a></small>
                <Link to='/home' className="button" ><button>INICIAR</button></Link>
            </div>
        </div>
    )
}

export default LandingPage;