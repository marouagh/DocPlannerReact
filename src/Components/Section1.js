import React from 'react'


const Section1= (props) =>
<div className="section1">
<img className="lead__logo" src="https://www.docplanner.com/img/sygnet.png" alt=''/>
<h1>Making the healthcare experience more human</h1>
<div className="paragraphe">
    {props.para.map((ell, i) => <div className="colonne" key={i}>
        <p>
            {ell.text}
        </p>
    </div>

    )}
    
    
</div>
</div>
export default Section1