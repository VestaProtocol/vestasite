import Head from 'next/head'
import Image from 'next/image'

import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import { DiGithubBadge } from "react-icons/di";
import { HiDocument } from "react-icons/hi2";

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Vesta Protocol</title>
        <meta name="description" content="Vesta Protocol - a next gen Cosmos VM" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>

        <Image
          className='bg-transparent	'
          src="vesta.svg"
          alt="Vesta Logo"
          width={500}
          height={500}
        />

        <div className='w-fit h-fit flex justify-center'>
          <a className='w-24 h-24' target="_blank" rel="noreferrer" href="https://github.com/VestaProtocol/vesta">
            <DiGithubBadge className='w-full h-full fill-vesta' />
          </a>
          {/* <a className='w-24 h-24' target="_blank" href="https://github.com/VestaProtocol/vesta">
            <HiDocument className='w-full h-full fill-vesta' />
          </a> */}
        </div>




      </main>
    </>
  )
}
