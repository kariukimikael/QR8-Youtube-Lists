import React from 'react'
import {Header, Sidebar, VidContainer} from '../../Components'
import './Homepage.scss'

const Homepage = () => {
  return (
    <>
      <Header />
      <div className="content-wrapper">
        <Sidebar />
        <VidContainer />
      </div>
    </>
  )
}

export default Homepage