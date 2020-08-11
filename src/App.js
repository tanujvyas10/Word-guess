import React,{useState,useEffect} from 'react';
import './App.css';
import Header from './components/Header';
import Figure from './components/Figure';
import WrongLetters from './components/WrongLetters';
import Word from './components/Word';
import Popup from './components/Popup';
import Notification from './components/Notification';
import {showNotification as show} from './helper/helper'

const words = ['application', 'programming', 'interface', 'wizard'];

let selectedWord = words[Math.floor(Math.random() * words.length)];



function App() {

  const [playable,setPlayable] = useState(true)
  const [correctLetters,setCorrectLetters] = useState([])
  const [wrongLetters,setWrongLetters] = useState([])
  const [showNotification, setShowNotification] = useState(false);

  useEffect(() => {
    const handleKeydown = event => {
      const { key, keyCode } = event;
      if (playable && keyCode >= 65 && keyCode <= 90) {
        const letter = key.toLowerCase();
        if (selectedWord.includes(letter)) {
          if (!correctLetters.includes(letter)) {
            setCorrectLetters(currentLetters => [...currentLetters, letter]);
          } else {
            show(setShowNotification);
          }
        } else {
          if (!wrongLetters.includes(letter)) {
            setWrongLetters(currentLetters => [...currentLetters, letter]);
          } else {
            show(setShowNotification);
          }
        }
      }
    }
    window.addEventListener('keydown', handleKeydown);
//need to remove Eventlistener because with every keydown eventlistener get called this can lead to slowing of applicatoin to need to remove the eventlistener simulatnourly
    return () => window.removeEventListener('keydown', handleKeydown);
  }, [correctLetters, wrongLetters, playable]);




  
  return (
    <>
    <Header/>
    <div className = "game-container">
    <Figure wrongLetters ={ wrongLetters}/>  
    <WrongLetters wrongLetters = {wrongLetters} />
    <Word selectedWord={selectedWord} correctLetter = {correctLetters} />
    <Popup/>
    <Notification showNotification = {showNotification} />
    </div>
   
    </>
  );
}

export default App;
