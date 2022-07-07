import React from 'react'

export default function Card({ element }) {
    return (
        <li>
            <div className='card_wrapper'>
                <div className='card'>
                    <div className='card_banner'>
                        <img src={element.img} title={element.propertyName} alt={element.propertyName} />
                    </div>
                    <div className='card_info'>
                        <h4 className='card_rent'>{element.rent}<span>/month</span></h4>
                        <h3 className='card_name'>{element.propertyName}</h3>
                        <p className='card_address'>{element.address}</p>
                        <div className='card_propertyType'>
                            <span>{element.propertyType}</span>
                        </div>
                        <p className='card_date'>
                            Move-In: {element.moveInDate}
                        </p>
                    </div>
                </div>
            </div>
        </li>
    )
}
