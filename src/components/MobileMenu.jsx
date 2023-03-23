import React from 'react'
import Link from 'next/link'

const menuLinks = ["colections", "men", "women", "about", "contact"]

const MobileMenu = () => {
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