import React from 'react'

const Card3 = (props) => {
  return (
    <div className='row-content'>
    <div className='card-margines'>
    <div className="col">
        <div className="img-card">
            <img src={props.imgUrl1} alt=''/>
        </div>

        <div className="desc-card">
            
            <h2>{props.title1}</h2>
            <p>{props.firstTxt1}</p>
            <p className='bold-txt'>{props.secondTxt1}</p>
            <p className='bold-txt'>{props.thirdTxt1}</p>
        </div>
    </div>
    </div>

    <div className='card-margines'>
    <div className="col">
        <div className="img-card">
            <img src={props.imgUrl2} alt=''/>
        </div>

        <div className="desc-card">
            
            <h2>{props.title2}</h2>
            <p>{props.firstTxt2}</p>
            <p className='bold-txt'>{props.secondTxt2}</p>
            <p className='bold-txt'>{props.thirdTxt2}</p>
        </div>
    </div>
    </div>


    <div className='card-margines'>
    <div className="col">
        <div className="img-card">
            <img src={props.imgUrl3} alt=''/>
        </div>

        <div className="desc-card">
            
            <h2>{props.title3}</h2>
            <p>{props.firstTxt3}</p>
            <p className='bold-txt'>{props.secondTxt3}</p>
            <p className='bold-txt'>{props.thirdTxt3}</p>
        </div>
    </div>
    </div>

    </div>



  )
}

export default Card3;