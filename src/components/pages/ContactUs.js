import React from 'react'
import '../../App.css'
import { Button } from '../Button'
import Footer from '../Footer'
import './ContactUs.css'

export default function ContactUs(){
    return (
        <div className="contactus-container">
            <img src="/images/contact-us.jpg" alt="Contact Bee Square Kitchen"/>
            <section className="user-inputs">
                <form action="">
                    <p className="user-inputs-heading">
                        <h1>Leave your detail message and contact information for us to better serve you</h1>
                    </p>
                    <div className="input-areas">
                        <label htmlFor="Name">Name: <i class="fas fa-id-badge"></i> </label>
                        <input type="text" name="Name" id="name" placeholder='Please Enter your Full Name' />
                    </div>
                    <div className="input-areas">
                        <label htmlFor="Phone">Phone: <i class="fas fa-phone-alt"></i> </label>
                        <input type="phone" name="Phone" id="phone" placeholder='Please Enter your Contact Number' />
                    </div>
                    <div className="input-areas">
                        <label htmlFor="Email">Email: <i class="fas fa-at"></i> </label>
                        <input type="email" name="Email" id="email" placeholder='Please Enter your Email Id' />
                    </div>
                    <div className="input-areas">
                        <label htmlFor="Message">Message: <i class="fas fa-file-alt"></i> </label>
                        <textarea name="Message" id="message" cols="30" rows="5"></textarea>
                    </div>
                    <Button buttonSize='btn--medium' buttonStyle='btn--outline'>Submit</Button>
                </form>
            </section>
            <Footer></Footer>
        </div>
            // { <h1 className="contact-us">CONTACT US</h1>}
    )
}