import React from 'react';
import { Link } from 'react-router-dom';

function MenuItem(props) {
    return (
        <div>
            <li className="menu_item">
                <Link className="menu__item__link" to={props.path}>
                    <figure className="menu__item__pic-wrap" data-category={props.label}>
                        <img src={props.src} alt={props.label} className="menu__item__img" />
                    </figure>
                    <div className="menu__item__info">
                        <div className="item__description">
                            <h6 className="menu__item__text">{props.text}</h6>
                            <h3 className="menu__item__price">{props.price}</h3>
                        </div>
                    </div>
                </Link>
            </li>
        </div>
    )
};

export default MenuItem;
