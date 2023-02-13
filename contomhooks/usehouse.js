
import React , { useEffect, useRef, useState }from 'react'
import useGetRequest from './useGetRequest';

const UseHouse = () => {

    const [houses, setHouses] = useState([])
    const [counter, setCounter] = useState(0)
    const [error, setError] = useState(true);
    // const [loadingState, setLoadingState]= useState(loadingStatus.isLoading);

    const {get, loadingState} = useGetRequest("/api/houselist/houses")
    useEffect(() => {
        
        const fetchHouses = async () => {
         

                // setLoadingState(loadingStatus.isLoading);
                // const response = await fetch("/api/houselist/houses");
          
                // const data = await response.json();
                const data= await get();
                setHouses(data.housesList);
                setCounter(data.housesList.length +1)
                setError(false);     
      
           
            
            //   fetch("/api/houselist/houses").then(async (data)=> data.json()).then((data)=>{
            //     setHouses(data.HouseList);
            //     setError(false);
            // })
        };

        setTimeout(() => {
            
        fetchHouses();
        }, 2000);
    }, [get]);
    
    return {houses, setHouses,setCounter, setError, error, counter, loadingState}
}

export default UseHouse
