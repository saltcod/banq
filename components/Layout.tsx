import Head from 'next/head'
import { Footer } from './Footer'
import { FC } from 'react'
import Link from 'next/link'
import Search from './Search'
import Aside from './Aside'

const Layout: FC = ({ children }) => {
  return (
    <>
      <Head>
        <title>MyTely </title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="container mx-auto mt-12">
        <p className="text-lg font-bold">
          <Link href="/">
            <a>MyTely</a>
          </Link>
        </p>
        <div>
          <Search />
          <div className="flex mt-8">
            <div className="w-full">
              <div>{children}</div>
            </div>
            <Aside />
          </div>
        </div>
      </main>
      {/* <Footer /> */}
    </>
  )
}

export default Layout
