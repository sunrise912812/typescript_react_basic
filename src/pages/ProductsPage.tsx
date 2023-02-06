import React, { useContext } from 'react';
import {Products} from '../components/Products' 
import { useProducts } from '../hooks/products'
import { Loader } from '../components/Loader'
import { ErrorMessage } from '../components/ErrorMessage'
import { Modal } from '../components/Modal'
import { CreateProduct } from '../components/CreateProduct'
import { IProduct } from '../models';
import { ModalContext } from '../context/ModalContext';

export const ProductsPage = ()=>{
    const {product, loading, error, addProduct} = useProducts()
    const {modal, open : openModal, close : closeModal} = useContext(ModalContext) //Переиеновываем название функций close, open в closeModal, openModal
  
    const createHandler = (product : IProduct)=>{
      addProduct(product)
      closeModal()
    }
    return (
    <div className="container mx-auto max-w-2xl pt-5">
      <button className='fixed buttom-5 right-5 rounded-full bg-red-700 text-white text-2xl px-4 py-2' onClick={openModal}>+</button>
      {
        loading 
        ? <Loader/>
        :
        product.map((p)=>{
          return <Products key={p.id} product={p}/>
        })
      }
      {error && <ErrorMessage error={error}/>}
      {modal && <Modal title="Create new product" onClose={closeModal}>
        <CreateProduct onCreate={createHandler}/>
      </Modal>}
    </div>
    )
}