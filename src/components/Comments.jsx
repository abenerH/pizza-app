import React from 'react'

const Comments = () => {
  return (
    <div className='bg-slate-800 flex flex-col justify-center items-center p-8'>
      <div className="text-center text-white my-2">
        <h3 className='text-xl'>Any complaints ? Any suggestions ?</h3> 
        <p>We're continuously improving and we would appreciate your help by leaving us your opinion on the box below</p>
      </div>
        <form className='flex flex-col items-center'>
            <textarea className='p-3 w-3/4 my-4 resize-none' rows={8} cols={150} placeholder='Leave a comment here...'/>
            <button className='bg-white border-2 w-3/4 px-10 py-2 mb-2'>SEND FEEDBACK</button>
        </form>
    </div>
  )
}

export default Comments