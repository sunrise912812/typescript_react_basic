import axios from 'axios'
import React, {useState} from 'react'
import { IProduct } from '../models'
import { ErrorMessage } from './ErrorMessage'

const productData : IProduct = {
    title: 'test product',
    price: 13.5,
    description: 'lorem ipsum set',
    image: 'https://i.pravatar.cc',
    category: 'electronic',
    rating : {
        rate : 0,
        count : 0
    }
}

interface CreateProductProps{
    onCreate : (product : IProduct)=> void
}

export const CreateProduct = ({onCreate} : CreateProductProps)=>{

    const [value, setValue] = useState('')
    const [error, setError] = useState('')

    async function submitHandler(event : React.FormEvent){
        event.preventDefault()
        setError('')

        if(value.trim().length === 0){
            setError('Pless enter valid title.')
            return
        }

        productData.title = value
        const {data} = await axios.post<IProduct>('https://fakestoreapi.com/products', productData)

        onCreate(data)
    }
    return(
        <form onSubmit={submitHandler}>
            <input type="text" 
            className='py-2 px-4 border mb-2 w-full outline-0' 
            placeholder='Enter product title...'
            value={value}
            onChange={(event : React.ChangeEvent<HTMLInputElement>)=>setValue(event.target.value)} />
            {error && <ErrorMessage error={error}/>}
            <button type="submit" className="py-2 px-4 border bg-yellow-400 hover:bg-blue-500">Create</button>
        </form>
    )
}