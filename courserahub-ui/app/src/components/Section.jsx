import React from 'react'

const Section = (props) => {
  return (
    <div >
        <div className={`header section ${props.sectionReverse}`}>
            <div className="col-6">
            <img src={props.imgUrl} alt=""/>
            </div>
            <div className="col-6">
            <h1>{props.title}</h1>
            <p className='first-p'>{props.txt}</p>
            <button>{props.btn}</button>
            <p className='second-p'>{props.txt2}</p>
            <p className='third-p'>{props.txt3}</p>

            </div>
        </div>
    </div>
  )
}

export default Section