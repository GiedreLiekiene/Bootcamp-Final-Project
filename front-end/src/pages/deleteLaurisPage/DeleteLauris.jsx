import './deleteLauris.css'
import { useState } from 'react'

const DeleteLauris = () => {
    const [deleteLauris, setDeleteLauris] = useState(true)
    const [buttonText, setButtonText] = useState("YES!")
    function delLauris () {
      setDeleteLauris(!deleteLauris);
      setButtonText(deleteLauris ? "BRING HIM BACK!" : "YES!")
    }
  return (
    <div className='deleteLauris-container'>
        <div className='deleteLauris-wrapper'>
            <h1 className='deleteLauris-h1'>Do You Want to Delete Lauris?</h1>
           { deleteLauris ? <div className={deleteLauris ? 'deleteLauris-image-wrapper active' : 'deleteLauris-image-wrapper'}>
                <img className='deleteLauris-image' src="https://images.unsplash.com/photo-1580128637456-8f5ee699d117?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=787&q=80" alt='lauris picture'></img>
            </div>: null} 
            <button onClick={() => {delLauris()} } className="deleteLauris-button">{buttonText}</button>
        </div>
    </div>
  )
}

export default DeleteLauris