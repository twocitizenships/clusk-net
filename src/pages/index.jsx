import Head from 'next/head'
import Header from './header'
import Footer from './footer'
import Bio from './bio'

export default function Home() {
  return (
    <>
      {/* <Head>
      </Head> */}
      <main>
        <Header />
        <Bio />
        <Footer />
      </main>
    </>
  )
}
