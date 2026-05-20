import React from 'react'

const Card = (props) => {
  return (
    <div className='row-content'>
    <div className='card-margines'>
    <div className="col">
        <div className="img-card">
            <img src={props.imgUrl1} alt=''/>
        </div>

        <div className="desc-card">
            <p>{props.firstTxt1}</p>
            <h3>{props.title1}</h3>
            <a href='/'>{props.secondTxt1}</a>
            <p>{props.thirdTxt1}</p>
        </div>
    </div>
    </div>

<div className='card-margines'>
<div className="col">
    <div className="img-card">
        <img src={props.imgUrl2} alt=''/>
    </div>

    <div className="desc-card">
        <p>{props.firstTxt2}</p>
        <h3>{props.title2}</h3>
        <a href='/'>{props.secondTxt2}</a>
        <p>{props.thirdTxt2}</p>
    </div>
</div>
</div>


<div className='card-margines'>
<div className="col">
    <div className="img-card">
        <img src={props.imgUrl3} alt=''/>
    </div>

    <div className="desc-card">
        <p>{props.firstTxt3}</p>
        <h3>{props.title3}</h3>
        <a href='/'>{props.secondTxt3}</a>
        <p>{props.thirdTxt3}</p>
    </div>
</div>
</div>


<div className='card-margines'>
<div className="col">
    <div className="img-card">
        <img src={props.imgUrl4} alt=''/>
    </div>

    <div className="desc-card">
        <p>{props.firstTxt4}</p>
        <h3>{props.title4}</h3>
        <a href='/'>{props.secondTxt4}</a>
        <p>{props.thirdTxt4}</p>
    </div>
</div>
</div>
</div>

  )
}

export default Card