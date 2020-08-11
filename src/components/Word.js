import React from 'react'

const Word = ({selectedWord, correctLetter}) => {
    return (
        <div className="word" >
        {
            selectedWord.split('').map((letter,i)=>{
                return (
                    <span className = "letter" key = {i}>
                    {correctLetter.includes(letter)?letter:''}
                    </span>
                )
            })
        }
        </div>
    )
}

export default Word
