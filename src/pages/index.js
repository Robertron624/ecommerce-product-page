import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Header from '@/components/Header'
import HomeSlider from '@/components/HomeSlider'
import ProductDescription from '@/components/ProductDescription'
import AddToCartButton from '@/components/AddToCartButton'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Frontend Mentor | E-commerce product page</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon-32x32.png" />
      </Head>
      <Header />
      <main className={styles.main}>
        <HomeSlider/>
        <ProductDescription/>
        <AddToCartButton/>
      </main>
    </>
  )
}
