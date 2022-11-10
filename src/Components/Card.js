import React from 'react'
import "./card.css"
import {Link} from "react-router-dom"



const Card = ({data})=>{
//Desctructing prop
  const { id, modelName, bodyType, modelType, imageUrl } = data;
    
  return (
  
  <div className='card-body'>
  
        <div className="card-headings">
          <h2 className="brand">{bodyType.toUpperCase()}</h2>
          <div className="headings2">
            <h4 className="model">{modelName}</h4>
            <h4 className="modelType">{modelType}</h4>
          </div>
        </div>
  
        <div className="cartImg">
          <img src={imageUrl} alt="img" />
        </div>
  
  
        <div className="card-btn">
          <Link to={`/learn/${id}` } style={{textDecoration:"none",color:'rgb(79 79 255)'}} className="btn">LEARN <span className='sp'> &gt;</span> </Link>
          <Link to={`/shop/${id}`}  style={{textDecoration:"none",color:'rgb(79 79 255)'}} className="btn">SHOP <span className='sp'> &gt;</span></Link>
        </div>
  
  
      </div>
    
    );
}

export default Card