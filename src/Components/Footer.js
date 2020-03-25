import React from 'react'

const Footer= ({foot}) =>
<footer>
            <div className="section-footer">
                {foot.map((el, i)=>
                <p className="para1" key={i}>
					{el.paragraphe}
                    {
                     el.link? el.link.map((elt,i) => 
                                <span key={i}>
                                    <a href={elt.href}>{ i ===el.link.length-1 ? elt.text : elt.text }</a>{i===el.link.length-1 ? null :(i===el.link.length-2 ? ` and `:`,`)}
                                </span>)
                    :null} 		
				 </p >

				)}
                
            </div>
        </footer> 
            
            

export default Footer