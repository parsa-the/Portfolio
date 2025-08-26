import React from 'react'

const Form = () => {
  return (
    <div className='flex justify-end px-4'>
      <form className="bg-black/20 backdrop-blur-sm border border-gray-600/30 px-4 md:px-8 py-6 rounded-lg w-full max-w-md">
        
        {/* Name Fields */}
        <div className='flex flex-col md:flex-row gap-4 mb-4'>
          <input 
            placeholder='First Name' 
            className='border border-gray-600 rounded h-10 px-3 w-full bg-white/5 text-white placeholder-gray-400 focus:border-gray-500 focus:outline-none'
            required
          />
          <input 
            placeholder='Last Name' 
            className='border border-gray-600 rounded h-10 px-3 w-full bg-white/5 text-white placeholder-gray-400 focus:border-gray-500 focus:outline-none'
            required
          />
        </div>

        {/* Other Fields */}
        <div className='space-y-4 mb-6'>
          <input 
            placeholder='Email' 
            type='email'
            className='border border-gray-600 rounded h-10 px-3 w-full bg-white/5 text-white placeholder-gray-400 focus:border-gray-500 focus:outline-none'
            required
          />
          <input 
            placeholder='Subject' 
            className='border border-gray-600 rounded h-10 px-3 w-full bg-white/5 text-white placeholder-gray-400 focus:border-gray-500 focus:outline-none'
            required
          />
          <textarea 
            placeholder='Message'
            rows={4}
            className='border border-gray-600 rounded px-3 py-2 w-full bg-white/5 text-white placeholder-gray-400 focus:border-gray-500 focus:outline-none resize-none'
            required
          />
        </div>

        {/* Button */}
        <button 
          type='submit'
          className='bg-white text-black py-2 px-6 rounded w-full hover:bg-gray-200 transition-colors'
        >
          Send
        </button>

      </form>
    </div>
  )
}

export default Form