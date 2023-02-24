import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import React from 'react'
import Navbarcomp from '../component/Navbar'
import Footer from '../component/Footer';
import Timelinecomp from '../component/Timeline';
import '../main.css'
import './timeline.css'

function Timeline(){
    return(
    <div>
        <div style={{margin:'50px',color:'white',textAlign:'center'}}>
            <h2>My Timeline</h2>
            These are the most relevant experiences I have 
        </div>
        <Timelinecomp/>
        
        <Footer/>
    </div>
    );
}

export default Timeline;