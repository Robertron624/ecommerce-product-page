import Image from 'next/image'
import React, { useState } from 'react'
import styles from '@/styles/QuantitySelector.module.css'

const QuantitySelector = () => {

    const [quantity, setQuantity] = useState(0)

  return (
    <div className={`rounded-md py-3 px-2 mt-4 flex justify-between items-center ${styles.quantity_container}`}>
        <Image className={styles.quantity_minus} width={10} height={1} alt='quantity minus' src="/icon-minus.svg"/>
        <span className='font-bold'>{quantity}</span>
        <Image className={styles.quantity_plus} width={10} height={5} src="/icon-plus.svg" alt='quantity plus'/>
    </div>
  )
}

export default QuantitySelector