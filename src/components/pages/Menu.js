import React from 'react'
import '../../App.css'
import './Menu.css'
import Footer from '../Footer'
import Items from '../Items'

export default function Reviews() {

    return (
        <div className="recipesblog-container">
            <section className="blog-container">
                <h1 className="main__header">CHECK OUT THIS HANDY MENU {''}
                    <a href="/Users/bhautik/Bhautik Storage/WORK/Web Development/React/beesquarekitchen/src/images/Flyer.pdf" target="_blank">
                        <i className="fas fa-concierge-bell"></i>
                    </a>
                </h1>
                <Items />
            </section>
            <Footer></Footer>
        </div>
    )
} 