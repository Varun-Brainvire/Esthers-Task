import '@/styles/globals.css'
import type { AppProps } from 'next/app'
// import { Inter } from 'next/font/google'
import localFont from 'next/font/local'
// import fonts from "../../public/fonts/strawford-regular-webfont.woff"

const myFont = localFont({ src: '../../public/fonts/strawford-regular-webfont.woff' })


export default function App({ Component, pageProps }: AppProps) {
  return(
    <main className={myFont.className}>
      <Component {...pageProps} />
    </main>
    ) 
}
