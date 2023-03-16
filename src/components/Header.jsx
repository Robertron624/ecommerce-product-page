import Image from 'next/image'
import React from 'react'
import styles from '@/styles/Header.module.css'

const Header = () => {
  return (
    <header className={`py-5 ${styles.headerOuter}`}>
        <div className="inner flex justify-between px-6">
          <div className=" gap-3 flex items-center">
            <Image width={15} height={20}  src="/icon-menu.svg" alt='menu trigger icon'/>
            <Image height={90} width={100} alt='/site logo' src="logo.svg"/>
          </div>
          <div className="right flex gap-4">
            <Image width={20} height={20} src="/icon-cart.svg" alt='minicart icon'/>
            <Image height={20} width={20} src="/image-avatar.png" alt='user-avatar'/>
          </div>
        </div>
    </header>
  )
}

export default Header