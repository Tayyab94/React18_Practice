import currencyFormatter from 'helpers/courencyFormatter'
import React from 'react'

const House = ({ house }) => {
    return (
        <div className='row'>
            <div className='col-6'>
                <h2>ID No {house.id}</h2>
                <p>{house.address}</p>
            </div>
            <div className='col-6'>
                <span>{house.country}</span>
                <span><strong>{currencyFormatter.format(house.price)}</strong></span>
            </div>
        </div>
    )
}

export default House
