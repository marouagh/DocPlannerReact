import React from 'react'

const NavMenu= (props) =>
  <div>
    <header>
    <img className="logo-docplanner" src="https://www.docplanner.com/img/logo-default-group-en.svg?v=1" alt="Docplanner Group"/>
    <nav>
    <ul>
    {
      props.listOfItems.map(
        
        (el, i) =>  <div className='' key={i}>
          <li ><a href={el.link}>{el.title}</a>
          <ul>
            
            
            {el.dropdown ? el.dropdown.map((elt,i)=>
            <li key={i}><a href={elt.link}>{elt.title}</a></li>
              ):null}
            
          </ul>
          
          </li>
        </div>
      )
    }
    </ul>
    </nav>
</header>
  </div>

export default NavMenu