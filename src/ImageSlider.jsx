import { useState } from 'react'
import './App.css'

export default function ImageSlider({images}) {
  const [currIdx, setCurrIdx] = useState(0)

  function handleNext() {
    if (currIdx === images.length - 1) return
    setCurrIdx(prevIdx => prevIdx + 1)
  }

  function handlePrev() {
    if (currIdx == 0) return
    setCurrIdx(prevIdx => prevIdx - 1)
  }

  return (
    <>
     <div className='img-container'>
      {images.map((img) => <img style={{translate:`${-100*currIdx}%`}} key={img.url} id={img.index} className='img' src={img.url} alt={`Image - ${img.alt}`}/>)}
     </div>
     {(currIdx == images.length - 1 )? "" : <button onClick={handleNext} >Next</button>}
     {(currIdx == 0)? "" : <button onClick={handlePrev}>Previous</button>}
     {images.map((img,index) => <button onClick={() => setCurrIdx(img.index - 1)} key={index} style={{left: `${20*img.index}%`}} className='circular-btn'></button>)}
    </>
  )
}
