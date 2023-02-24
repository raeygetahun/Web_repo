
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { GrLinkedin } from 'react-icons/gr';
import {FaGithub} from 'react-icons/fa'
import '../main.css'

export default function Footer() {
  return (
    <div style={{backgroundColor:"#212529",color:'white',padding:'15px',fontSize:'1em',   position: "fixed",
    bottom: '0', width: '100%'}}>
         Developed by Raey Getahun &nbsp;
        <a href='https://www.linkedin.com/in/raey-getahun/' target={'_blank'}>
            <GrLinkedin />&nbsp;&nbsp;
        </a>
        <a href='https://github.com/raeygetahun' target={'_blank'}>
            <FaGithub/>
        </a>
        
    </div>
    );
}