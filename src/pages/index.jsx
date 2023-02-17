import Head from 'next/head'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Bio from '../components/Bio'

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
