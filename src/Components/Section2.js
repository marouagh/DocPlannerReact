import React from 'react'

const Section2= (props) => 
<div className="section2">
	{
		props.colomngrid.map((el, i) =>  
		<div style={{backgroundColor:el.color}} className={el.name} key={i}>
		    <div className="titre">
		      <h2>{el.title2}</h2>
	          <h1>{el.title1}</h1>
		    </div>
			{el.selectOption ? <select>
								<option>CHOOSE COUNTRY</option>
								{el.selectOption.map((elt, i) => <option>{elt.option}</option>)}
			
																	
				               </select> : null}
		    <img className={el.imagename} src={el.imagesrc} alt=''/>
	     </div>

		)
	}  
            </div>

            

export default Section2