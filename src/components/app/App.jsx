
import { useState } from 'react'
import { Background } from '../background/Background'
import { Phrases } from '../phrases/Phrases'
import arrayOfPhrases from '../phrases/phrases.json'

import './App.css'

function App() {
  // states
  const [background, setBack] = useState(1)


  const [phrasePosition, setPhrasePosition] = useState(Math.floor(Math.random()*(arrayOfPhrases.length - 0) + 0))

  // handlers
  function handlerButton(){
    // background
   if(background >= 4){
    setBack(1)
   }else{
    setBack(background + 1)
   }
   // phrase
   let phrasePosition2 = Math.floor(Math.random()*(arrayOfPhrases.length)) 

   while (phrasePosition == phrasePosition2 ){
    phrasePosition2 = Math.floor(Math.random()*(arrayOfPhrases.length))
   }
   setPhrasePosition(phrasePosition2)
  }

  return (

    <div className="App">
      <Background back={background}/>
      <div className='phrases'>
        <Phrases position = {phrasePosition}/>
        <button className='button' onClick={handlerButton}>Change Phrase</button>
      </div >
      <footer>
        <p>by: Juan Manzanera シ</p>
      </footer>
    </div>
  )
}

export default App
