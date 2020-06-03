import React from 'react'

import Layout from '@common/Layout'
import Navbar from '@common/Navbar'

import Header from '@sections/Header/Header'
import Philosophy from '@sections/Philosophy/Philosophy'
import About from '@sections/About/About'
import Brands from '@sections/Brands/Brands'
import References from '@sections/References/References'
import Contact from '@sections/Contact/Contact'
import Footer from '@sections/Footer/Footer'

const IndexPage = () => (
  <Layout>
    <Navbar />
    <Header />
    <About />
    <Brands />
    <References />
    <Philosophy />
    <Contact />
    <Footer />
  </Layout>
)

export default IndexPage