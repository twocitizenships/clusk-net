import { Html, Head, Main, NextScript } from 'next/document'
import Link from 'next/link'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <Link rel="stylesheet" href="../styles/globals.css" />
        <Link rel="icon" href="/favicon.ico" />
        <Link href="https://fonts.cdnfonts.com/css/menlo" rel="stylesheet" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
