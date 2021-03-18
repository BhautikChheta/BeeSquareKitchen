import React from 'react'
import MenuItem from './MenuItem'
import './Items.css'

function Items() {
    return (
        <div className='items'>
            <div className="menu__container">
                <div className="menu__wrapper_four">
                    <ul className="menu__items">
                        <MenuItem
                            src='/images/Menu-Items/BoiledEggs.jpg'
                            label='Boiled Eggs'
                            text='Boiled eggs with spicy seasonings'
                            price='$1'
                            path='/Menu'
                        />
                        <MenuItem
                            src='/images/Menu-Items/Omelete.jpg'
                            label='Omelete'
                            text='Omelete made with indian seasonings, tomato, onions'
                            price='$3'
                            path='/Menu'
                        />
                        <MenuItem
                            src='/images/Menu-Items/TomatoFry.jpg'
                            label='Tomato Fry'
                            text='Half Fry topped with the spicy tomato-onion gravy'
                            price='$5'
                            path='/Menu'
                        />
                        <MenuItem
                            src='/images/Menu-Items/LasanFry2.jpg'
                            text='Half Fry topped with green garlic and green onions'
                            label='Lasan Fry'
                            price='$5'
                            path='/Menu'
                        />
                    </ul>
                    <ul className="menu__items">
                        <MenuItem
                            src='/images/Menu-Items/Bhurji.jpg'
                            label='Bhurji'
                            text='Raw eggs cooked with onions, tomatoes, green garlic and seasonings'
                            price='$8'
                            path='/Menu'
                        />
                        <MenuItem
                            src='/images/Menu-Items/Lachko1.jpg'
                            label='Lachko'
                            text='Half cooked row eggs in butter, mixed with green garlic, onions and tomatoes'
                            price='$10'
                            path='/Menu'
                        />
                        <MenuItem
                            src='/images/Menu-Items/Khimo.jpg'
                            label='Khimo'
                            text='Boiled eggs gravy prepared with onions, tomatos and green onions'
                            price='$10'
                            path='/Menu'
                        />
                        <MenuItem
                            src='/images/Menu-Items/Gotalo.jpg'
                            label='Gotalo'
                            text='Mixture of a Khimo and a half fry'
                            price='$10'
                            path='/Menu'
                        />
                    </ul>
                    <ul className="menu__items">
                        <MenuItem
                            src='/images/Menu-Items/Ravaiya.jpg'
                            label='Ravaiya'
                            text='Boiled eggs saute in a butter and cooked in a onion, tomatos, green garlic gravy'
                            price='$12'
                            path='/Menu'
                        />
                        <MenuItem
                            src='/images/Menu-Items/Patudi.jpg'
                            label='Patudi'
                            text='Cheesy Omelete topped with green gravy and tempering with sesame seeds & curry leaves'
                            price='$12'
                            path='/Menu'
                        />
                        <MenuItem
                            src='/images/Menu-Items/AustralianFry.jpg'
                            label='Australian Fry'
                            text='Half Fry topped with gravy of boiled egg, tomatoes and onions'
                            price='$12'
                            path='/Menu'
                        />
                        <MenuItem
                            src='/images/Menu-Items/Tikhari.jpg'
                            label='Tikhari'
                            text='Half fry topped with two gravies and tempering with sesame seeds, dry red chilli & curry leaves'
                            price='$12'
                            path='/Menu'
                        />
                    </ul>
                    <ul className="menu__items">

                        <MenuItem
                            src='/images/Menu-Items/Paplet.jpg'
                            label='Paplet'
                            text='Omelete filled with boiled eggs and topped with egg yolk gravy'
                            price='$12'
                            path='/Menu'
                        />
                        <MenuItem
                            src='/images/Menu-Items/EggKatori.jpg'
                            label='Egg Katori'
                            text='Boiled white egg bowls filled with yolk, onions, green garlic and tomatoes stuffing'
                            price='$5'
                            path='/Menu'
                        />
                    </ul>
                </div>






                <div className="menu__wrapper_three">
                    <ul className="menu__items">
                        <MenuItem
                            src='/images/Menu-Items/BoiledEggs.jpg'
                            text='Boiled eggs with spicy seasonings'
                            label='Boiled Eggs'
                            price='$1'
                            path='/Menu'
                        />
                        <MenuItem
                            src='/images/Menu-Items/Omelete.jpg'
                            label='Omelete'
                            text='Omelete made with indian seasonings, tomato, onions'
                            price='$3'
                            path='/Menu'
                        />
                        <MenuItem
                            src='/images/Menu-Items/TomatoFry.jpg'
                            label='Tomato Fry'
                            text='Half Fry topped with the spicy tomato-onion gravy'
                            price='$5'
                            path='/Menu'
                        />
                    </ul>
                    <ul className="menu__items">
                        <MenuItem
                            src='/images/Menu-Items/LasanFry2.jpg'
                            label='Lasan Fry'
                            text='Half Fry topped with green garlic and green onions'
                            price='$5'
                            path='/Menu'
                        />
                        <MenuItem
                            src='/images/Menu-Items/Bhurji.jpg'
                            label='Bhurji'
                            text='Raw eggs cooked with onions, tomatoes, green garlic and seasonings'
                            price='$8'
                            path='/Menu'
                        />
                        <MenuItem
                            src='/images/Menu-Items/Lachko1.jpg'
                            label='Lachko'
                            text='Half cooked row eggs in butter, mixed with green garlic, onions and tomatoes'
                            price='$10'
                            path='/Menu'
                        />
                    </ul>
                    <ul className="menu__items">
                        <MenuItem
                            src='/images/Menu-Items/Khimo.jpg'
                            label='Khimo'
                            text='Boiled eggs gravy prepared with onions, tomatos and green onions'
                            price='$10'
                            path='/Menu'
                        />
                        <MenuItem
                            src='/images/Menu-Items/Gotalo.jpg'
                            label='Gotalo'
                            text='Mixture of a Khimo and a half fry'
                            price='$10'
                            path='/Menu'
                        />
                        <MenuItem
                            src='/images/Menu-Items/Ravaiya.jpg'
                            label='Ravaiya'
                            text='Boiled eggs saute in a butter and cooked in a onion, tomatos, green garlic gravy'
                            price='$12'
                            path='/Menu'
                        />
                    </ul>
                    <ul className="menu__items">
                        <MenuItem
                            src='/images/Menu-Items/Patudi.jpg'
                            label='Patudi'
                            text='Cheesy Omelete topped with green gravy and tempering with sesame seeds & curry leaves'
                            price='$12'
                            path='/Menu'
                        />
                        <MenuItem
                            src='/images/Menu-Items/AustralianFry.jpg'
                            label='Australian Fry'
                            text='Half Fry topped with gravy of boiled egg, tomatoes and onions'
                            price='$12'
                            path='/Menu'
                        />
                        <MenuItem
                            src='/images/Menu-Items/Tikhari.jpg'
                            label='Tikhari'
                            text='Half fry topped with two gravies and tempering with sesame seeds, dry red chilli & curry leaves'
                            price='$12'
                            path='/Menu'
                        />
                    </ul>
                    <ul className="menu__items">
                        <MenuItem
                            src='/images/Menu-Items/Paplet.jpg'
                            label='Paplet'
                            text='Omelete filled with boiled eggs and topped with egg yolk gravy'
                            price='$12'
                            path='/Menu'
                        />
                        <MenuItem
                            src='/images/Menu-Items/EggKatori.jpg'
                            label='Eggs Katori'
                            text='Boiled white egg bowls filled with yolk, onions, green garlic and tomatoes stuffing'
                            price='$5'
                            path='/Menu'
                        />
                    </ul>
                </div>




                <div className="menu__wrapper_two">
                    <ul className="menu__items">
                        <MenuItem
                            src='/images/Menu-Items/BoiledEggs.jpg'
                            label='Boiled Eggs'
                            text='Boiled eggs with spicy seasonings'
                            price='$1'
                            path='/Menu'
                        />
                        <MenuItem
                            src='/images/Menu-Items/Omelete.jpg'
                            label='Omelete'
                            text='Omelete made with indian seasonings, tomato, onions'
                            price='$3'
                            path='/Menu'
                        />
                    </ul>
                    <ul className="menu__items">
                        <MenuItem
                            src='/images/Menu-Items/TomatoFry.jpg'
                            label='Tomato Fry'
                            text='Half Fry topped with the spicy tomato-onion gravy'
                            price='$5'
                            path='/Menu'
                        />
                        <MenuItem
                            src='/images/Menu-Items/LasanFry2.jpg'
                            label='Lasan Fry'
                            text='Half Fry topped with green garlic and green onions'
                            price='$5'
                            path='/Menu'
                        />
                    </ul>
                    <ul className="menu__items">
                        <MenuItem
                            src='/images/Menu-Items/Bhurji.jpg'
                            label='Bhurji'
                            text='Raw eggs cooked with onions, tomatoes, green garlic and seasonings'
                            price='$8'
                            path='/Menu'
                        />
                        <MenuItem
                            src='/images/Menu-Items/Lachko1.jpg'
                            label='Lachko'
                            text='Half cooked row eggs in butter, mixed with green garlic, onions and tomatoes'
                            price='$10'
                            path='/Menu'
                        />
                    </ul>
                    <ul className="menu__items">
                        <MenuItem
                            src='/images/Menu-Items/Khimo.jpg'
                            label='Khimo'
                            text='Boiled eggs gravy prepared with onions, tomatos and green onions'
                            price='$10'
                            path='/Menu'
                        />
                        <MenuItem
                            src='/images/Menu-Items/Gotalo.jpg'
                            label='Gotalo'
                            text='Mixture of a Khimo and a half fry'
                            price='$10'
                            path='/Menu'
                        />
                    </ul>
                    <ul className="menu__items">
                        <MenuItem
                            src='/images/Menu-Items/Ravaiya.jpg'
                            label='Ravaiya'
                            text='Boiled eggs saute in a butter and cooked in a onion, tomatos, green garlic gravy'
                            price='$12'
                            path='/Menu'
                        />
                        <MenuItem
                            src='/images/Menu-Items/Patudi.jpg'
                            label='Patudi'
                            text='Cheesy Omelete topped with green gravy and tempering with sesame seeds & curry leaves'
                            price='$12'
                            path='/Menu'
                        />
                    </ul>
                    <ul className="menu__items">
                        <MenuItem
                            src='/images/Menu-Items/AustralianFry.jpg'
                            label='Australian Fry'
                            text='Half Fry topped with gravy of boiled egg, tomatoes and onions'
                            price='$12'
                            path='/Menu'
                        />
                        <MenuItem
                            src='/images/Menu-Items/Tikhari.jpg'
                            label='Tikhari'
                            text='Half fry topped with two gravies and tempering with sesame seeds, dry red chilli & curry leaves'
                            price='$12'
                            path='/Menu'
                        />
                    </ul>
                    <ul className="menu__items">
                        <MenuItem
                            src='/images/Menu-Items/Paplet.jpg'
                            label='Paplet'
                            text='Omelete filled with boiled eggs and topped with egg yolk gravy'
                            price='$12'
                            path='/Menu'
                        />
                        <MenuItem
                            src='/images/Menu-Items/EggKatori.jpg'
                            label='Eggs Katori'
                            text='Boiled white egg bowls filled with yolk, onions, green garlic and tomatoes stuffing'
                            price='$5'
                            path='/Menu'
                        />
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Items
