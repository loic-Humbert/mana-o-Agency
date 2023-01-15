import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Header from './header'
import OffersList from './offers-list'

const Home: NextPage = () => {
  return (
    <div>
      <OffersList></OffersList>

    </div>
  )
}

export default Home
