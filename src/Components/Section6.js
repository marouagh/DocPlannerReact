import React from 'react'

const Section6= ({offices}) =>
<div class="section6">
	{
		offices.map((el, i) =>
		        <div className="office">
					<a href={el.link}>
						<figure className="img-section6">
							<img scr={el.imagesrc} srcset={el.srcset} alt=''/>
						</figure>
						<div className="office-down">
	                        <p>{el.title}</p>
	<button className="btm-section6">{el.btn}</button>
						</div>
					</a>
				</div>
				)
	}
</div>
            
            

export default Section6