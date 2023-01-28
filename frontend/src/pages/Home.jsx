import React from 'react'
import Expert from '../companents/Expert/Expert'
import Features from '../companents/Features/Features'
import Hero from '../companents/Hero/Hero'
import Project from '../companents/Project/Project'
import Solutions from '../companents/Solutions/Solutions'
import Helmet from 'react-helmet'
const Home = () => {
  return (
    <div>
        <Helmet>
            <title>Home</title>
        </Helmet>
      <Hero/>
      <Solutions/>
      <Expert/>
      <Features/>
      <Project/>
    </div>
  )
}

export default Home
