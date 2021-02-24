import React from 'react'
import '../../App.css'
import Footer from '../Footer'
import CardItem from '../CardItem.js'

export default function RecipesBlog(){
    
    return (
        <div className="recipesblog-container">
            <img src="./images/eggs.jpg" alt="Happy Eggs"/>
            <section className="blog-container">
            <div className='cards'>
            <h1>CHECK OUT THE HIDDEN MAGIC BEHIND THIS TASTE!!</h1>
            <div className="cards__container">
                <div className="cards__wrapper">
                    <ul className="cards__items">
                        <CardItem 
                        src='/images/blog-1.jpg'
                        text='Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio quae ipsa iusto perferendis, accusantium ab ullam aliquid corrupti commodi, esse officiis atque vero rerum nulla similique id soluta delectus ut quod ipsam maiores enim necessitatibus.'
                        label='Eggistan'
                        path='/Menu'
                        />
                        <CardItem 
                        src='/images/blog-2.jpg'
                        text='Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio quae ipsa iusto perferendis, accusantium ab ullam aliquid corrupti commodi, esse officiis atque vero rerum nulla similique id soluta delectus ut quod ipsam maiores enim necessitatibus.'
                        label='Egg Lover'
                        path='/Menu'
                        />
                        <CardItem 
                        src='/images/blog-3.jpg'
                        text='Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio quae ipsa iusto perferendis, accusantium ab ullam aliquid corrupti commodi, esse officiis atque vero rerum nulla similique id soluta delectus ut quod ipsam maiores enim necessitatibus.'
                        label='Egg Toofani'
                        path='/Menu'
                        />
                    </ul>
                    <ul className="cards__items">
                        <CardItem 
                        src='/images/blog-4.jpg'
                        text='Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio quae ipsa iusto perferendis, accusantium ab ullam aliquid corrupti commodi, esse officiis atque vero rerum nulla similique id soluta delectus ut quod ipsam maiores enim necessitatibus.'
                        label='Eggistan'
                        path='/Menu'
                        />
                        <CardItem 
                        src='/images/blog-5.jpg'
                        text='Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio quae ipsa iusto perferendis, accusantium ab ullam aliquid corrupti commodi, esse officiis atque vero rerum nulla similique id soluta delectus ut quod ipsam maiores enim necessitatibus.'
                        label='Egg Lover'
                        path='/Menu'
                        />
                        <CardItem 
                        src='/images/blog-6.jpg'
                        text='Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio quae ipsa iusto perferendis, accusantium ab ullam aliquid corrupti commodi, esse officiis atque vero rerum nulla similique id soluta delectus ut quod ipsam maiores enim necessitatibus.'
                        label='Egg Toofani'
                        path='/Menu'
                        />
                    </ul>
                </div>
            </div>
        </div>
            </section>
            <Footer></Footer>
        </div>
    )
} 