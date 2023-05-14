import React from 'react'

const Canvas = ({numbers,setNumbers}) => {
  return (
    <main className='w-[83%] h-ful flex justify-center gap-1 items-start'>
        {numbers.map((number,index)=>{
            return(
                <div key={index} id={index
                } className='w-3 bg-green-500 gap-2' style={{height:`${number}px`}}></div>
            )
        })}
    </main>
  )
}

export default Canvas