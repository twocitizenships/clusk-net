import Head from 'next/head'
import Header from './components/header'
import Footer from './components/footer'
import Bio from './components/bio'

export default function Home() {
  return (
    <div>
        <Head>
        <title>Clusk.net | Photographer, Writer, Engineer</title>
        </Head>
        <Header />
        <Bio />
        <Footer />
    </div>
  )
}
