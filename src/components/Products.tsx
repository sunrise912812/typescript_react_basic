import React, {useState} from 'react'
import { IProduct } from '../models'

interface ProductProps{
    product : IProduct
}

export function Products({product} : ProductProps){
    const [details, setDetails] = useState(false)
    return(
        <div className='border px-2 py-2 rounded flex flex-col items-center mb-2'>
            <img src={product.image} alt={product.image} className="w-1/6"/>
            <p>{product.title}</p>
            <span className='font-bold'>{product.price}</span>
            <button onClick={()=>setDetails(prev=>!prev)} 
            className={`py-2 px-4 border ${!details ? 'bg-yellow-400' : 'bg-blue-400'}`}>
                {details ? 'Hide Detail' : 'Show Detail'}
            </button>
            {details && <div><p>{product.description}</p>
            <p>Rate : <span style={{fontWeight : 'bold'}}>{product?.rating?.rate}</span></p></div>}
        </div>
    )
}