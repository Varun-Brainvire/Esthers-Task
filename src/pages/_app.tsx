import Layout from "../components/Layout"
import "../styles/globals.css"
import "../styles/custom.css"
import localFont from "next/font/local"

const myFont = localFont({
  src: "../../public/fonts/strawford-regular-webfont.woff",
})

function MyApp({ Component, pageProps }: any) {
  const getLayout =
    Component.getLayout || ((page: any) => <Layout>{page}</Layout>)

  return getLayout(
    <main className={myFont.className}>
      <Component {...pageProps} />
    </main>
  )
}

export default MyApp
