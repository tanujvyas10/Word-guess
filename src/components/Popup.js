import React,{useEffect} from 'react'
import {checkWin} from '../helper/helper'
const Popup = ({correctLetters,wrongLetters,selectedWord,setPlayable,playAgain}) => {
  
     let finalMessge = ''
     let finalMessageRevealWord = ''

     let playable = true

     if(checkWin(correctLetters,wrongLetters,selectedWord)==='win'){
        finalMessge = "CONGRATS  ! APP JEET GYA HO !!! BALLLE... BALLLE... ! TURRRRRRRRAAAAAAAAAAAHHHHHHHHHHHH!!!"
        playable = false
    }
    else if(checkWin(correctLetters,wrongLetters,selectedWord)==='lose'){
        finalMessge = "KOI NI ! PICTURE ABHI BAKI HAI MERE DOST!! ONCE MORE";
        finalMessageRevealWord = `THE WORD WAS : ${selectedWord}`  
        playable = false;

    }

    useEffect(()=> setPlayable(playable)
    )
    return (
        <div className="popup-container" style = {finalMessge !== ''? {display:'flex'}:{} }>
      <div className="popup">
        <h2>{finalMessge}</h2>
        <h3>{finalMessageRevealWord}</h3>
        <button onClick={playAgain}>Play Again</button>
      </div>
    </div>
    )
}

export default Popup
