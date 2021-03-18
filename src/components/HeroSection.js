import React from 'react'
import { Button } from './Button'
import './HeroSection.css'
import '../App.css'

function HeroSection() {
    return (
        <div className='hero-container'>
            <video src="/videos/video-1.mp4" autoPlay loop muted />
            <h1>DELICIOUSLY TASTY</h1>
            <p>What are you waiting for? ORDER NOW</p>
            <div className="hero-btns">
                <Button className='btns' buttonStyle='btn--outline' buttonSize='btn--large' page='/'>Call: (647)568-3865</Button>
                <Button className='btns' buttonStyle='btn--primary' buttonSize='btn--large' page='/menu'>Menu-Items <i class="fas fa-clipboard-list"/></Button>
            </div>
        </div>
    )
}

export default HeroSection
