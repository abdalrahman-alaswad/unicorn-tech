import React from 'react'
import "./SecondaryButton.css"

const SecondaryButton = (props) => {
    return (
        <>
            <a href='#' className='secondary-button'>{props.text}</a>
        </>
    )
}

export default SecondaryButton