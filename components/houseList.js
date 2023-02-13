import UseHouse from 'contomhooks/usehouse'
import loadingStatus from 'helpers/loadingStatus';
import React, { useEffect, useRef, useState } from 'react'
import HouseRows from './houseRows'
import LoadingIndicator from './loadingIndicator';

const HouseList = ({selectHouse}) => {


   const {houses, setHouses,setCounter,error,
     counter, loadingState}= UseHouse();
    if(loadingState!= loadingStatus.loaded)
    {
        return <LoadingIndicator loadingState={loadingState} />
    }

    
    const addHouse = () => {
        setHouses([...houses,
        {
            id: counter,
            address: " demo amet consectetur adipisicing elit. Saepe soluta rerum sequi molestias? Architecto expedita enim laboriosam tempore. Veniam, eligendi dolore nam necessitatibus perspiciatis facere iure sint quibusdam exercitationem quidem!",
            country: "London",
            price: Math.random()
        }])

        setCounter(counter + 1);
    }
    return (

        <>
            <div className='row mb-2'>
                <div className='col-12 text-center'>
                    <h2 className='themeFontColor'>
                        House Currently on the Marker
                    </h2>
                </div>

            </div>
            <div className='row'>
                <div className='col-12'>
                    <table className='table table-hover'>

                        <thead>
                            <tr>
                                <th>Address</th>
                                <th>Country</th>
                                <th>Asking Price</th>
                            </tr>
                        </thead>

                        <tbody >
                            {!error && (Array.isArray(houses) && houses.map((item) => <HouseRows key={item.id} house={item}  selectHouse={selectHouse} />))}
                        </tbody>
                    </table>
                </div>
            </div>

            
            <button className='btn btn-primary' onClick={addHouse}>Add House</button>
          
            
        </>
    )
}

export default HouseList
