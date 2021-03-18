import React from 'react'

function SocialApps(props) {
    return (
        <div className="socialapps__container">
            <a href={props.href}
                className="social-icon-link youtube" 
                area-label ={props.name}
                target='_blank'>
                <i className={'fab fa-'+ props.icon}></i>
                {props.children}
            </a>
        </div>
    )
}

export default SocialApps