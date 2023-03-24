import '@/styles/globals.css'
import { Kumbh_Sans } from 'next/font/google'
import { wrapper } from '@/redux/store'

const kumbh = Kumbh_Sans({weight: ['400', '700'], subsets: ['latin']}) 

function App({ Component, pageProps }) {
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

export default wrapper.withRedux(App)