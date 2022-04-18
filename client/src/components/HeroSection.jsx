import React from 'react';
// import '../App.css';
import { ButtonStudent } from './ButtonStudent';
import './HeroSection.css';
import { useNavigate } from "react-router";
import { ButtonEmployee } from './ButtonEmployee';
import { Button } from './Button';
import { ButtonInsertEmployee } from './ButtonInsertEmployee';
import { ButtonInsertStudent } from './ButtonInsertStudent';
import Interactive from './Interactive';




function HeroSection() {
    let history = useNavigate();
    return (
        <div className='hero-container'>

            <video src='/videos/video-1.mp4' autoPlay loop muted />
            <h2 style={{ fontStyle: "italic", color: "white" }} >"Home away from home"</h2>

            <div className='hero-btns'>
                <ButtonStudent
                    className='btns'
                    buttonStyle='btn--outline'
                    buttonSize='btn--large'

                >
                    View Students
                </ButtonStudent>
                <ButtonEmployee
                    className='btns'
                    buttonStyle='btn--outline'
                    buttonSize='btn--large'
                >
                    View Employees
                </ButtonEmployee>
                <ButtonInsertStudent
                    className='btns'
                    buttonStyle='btn--outline'
                    buttonSize='btn--large'
                >
                    Allot Students
                </ButtonInsertStudent>
                <ButtonInsertEmployee
                    className='btns'
                    buttonStyle='btn--outline'
                    buttonSize='btn--large'
                >
                    Insert Employees

                </ButtonInsertEmployee>


            </div>
        </div >
    );
}

export default HeroSection;