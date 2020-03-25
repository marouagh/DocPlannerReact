import React from 'react'
import NavMenu from './Components/NavMenu'
import Section1 from './Components/Section1'
import Section2 from './Components/Section2'
import Section3 from './Components/Section3'
import Section4 from './Components/Section4'
import Section5 from './Components/Section5'
import Section6 from './Components/Section6'
import Footer from './Components/Footer'





import {MenuItems, paragraphe, grid, logo, office, stats ,footer} from './Components/Data'
import './App.css'


const App = () => {
  return <div className="app">
    <NavMenu listOfItems={MenuItems} />
    <Section1 para={paragraphe}/>
    <Section2 colomngrid={grid}/>
    <Section3 logos={logo}/>
    <Section4 statistic={stats}/>
    <Section5/>
    <Section6 offices={office}/>
    <Footer foot={footer}/>
    
  </div>
}
export default App