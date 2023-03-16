import Image from 'next/image'
import React, { useState } from 'react'

const QuantitySelector = () => {

    const [quantity, setQuantity] = useState(0)

  return (
    <div className='mt-4 flex justify-between'>
        <Image width={10} height={1} alt='quantity minus' src="/icon-minus.svg"/>
        {quantity}
        <Image width={10} height={5} src="/icon-plus.svg" alt='quantity plus'/>
    </div>
  )
}

export default QuantitySelector