import '../styles/globals.css';
import Head from 'next/head';
import Navbar from '../components/navbar';
import Footer from '../components/footer';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Portfolio web</title>
        <meta
          name='description'
          content='Generated by create next app by Ace Studios'
        />
        <link rel='icon' href='/favicon.ico' />
        <link
          href='https://unpkg.com/boxicons@2.1.1/css/boxicons.min.css'
          rel='stylesheet'
        ></link>
      </Head>
      <Component {...pageProps} />

      <Navbar />
      {/* <Footer /> */}
    </>
  );
}

export default MyApp;
