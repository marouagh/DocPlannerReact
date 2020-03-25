import React from 'react'

const Section4= ({statistic}) =>
<div>
            <div className="section4">
				<div className="stat-text">
				<h1>The world's<br/>biggest healthcare platform</h1>
				<p>We work from 6 offices all over the world, bringing Docplanner<br/>Group to life in almost 20 countries.</p>
				</div>
				<img className='img-stat' src='https://www.docplanner.com/img/logo.png' alt=''/>
				<div className="stats">
				{statistic.map((el, i) =>
                  <div className={`stat-item stat-item${i+1}`}>
				  <img src={el.imagesrc} alt='img' />
				<h3>{el.title3}</h3>
				<p>{el.text}</p>
			  </div>
				)}
				
				
				</div>

				

				
                
            </div>
</div> 
            
            

export default Section4