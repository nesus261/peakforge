import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import NavBar from './NavBar'
import Welcome from './home/Welcome'
import Us from './home/Us'
import Websites from './home/Websites'
import Scripts from './home/Scripts'
import MobileAps from './home/MobileAps'

function Home() {
  return (
    <>
        <NavBar active="home"></NavBar>
        <Welcome></Welcome>
        <Us></Us>
        <Websites></Websites>
        <Scripts></Scripts>
        <MobileAps></MobileAps>
    </>
  )
}

export default Home