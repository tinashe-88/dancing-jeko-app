import React from 'react'

import Layout from '@common/Layout'
import Navbar from '@common/Navbar'

import Header from '@sections/Header/Header'
import Philosophy from '@sections/Philosophy/Philosophy'
import About from '@sections/About/About'
import Works from '@sections/Works/Works'
import References from '@sections/References/References'
import Contact from '@sections/Contact/Contact'
import Footer from '@sections/Footer/Footer'

const IndexPage = () => (
  <Layout>
    <Navbar />
    <Header />
    <About />
    <Works />
    <References />
    <Philosophy />
    <Contact />
    <Footer />
  </Layout>
)

export default IndexPage