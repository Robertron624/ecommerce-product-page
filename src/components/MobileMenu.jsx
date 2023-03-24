import React from 'react'
import Link from 'next/link'

const MobileMenu = ({menuLinks}) => {
  return (
    <ul>
        {menuLinks.map((menuLink, i) => {
            return <li key={i} className='mb-4'>
                <Link className='capitalize font-bold' href={`/${menuLink}`}>{menuLink}</Link>
            </li>
        })}
    </ul>
  )
}

export default MobileMenu