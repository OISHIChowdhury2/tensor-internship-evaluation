import type { NextPage } from 'next'
import Head from 'next/head'
import React from 'react'

/**
 * Home: The Landing page of the web app
 * @return {JSX.Element} The JSX Code for the Home Page
 */

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Home</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1 className="text-slate-700 text-3xl bg-slate-200 text-center">Welcome to Next Starter</h1>
    </div>
  )
}

export default Home
