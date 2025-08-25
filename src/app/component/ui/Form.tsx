import React from 'react'

const Form = () => {
  return (
     <div className=" mt-10 w-80 bg-black/20 backdrop-blur-sm border border-gray-600/30 px-8 py-3 rounded-lg text-white/90 text-sm font-light tracking-wide hover:bg-black/30 transition-all duration-300 mx-auto shadow-[inset_-7px_7px_9px_-5px_#2b2b2b] md:text-left">
        <input placeholder='First Name'></input>
        <input placeholder='Last Name'></input>
        <input placeholder='Email'></input>
        <input placeholder='Subject'></input>
        <input placeholder='Message'></input>
        <button>Send</button>
     </div>
  )
}

export default Form