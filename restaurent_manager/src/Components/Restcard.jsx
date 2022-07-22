import React, { useEffect, useState } from 'react'
import '../Styles/Restcard.css'

export const Restcard=({name,url,catagories,cost,votes,rating })=> {
        let myvotes={};
        if(votes<500){
                myvotes={
                        fontfamily:"Copperplate, Papyrus, fantasy",
                        color: "white",
                        backgroundColor: "red",
                        padding: "10px",
                        fontFamily: "Arial",
                        width:"50%",
                        marginLeft:"auto",
                        marginRight:"auto",
                        marginBottom:"1vw"
                      }
                }
        if(votes>=500){
                myvotes={
                        fontfamily:"Copperplate, Papyrus, fantasy",
                        color: "white",
                        backgroundColor: "green",
                        padding: "10px",
                        fontFamily: "Arial",
                        width:"50%",
                        marginLeft:"auto",
                        marginRight:"auto",
                        marginBottom:"1vw"
                }
        }

        let mystyle={};
        if(rating<2){
        mystyle={
                fontfamily:"Copperplate, Papyrus, fantasy",
                color: "white",
                backgroundColor: "red",
                padding: "10px",
                fontFamily: "Arial",
                width:"50%",
                marginLeft:"auto",
                marginRight:"auto"
              }
        }
        else if(rating<4&&rating>=2){
                mystyle={
                        fontfamily:"Copperplate, Papyrus, fantasy",
                        color: "white",
                        backgroundColor: "yellow",
                        padding: "10px",
                        fontFamily: "Arial",
                        width:"50%",
                        marginLeft:"auto",
                        marginRight:"auto"
                      }
                }
        else if(rating>=4){
                mystyle={
                        fontfamily:"Copperplate, Papyrus, fantasy",
                        color: "white",
                        backgroundColor: "green",
                        padding: "10px",
                        fontFamily: "Arial",
                        width:"50%",
                        marginLeft:"auto",
                        marginRight:"auto"
                      }
        }
        return (
          <div className='card-div'>
          <div className='cardName'>{name}</div>
          <div className='imageDiv'><img src={url} alt="images"/></div>
          <div>Catagories:{catagories}</div>
          <div>The Cost for one is ₹{cost}.</div>
          <div style={myvotes}>Votes: {votes}</div>
          <div style={mystyle}>Ratings: {rating} &#9733;</div>
          </div>
        )
      }

