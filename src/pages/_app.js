import '@/styles/globals.css'
import { Kumbh_Sans } from 'next/font/google'

const kumbh = Kumbh_Sans({weight: ['400', '700'], subsets: ['latin']}) 

export default function App({ Component, pageProps }) {
  return (
    <>
      <style jsx global>{`
        html {
          font-family: ${kumbh.style.fontFamily};
        }
      `}</style>
      <Component {...pageProps} />
    </>
  )
}
