import React from 'react'

const Animal = ({link, name}) => {
    return (
        <div className='Animal'>
            <div>
                <img src={link}  alt="" />
                <h2>{name}</h2>
            </div>
        </div>
    )
}

export default Animal