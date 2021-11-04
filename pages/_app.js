/* eslint-disable @next/next/no-page-custom-font */
import "bootstrap/dist/css/bootstrap.css";
import { ThemeProvider } from "styled-components";
import Layout from "../components/Layout/Layout";
import { GlobalStyle, theme } from "../styles/GlobalStyle";
import Head from "next/head";

export default function App({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Head>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link
            href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap"
            as="style"
          />
        </Head>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    </>
  );
}
