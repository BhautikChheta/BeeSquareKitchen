import React from 'react'
import { Button } from './Button'
import './Footer.css'
import { Link } from 'react-router-dom'

function Footer() {
    return (
        <div className='footer-container'>
            <section className="footer-subscription">
                <p className="footer-subscription-heading">
                    get Monthly Tiffin, for the best value of your money <i class="fas fa-dollar-sign"></i><i class="fas fa-dollar-sign"></i>
                </p>
                <p className="footer-subscription-text">
                    You can Opt out from monthly tiffin services anytime!
                </p>
                <div className="input-areas">
                    <form action="">
                        <input type="email" name="email" className="footer-input" placeholder="Enter your Email Address" />
                        <Button buttonStyle='btn--outline' type='reset' page='/'>Submit Inquiry!</Button>
                    </form>
                </div>
            </section>
            <div className="footer-links">
                <div className="footer-link-wrapper">
                    <div className="footer-link-items">
                        <h2>Take the Advantage!</h2>
                        <Link to='/contact-us'>Contact Us</Link>
                        <Link to='/'>Reviews</Link>
                        <Link to='/'>Recipes Blog</Link>
                    </div>
                </div>
            </div>
            <section className="social-media">
                <div className="social-media-wrap">
                    <div className="footer-logo">
                        <Link className="social-logo">
                            BeeSquareKitchen <i class="fas fa-egg" />
                        </Link>
                    </div>
                    <small className="website-rights"> © 2020. All rights reserved!</small>
                    <div className="social-icons">
                        <Link className="social-icon-link facebook"
                            to="/"
                            target="_blank"
                            aria-label='Facebook'>
                            <i className="fab fa-facebook-f"></i>
                        </Link>
                        <Link className="social-icon-link instagram"
                            to="/"
                            target="_blank"
                            aria-label='Instagram'>
                            <i className="fab fa-instagram"></i>
                        </Link>
                        <a href="https://www.youtube.com/channel/UC6dlyXwaXdid4RdzaP7hl3w"
                            className="social-icon-link youtube" 
                            area-label ='Youtube'
                            target='_blank'>
                            <i className="fab fa-youtube"></i>
                        </a>
                    </div>
                </div>
            </section>

        </div>
    )
}

export default Footer
