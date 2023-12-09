import Layout from "../components/Layout";
import "../styles/globals.css";

function MyApp({ Component, pageProps }: any) {
  const getLayout =
    Component.getLayout || ((page: any) => <Layout>{page}</Layout>);

  return getLayout(
    <main>
      <Component {...pageProps} />
    </main>
  );
}

export default MyApp;
