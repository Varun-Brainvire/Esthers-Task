import Layout from "../components/Layout";
import "../styles/globals.css";
import "../styles/custom.css";
import localFont from "next/font/local";
import { Metadata } from 'next';

const myFont = localFont({
  src: "../../public/fonts/strawford-regular-webfont.woff",
});


export const metadata: Metadata = {
  title: 'Sling Academy',
  description:
    'This is a meta description. Welcome to slingacademy.com. Happy coding and have a nice day',
};

function MyApp({ Component, pageProps }: any) {
  const getLayout =
    Component.getLayout || ((page: any) => <Layout>{page}</Layout>);

  return getLayout(
    <main className={myFont.className}>
      <Component {...pageProps} />
    </main>
  );
}

export default MyApp;
