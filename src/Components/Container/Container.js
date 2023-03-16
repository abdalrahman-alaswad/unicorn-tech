import React from 'react'
import "./Container.css"

const Container = (props) => {
    return (
        <div className='container-fluid Main-Container'>
            {props.children}
        </div>
    )
}

export default Container