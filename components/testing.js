import React, { useState } from 'react'
import Banner from './banner'
import House from './house';
import HouseList from './houseList'
const Testing = () => {
  const [selectedHouse, setSelectedHouse]= useState();

  const selectionHouse=(house)=>{
    setSelectedHouse(house)
  }

  return (
    <div>
      <Banner headerText="Hello World" />
    {
      selectedHouse ? (<House house={selectedHouse} />):
      (<HouseList selectHouse={selectionHouse} />)
     
    }    
      
    </div>
  )
}

export default Testing
