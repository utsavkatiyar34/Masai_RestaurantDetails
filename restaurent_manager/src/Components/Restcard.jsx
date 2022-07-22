import React from 'react'
import '../Styles/Restcard.css'

export const Restcard=({name,url,catagories,cost,votes,rating })=> {
        return (
          <div className='card-div'>
          <div className='cardName'>{name}</div>
          <div className='imageDiv'><img src={url} alt="images"/></div>
          <div>Catagories:{catagories}</div>
          <div>The Cost for one is ₹{cost}.</div>
          <div>Votes: {votes}</div>
          <div>Rating: {rating}</div>
          </div>
        )
      }

