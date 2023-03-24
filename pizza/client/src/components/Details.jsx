import React from 'react'
import {useQuery} from 'react-query';
import { getDetails } from './getData';

export const Details=({selProduct,setSelProduct})=> {
    const {data,status} = useQuery(['pricelist',selProduct.id],getDetails)

    status == 'success' && console.log(data.data)

    console.log('details',selProduct.id)
  return (
    <div className='details'>
        <h1>{selProduct.name}</h1>
        <img src={selProduct.img_url} alt="pizza" />

        {status=='success' && data.data.map(obj=><div>{obj.size} - {obj.price}</div>)}

        <button onClick={()=>setSelProduct(null)}>Vissza</button>
    </div>
  )
}
