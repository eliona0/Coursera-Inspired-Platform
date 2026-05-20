import React from 'react'

const FooterCards = (props) => {
  return (
    <div className='col-3'>
    <h3>{props.title}</h3>
    <p>{props.p1}</p>
    <p>{props.p2}</p>
    <p>{props.p3}</p>
    <p>{props.p4}</p>
    <p>{props.p5}</p>
    <p>{props.p6}</p>
    <p>{props.p7}</p>
    <p>{props.p8}</p>
  </div>
  )
}

export default FooterCards