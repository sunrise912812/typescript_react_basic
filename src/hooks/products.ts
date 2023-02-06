import {useEffect, useState} from 'react';
import axios, { AxiosError } from 'axios';
import { IProduct } from '../models';

export function useProducts(){
  const [product, setProduct] = useState<IProduct[]>([]) // У стейта указываем нужный тип через дженерик
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  function addProduct(product : IProduct){
    setProduct(prev=> [...prev, product])
  }

  async function fetchProducts() {
    try{
      setError('')
      setLoading(true)
      const {data} = await axios.get<IProduct[]>('https://fakestoreapi.com/products?limit=5')
      setProduct(data)
      setLoading(false)
    }
    catch(e : unknown){
      setLoading(false)
      const err = e as AxiosError
      setError(err.message)
    }
  }

  useEffect(()=>{
    fetchProducts()
  },[])

  return { product, loading, error, addProduct }
}