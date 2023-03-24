import Image from 'next/image'
import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import styles from '@/styles/QuantitySelector.module.css'
import { addOne, removeOne } from '@/redux/productSlice'

const QuantitySelector = () => {

    const dispatch = useDispatch()

    const quantity = useSelector(state => state.product.quantity)

    console.log("first quantity -> ", quantity)

    const addOneCall = () => {
      dispatch(addOne())
    }

    const removeOneCall = () => {
      dispatch(removeOne())
    }

  return (
    <div className={`mt-5 rounded-md py-3 px-2 w-full flex justify-between items-center ${styles.quantity_container}`}>
        <Image onClick={removeOneCall} className={`${styles.quantity_minus} cursor-pointer`} width={10} height={1} alt='quantity minus' src="/icon-minus.svg"/>
        <span className='font-bold'>{quantity}</span>
        <Image onClick={addOneCall} className={`${styles.quantity_plus} cursor-pointer`} width={10} height={5} src="/icon-plus.svg" alt='quantity plus'/>
    </div>
  )
}

export default QuantitySelector