export function showNotification(setter){
    setter(true)
    setTimeout(()=>{
        setter(false)
    },2000)
}

export function checkWin(correctLetters, wrongLetters, selectedWord) {
    let status = 'win';
  
    // Check for win
    selectedWord.split('').forEach(letter => {
      if(!correctLetters.includes(letter)){
        status = '';
      }
    });
    
    // Check for lose
    if(wrongLetters.length === 6) status = 'lose';
  
    return status
  }