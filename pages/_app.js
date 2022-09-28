import App from "next/app"
import Head from "next/head"
import "../styles/style.css"
import "../styles/global.css"
import { createContext } from "react"

// Store Strapi Global object in context
export const GlobalContext = createContext({})

const MyApp = ({ Component, pageProps }) => {
  const { global } = pageProps

  return (
    <>
      <Head>
        <link rel="shortcut icon" />
        <link
          rel="preload"
          href="/fonts/Itim/Itim-Regular.ttf"
          as="font"
          crossOrigin=""
        />
      </Head>
      <GlobalContext.Provider value={global}>
        <Component {...pageProps} />
      </GlobalContext.Provider>
    </>
  )
}

// getInitialProps disables automatic static optimization for pages that don't
// have getStaticProps. So article, category and home pages still get SSG.
// Hopefully we can replace this with getStaticProps once this issue is fixed:
// https://github.com/vercel/next.js/discussions/10949

export default MyApp
