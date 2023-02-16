import Head from 'next/head'
import Header from './header'
import Footer from './footer'
import Bio from './bio'

export default function Home() {
  return (
    <><div>
        <Head>
        <title>Clusk.net | Photographer, Writer, Engineer</title>
        </Head>
        <Header />
        <Bio />
        <Footer />
    </div>
    </>
  )
}
