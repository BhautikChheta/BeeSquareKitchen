import React from 'react'
import { Button } from './Button'
import './Footer.css'
import { Link } from 'react-router-dom'
import SocialApps from './SocialApps'

function Footer() {
    // return (
    //     <div className='footer-container'>
    //         <section className="footer-subscription">
    //             <p className="footer-subscription-heading">
    //                 get Monthly Tiffin, for the best value of your money <i class="fas fa-dollar-sign"></i><i class="fas fa-dollar-sign"></i>
    //             </p>
    //             <p className="footer-subscription-text">
    //                 You can Opt out from monthly tiffin services anytime!
    //             </p>
    //             <div className="input-areas">
    //                 <form action="">
    //                     <input type="email" name="email" className="footer-input" placeholder="Enter your Email Address" />
    //                     <Button buttonStyle='btn--outline' type='reset' page='/'>Submit Inquiry!</Button>
    //                 </form>
    //             </div>
    //         </section>
    //         <div className="footer-links">
    //             <div className="footer-link-wrapper">
    //                 <div className="footer-link-items">
    //                     <h2>Take the Advantage!</h2>
    //                     <Link to='/contact-us'>Contact Us</Link>
    //                     <Link to='/'>Reviews</Link>
    //                     <Link to='/'>Recipes Blog</Link>
    //                 </div>
    //             </div>
    //         </div>
    //         <section className="social-media">
    //             <div className="social-media-wrap">
    //                 <div className="footer-logo">
    //                     <Link className="social-logo">
    //                         BeeSquareKitchen <i class="fas fa-egg" />
    //                     </Link>
    //                 </div>
    //                 <small className="website-rights"> © 2020. All rights reserved!</small>
    //                 <div className="social-icons">
    //                     <SocialApps
    //                         href="https://www.facebook.com/BeeSquareKitchen"
    //                         name='Facebook'
    //                         icon="facebook-f" >
    //                     </SocialApps>
    //                     <SocialApps
    //                         href="https://www.instagram.com/beesquarekitchen/"
    //                         name='Instagram'
    //                         icon="instagram">
    //                     </SocialApps>
    //                     <SocialApps
    //                         href="https://www.youtube.com/channel/UC6dlyXwaXdid4RdzaP7hl3w"
    //                         name='Youtube'
    //                         icon="youtube">
    //                     </SocialApps>
    //                 </div>
    //             </div>
    //         </section>
    //     </div>
    // )

    return (
        <div className="footer__container">
            <div className="footer__wrapper">
                <section className="footer__box">
                    <div className="footer__box__header">
                        <h1 className="header__logo">
                            <i class="far fa-clock"></i>
                        </h1>
                        <h1 className="header__text">
                            "Business Hours"
                        </h1>
                    </div>
                    <div className="footer__box__text">
                        <p></p>
                        <p className="para__text">Monday to Friday</p>
                        <p className="para__text">5:00 PM to 9:30 PM</p>
                        <p className="para__text">Saturday & Sunday</p>
                        <p className="para__text">5:00 PM to 9:30 PM</p>
                    </div>
                </section>
                <section className="footer__box">
                    <div className="footer__box__header">
                        <h1 className="header__logo">
                            <i class="fas fa-map-marker-alt"></i>
                        </h1>
                        <h1 className="header__text">
                            "Location"
                        </h1>
                    </div>
                    <div className="footer__box__text">
                        <p></p>
                        <p className="para__text">
                            <a href="https://www.google.com/maps/place/28+Fallway+Rd,+Brampton,+ON+L6V+3H2/@43.7105248,-79.7535234,3a,75y,218.04h,90t/data=!3m6!1e1!3m4!1sF6VpZERqlq9N1n6b0NCh9g!2e0!7i16384!8i8192!4m5!3m4!1s0x882b15e2f40a2459:0x420d208974f0d659!8m2!3d43.7104007!4d-79.7536785" target="_blank">
                                "28 Fallway Road"
                                <br />
                                "Brampton, ON L6V3H2"
                            </a>
                        </p>
                    </div>
                </section>
                <section className="footer__box">
                    <div className="footer__box__header">
                        <h1 className="header__logo">
                            <i class="fas fa-phone"></i>
                        </h1>
                        <h1 className="header__text">
                            "Contact Us"
                        </h1>
                    </div>
                    <div className="footer__box__text">
                        <p></p>
                        <p className="para__text">
                            <a href="tel:1-647-568-3865">+1(647)568-3865</a>
                        </p>
                        <p className="para__text">
                            <a href="mailto:chhetabhautik@gmail.com">BSK@gmail.com</a>
                        </p>
                    </div>
                </section>
            </div>
            {/* <div className="footer__links__wrapper"> */}
            <section className="social-media">
                <div className="social-media-wrap">
                    <div className="footer-logo">
                        {/* <Link className="social-logo">
                            BeeSquareKitchen <i class="fas fa-egg" />
                        </Link> */}
                        <Link to="/" className="social-logo">
                            <img src="./images/logo.png" alt="BeeSquareKitchen" /> BeeSquareKitchen
                        </Link>
                    </div>
                    <small className="website-rights"> © 2020. All rights reserved!</small>
                    <div className="social-icons">
                        <SocialApps
                            href="https://www.facebook.com/BeeSquareKitchen"
                            name='Facebook'
                            icon="facebook-f" >
                        </SocialApps>
                        <SocialApps
                            href="https://www.instagram.com/beesquarekitchen/"
                            name='Instagram'
                            icon="instagram">
                        </SocialApps>
                        <SocialApps
                            href="https://www.youtube.com/channel/UC6dlyXwaXdid4RdzaP7hl3w"
                            name='Youtube'
                            icon="youtube">
                        </SocialApps>
                    </div>
                </div>
            </section>
        </div>
        // </div >
    )
}

export default Footer
