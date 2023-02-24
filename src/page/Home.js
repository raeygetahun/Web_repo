import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import React from 'react'
import Navbarcomp from '../component/Navbar'
import Footer from '../component/Footer';
import '../main.css'

export default function Home(){
    return (
        <div>
            
            <div style={{borderRadius: "8px", height:"300px", backgroundColor:'#212529', margin:'100px',color:'white',textAlign:'center',overflow:'auto'}}>
                <Container>
                    <Row>
                        {/* <Col sm={4} style={{height:"300px"}}>
                            
                        </Col> */}
                        <Col sm={12} style={{marginTop:'10%'}}>
                            <h1>Raey Getahun</h1>
                            I am a highly motivated computer science student who has a passion for technology and constantly seeking new challenges and opportunities to expand my knowledge and skillset.
                        </Col>
                    </Row>
                </Container>
            </div>
            <div style={{marginBottom:'180px'}}>

            </div>
            <Footer/>
        </div>
    )
}