import React from 'react'
import CardItem from './CardItem'
import './Cards.css'

function Cards() {
    return (
        <div className='cards'>
            <h1>Check out these Special Items! </h1>
            <div className="cards__container" >
                <div className="cards__wrapper">
                    <ul className="cards__items">
                        <CardItem 
                        src='/images/Tikhari.jpg'
                        text='The best EGG TIKHARI!!'
                        label='Tikhari'
                        path='/Menu'
                        />
                        <CardItem 
                        src='/images/paplet2.png'
                        text='Delicious EGG PAPLET!!'
                        label='Paplet'
                        path='/Menu'
                        />
                        <CardItem 
                        src='/images/AustralianFry.jpg'
                        text='Yummy Australian Fry!!'
                        label='Australian Fry'
                        path='/Menu'
                        />
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Cards
