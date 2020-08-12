import React from 'react'

const Figure = ({wrongLetters}) => {

    let errors = wrongLetters.length

    return (
       
       

      <h1>
       {
         
        (errors > 0) ?
        <span>L </span>
        :
        <p></p> 
       }
    
       {
        (errors > 1) ?
        <span>O </span>
        :
        <p></p> 
       }
    
       {
        (errors > 2) ?
        <span>S </span>
        :
        <p></p> 
       }
    
       {
        (errors > 3) ?
        <span>E </span>
        :
        <p></p> 
       }
    
       {
        (errors > 4) ?
        <span>R </span>
        :
        <p></p> 
       }
    
       {
        (errors > 5) ?
        <span> :( </span>
        :
        <p></p> 
       }
    
       </h1>
    
       
       
         
        
    )
}

export default Figure
