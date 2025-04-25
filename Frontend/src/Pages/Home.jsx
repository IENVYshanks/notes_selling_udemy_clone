import React from 'react'
import { Scrollhome } from '../Components/Scrollhome'
import { Toppick } from '../Components/Toppick'
import { useEffect,useState } from 'react'
import ParentComponent from '../Components/ParentComponent'


const Home = () => {
  

  return (
    <div>
      <Scrollhome/>
      <Toppick/>
      <ParentComponent/>
      
    </div>
  )
}
export default Home
