// import Layout from "../components/Layout"
import "../styles/globals.css"
import "../styles/custom.css"
import localFont from "next/font/local"
import { ReactElement, ReactNode } from "react"
import { AppProps } from "next/app"
import { NextPage } from "next"
import NestedLayout from "@/components/NestedLayout"

const myFont = localFont({
  src: "../../public/fonts/strawford-regular-webfont.woff",
})

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode
}

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
}

// function MyApp({ Component, pageProps }: any) {
//   const getLayout =
//     Component.getLayout || ((page: any) => <Layout>{page}</Layout>)

//   return getLayout(
//     <main className={myFont.className}>
//       <Component {...pageProps} />
//     </main>
//   )
// }

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout ?? ((page) => page)
  return getLayout(
    <main style={{ height: "100%" }} className={myFont.className}>
      <Component {...pageProps} />
    </main>
  )
}
export default MyApp
