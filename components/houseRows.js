import currencyFormatter from 'helpers/courencyFormatter'
import React from 'react'

const HouseRows = ({ house, selectHouse }) => {
    return (
    
            <tr onClick={()=> selectHouse(house)}>
                <td>{house.id}</td>
                <td>{house.address}</td>
                <td>{house.country}</td>
                {
                    house.price && (<td className={`${house.price >=200? "text-primary":""}`}>{currencyFormatter.format(house.price)}</td>)
                } 
                
            </tr>
      
    )
}

const HouseRowMemo = React.memo(HouseRows);
export default HouseRows

export { HouseRowMemo };
