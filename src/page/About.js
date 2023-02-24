import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import React from 'react'
import Navbarcomp from '../component/Navbar'
import Footer from '../component/Footer';
import '../main.css'

function About(){
    return(
        <div>
           <div style={{margin:'50px 100px 150px', color:'white',border:'2px solid white',backgroundColor:'#212529',padding:'20px'}}>
           Hello!<br/><br/>
           I am Raey Getahun, a 2nd year Computer Science student at Jacobs University (Constructor University) Bremen in Germany.<br/><br/>

           I am a dedicated learner who is always seeking new challenges to expand my knowledge and skillset. I have a strong foundation 
           in programming languages such as C++, JavaScript, and Python and am proficient in data structures and algorithms.<br/><br/>
        
           I have a strong passion for continuous learning and am always eager to expand my skills and knowledge in various areas. 
           Whether it's acquiring new technical skills, staying up-to-date with industry trends, or exploring new technologies and tools, 
           I am constantly seeking out opportunities to grow and develop both personally and professionally. I believe that learning is a lifelong journey, 
           and I am committed to staying curious and open-minded as I navigate my career. With a natural love for learning, I am confident that I can contribute to any 
           team or organization that values innovation and a growth mindset.

         I have gained practical experience through various programming projects, including developing web and windows applications.

         <br/><br/> I also have a passion for Economics. I love studying and analyzing economic systems, market trends, and business strategies. 
         This has also complemented my technical skills and knowledge, helping me understand the impact of technological advancements 
         on economic growth and development.<br/><br/>In my leisure, I like to play or watch football(soccer). I also like to swim. <br/> 
         </div>
           <Footer/>
        </div>
    );
}

export default About;