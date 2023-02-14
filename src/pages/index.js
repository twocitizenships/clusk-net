import Head from 'next/head'
import Link from 'next/link'
import Header from './header'
import Footer from './footer'
import Bio from './bio'

export default function Home() {
  return (
    <>
      <Head>
        <Link rel="stylesheet" href="../styles/globals.css" />
        <Link rel="icon" href="/favicon.ico" />
        <Link href="https://fonts.cdnfonts.com/css/menlo" rel="stylesheet" />
      </Head>
      <main>
        <Header />
        <Bio />
        <Footer />
      </main>
    </>
  )
}
