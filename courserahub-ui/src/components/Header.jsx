import React from 'react'


const Header = (props) => {
// let headerStyle ={}
//     if(props.imgUrl){
//         headerStyle = {
//             backgroundImage: `url(${props.imgUrl})`,
        
//     };
// }  
return (
    <div className='header'>
        <div className='col-6'>
            <h1>{props.title}</h1>
            <p>{props.desc}</p>
            <button>{props.btn}</button>
        </div>
        <div className='col-6'>
        <img src={props.imgUrl} alt=''/>
        </div>
    </div>
  )
}

export default Header;