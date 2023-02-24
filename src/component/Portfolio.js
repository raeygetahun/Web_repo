import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import locsaver from '../assets/locsaver.png'
import todo from '../assets/todo.png'
import RAM from '../assets/RAM.png'
import Calc from '../assets/Calc.png'
import Local from '../assets/local.png'
import Expiry from '../assets/expiry.png'
import Meal from '../assets/meal.png'
import Weather from '../assets/weather.png'
import http from "../assets/http.png"
import port from "../assets/port.png"
import '../main.css'

function Portfolio(){
    return(
        <div style={{color:'white'}}>
        <Container style={{padding:'50px',marginBottom:'150px'}}>

            <Row>
                <Col sm={5} style={{height:"300px"}}>
                <img src={Local} width='100%' height= '65%' />
                </Col>
                <Col style={{height:"300px",textAlign:'center'}}>
                <h4>Local Goverment Adminstration Website</h4>
                <span style={{marginTop:'0px',padding:'1px 2px',fontSize:'0.8em',border:'2px solid white',borderRadius:'5px'}}>LAMP STACK</span>
                <div style={{marginTop:'10px'}}>
                    A web app where residents log in to request any document that admins give. I learned the development and deployment process of a web app using
Linux, Apache, MySQL, and PHP.
                    
                </div>
                <div className="hovera" style={{textAlign:'left'}}>
                 <a href="https://raeygetahun.github.io/Local-Government-Administration/" target='_blank'>
                    <span style={{border:'2px solid white', padding:'0px',borderRadius:'3px'}}>Live</span>
                </a>
                {' '}
                <a href="https://github.com/raeygetahun/Local-Government-Administration.git" target='_blank'>
                    <span style={{border:'2px solid white', padding:'0px',borderRadius:'3px'}}>Code</span>
                </a>                   
                </div>

                </Col>
            </Row>

            <Row>
                <Col className="revealfromleft" sm={5} style={{height:"300px"}}>
                <img src={RAM} width='100%' height= '60%' />
                </Col>
                <Col className="revealfromright" style={{height:"300px",textAlign:'center'}}>
                <h4>Business Website</h4>
                
                <span style={{marginTop:'0px',padding:'1px 2px',fontSize:'0.8em',border:'2px solid white',borderRadius:'5px'}}>React</span>{' '}
                <span style={{marginTop:'0px',padding:'1px 2px',fontSize:'0.8em',border:'2px solid white',borderRadius:'5px'}}>Bootstrap</span>{' '}                               <div>

                <div style={{marginTop:'10px'}}>
                              A Business website I built using React during my internship at RAM Trucking Group .
                </div>     
       
                </div>
                <div className="hovera" style={{textAlign:'left'}}>
                 <a href="https://ramtruckingroup.com" target='_blank'>
                    <span style={{border:'2px solid white', padding:'0px',borderRadius:'3px'}}>Live</span>
                </a>
                {' '}
                <a href="https://github.com/raeygetahun/RAM2.git" target='_blank'>
                    <span style={{border:'2px solid white', padding:'0px',borderRadius:'3px'}}>Code</span>
                </a>                   
                </div>
                </Col>
            </Row>

            <Row>
                <Col className="revealfrombottom" sm={5} style={{height:"300px"}}>
                <img src={Expiry} width='100%' height= '65%' />
                </Col>
                <Col className="revealfrombottom" style={{height:"300px",textAlign:'center'}}>
                <h4>Near Expiry Food Search</h4>
                
                <span style={{marginTop:'0px',padding:'1px 2px',fontSize:'0.8em',border:'2px solid white',borderRadius:'5px'}}>React</span>{' '}
                <span style={{marginTop:'0px',padding:'1px 2px',fontSize:'0.8em',border:'2px solid white',borderRadius:'5px'}}>Bootstrap</span>{' '} 
                <span style={{marginTop:'0px',padding:'1px 2px',fontSize:'0.8em',border:'2px solid white',borderRadius:'5px'}}>Firebase</span>{' '}
                <span style={{marginTop:'0px',padding:'1px 2px',fontSize:'0.8em',border:'2px solid white',borderRadius:'5px'}}>Twilio</span>{' '}                                <div>
                <div style={{marginTop:'10px'}}>
                    A web app that I bulit with my teamates for Jacobshack competition. We won the best use of Twilio.
                </div>    
                </div>
                <div className="hovera" style={{textAlign:'left'}}>
                 <a href="https://foodsearch-927fe.web.app/" target='_blank'>
                    <span style={{border:'2px solid white', padding:'0px',borderRadius:'3px'}}>Live</span>
                </a>
                {' '}
                <a href="https://github.com/raeygetahun/FoodSearchEngine.git" target='_blank'>
                    <span style={{border:'2px solid white', padding:'0px',borderRadius:'3px'}}>Code</span>
                </a>                   
                </div>
                </Col>
            </Row>

            <Row>
                <Col className="revealfromleft" sm={5} style={{height:"300px"}}>
                <img src={locsaver} width='100%' height= '70%' />
                </Col>
                <Col className="revealfromright" style={{height:"300px",textAlign:'center'}}>
                <h4>Location Saver</h4>
                <span style={{marginTop:'0px',padding:'1px 2px',fontSize:'0.8em',border:'2px solid white',borderRadius:'5px'}}>HTML</span>{' '}
                <span style={{marginTop:'0px',padding:'1px 2px',fontSize:'0.8em',border:'2px solid white',borderRadius:'5px'}}>CSS</span>{' '}                
                <span style={{marginTop:'0px',padding:'1px 2px',fontSize:'0.8em',border:'2px solid white',borderRadius:'5px'}}>JavaScript</span>{' '}
                <span style={{marginTop:'0px',padding:'1px 2px',fontSize:'0.8em',border:'2px solid white',borderRadius:'5px'}}>Firebase</span>
                <div style={{marginTop:'10px'}}>
                    A web app that saves current location and other data of the user to the database.  
                </div>
                <div className="hovera" style={{textAlign:'left'}}>
                 <a href="https://raeygetahun.github.io/Location-saver/" target='_blank'>
                    <span style={{border:'2px solid white', padding:'0px',borderRadius:'3px'}}>Live</span>
                </a>
                {' '}
                <a href="https://github.com/raeygetahun/Location-saver.git" target='_blank'>
                    <span style={{border:'2px solid white', padding:'0px',borderRadius:'3px'}}>Code</span>
                </a>                   
                </div>
                </Col>
            </Row>

            <Row>
                <Col className="revealfrombottom" sm={5} style={{height:"300px"}}>
                <img src={port} width='100%' height= '70%' />
                </Col>
                <Col className="revealfrombottom" style={{height:"300px",textAlign:'center'}}>
                <h4>Portfolio Website</h4>
                <span style={{marginTop:'0px',padding:'1px 2px',fontSize:'0.8em',border:'2px solid white',borderRadius:'5px'}}>React</span>{' '}
                <span style={{marginTop:'0px',padding:'1px 2px',fontSize:'0.8em',border:'2px solid white',borderRadius:'5px'}}>Bootstrap</span>{' '}       
                <div style={{marginTop:'10px'}}>
                I created this website as one of my personal projects. 
                For the design, I utilized the React JavaScript library, along with Bootstrap.  
                </div>
                <div className="hovera" style={{textAlign:'left'}}>
                 <a href="https://raeygetahun.github.io/Personal-Website/" target='_blank'>
                    <span style={{border:'2px solid white', padding:'0px',borderRadius:'3px'}}>Live</span>
                </a>
                {' '}
                <a href="https://github.com/raeygetahun/PersonalWebsite.git" target='_blank'>
                    <span style={{border:'2px solid white', padding:'0px',borderRadius:'3px'}}>Code</span>
                </a>                   
                </div>
                </Col>
            </Row>

            <Row>
                <Col className='revealfromleft' sm={5} style={{height:"300px"}}>
                <img src={Meal} width='100%' height= '65%' />
                </Col>
                <Col className="revealfromright" style={{height:"300px",textAlign:'center'}}>
                <h4>Meal Planner</h4>
                <span style={{marginTop:'0px',padding:'1px 2px',fontSize:'0.8em',border:'2px solid white',borderRadius:'5px'}}>Python</span>
                <div style={{marginTop:'10px'}}>
                    A python app that creates a meal plan by parsing my favourite meal plan websites. 
                </div>
                <div className="hovera" style={{textAlign:'left'}}>
                 <a href="#" target='_blank'>
                    <span style={{border:'2px solid white', padding:'0px',borderRadius:'3px'}}>Live</span>
                </a>
                {' '}
                <a href="https://github.com/raeygetahun/Meal-Planner.git" target='_blank'>
                    <span style={{border:'2px solid white', padding:'0px',borderRadius:'3px'}}>Code</span>
                </a>                   
                </div>
                </Col>
            </Row>

            <Row>
                <Col className="revealfrombottom" sm={5} style={{height:"300px"}}>
                <img src={todo} width='100%' height= '70%' />
                </Col>
                <Col className="revealfrombottom" style={{height:"300px",textAlign:'center'}}>
                <h4>To-do App</h4>
                <span style={{marginTop:'0px',padding:'1px 2px',fontSize:'0.8em',border:'2px solid white',borderRadius:'5px'}}>React</span>
                <div style={{marginTop:'10px'}}>
                    A to do app I bulit using React. 
                </div>
                <div className="hovera" style={{textAlign:'left'}}>
                 <a href="https://raeygetahun.github.io/reactodo/" target='_blank'>
                    <span style={{border:'2px solid white', padding:'0px',borderRadius:'3px'}}>Live</span>
                </a>
                {' '}
                <a href="https://github.com/raeygetahun/reactodo.git" target='_blank'>
                    <span style={{border:'2px solid white', padding:'0px',borderRadius:'3px'}}>Code</span>
                </a>                   
                </div>
                </Col>
            </Row>

            <Row>
                <Col className='revealfromleft' sm={5} style={{height:"300px"}}>
                <img src={http} width='100%' height= '65%' />
                </Col>
                <Col className="revealfromright" style={{height:"300px",textAlign:'center'}}>
                <h4>Delivery Fee Calculator</h4>
                <span style={{marginTop:'0px',padding:'1px 2px',fontSize:'0.8em',border:'2px solid white',borderRadius:'5px'}}>Python</span>
                <div style={{marginTop:'10px'}}>
                An HTTP API (single endpoint) which calculates the delivery fee based on the information(cart_value, distance, num_items, and rush_hour)
                 in the request payload (JSON) and includes the calculated delivery fee in the response payload (JSON).
                </div>
                <div className="hovera" style={{textAlign:'left'}}>
                 <a href="#" target='_blank'>
                    <span style={{border:'2px solid white', padding:'0px',borderRadius:'3px'}}>Live</span>
                </a>
                {' '}
                <a href="https://github.com/raeygetahun/APIask-.git" target='_blank'>
                    <span style={{border:'2px solid white', padding:'0px',borderRadius:'3px'}}>Code</span>
                </a>                   
                </div>
                </Col>
            </Row>
  
            <Row>
                <Col className='revealfrombottom' sm={5} style={{height:"300px"}}>
                <img src={Calc} width='100%' height= '75%' />
                </Col>
                <Col className="revealfrombottom" style={{height:"300px",textAlign:'center'}}>
                <h4>Calculator</h4>
                <span style={{marginTop:'0px',padding:'1px 2px',fontSize:'0.8em',border:'2px solid white',borderRadius:'5px'}}>React</span>
                <div style={{marginTop:'10px'}}>
                    A Calculator I built using React.
                </div>
                <div className="hovera" style={{textAlign:'left'}}>
                 <a href="https://raeygetahun.github.io/reactulator-/" target='_blank'>
                    <span style={{border:'2px solid white', padding:'0px',borderRadius:'3px'}}>Live</span>
                </a>
                {' '}
                <a href="https://github.com/raeygetahun/reactulator-.git" target='_blank'>  
                    <span style={{border:'2px solid white', padding:'0px',borderRadius:'3px'}}>Code</span>
                </a>                   
                </div>
                </Col>
            </Row>

            <Row>
                <Col className='revealfromleft' sm={5} style={{height:"300px"}}>
                <img src={Weather} width='100%' height= '65%' />
                </Col>
                <Col className="revealfromright" style={{height:"300px",textAlign:'center'}}>
                <h4>Weather App</h4>
                <span style={{marginTop:'0px',padding:'1px 2px',fontSize:'0.8em',border:'2px solid white',borderRadius:'5px'}}>Python</span>
                <div style={{marginTop:'10px'}}>
                A weather app that uses an API, and regarding the location you choose (Bremen or Berlin), it will give you a weather forecast for the next 24 hours.
                </div>
                <div className="hovera" style={{textAlign:'left'}}>
                 <a href="#" target='_blank'>
                    <span style={{border:'2px solid white', padding:'0px',borderRadius:'3px'}}>Live</span>
                </a>
                {' '}
                <a href="https://github.com/raeygetahun/Weather-app.git" target='_blank'>
                    <span style={{border:'2px solid white', padding:'0px',borderRadius:'3px'}}>Code</span>
                </a>                   
                </div>
                </Col>
            </Row>


            
        </Container>
    </div>
    );
}

export default Portfolio;