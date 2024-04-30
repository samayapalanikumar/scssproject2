import React from 'react'

function ReactNote(props) {

  const handleClick = () =>{
    props.onDelete(props.id)
  }
  return (
   <>
   <div className='subcontainer'>
      <h3 className='subcontainer__head'>{props.title}</h3>
      <p className='subcontainer__para'>{props.Content}</p>
      <button onClick={handleClick} className='subcontainer__button1'>Delete</button>
   </div>
   </>
  )
}

export default ReactNote