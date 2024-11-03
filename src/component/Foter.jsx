import React from 'react'
import { Instagram, LinkedinIcon, Twitter, } from 'lucide-react';
function Foter() {
  return (
    <footer className=' '>
      <div className="bg-gray-500  sticky ">
        <div><p className='text-center text-white text-xl p-2'>copyright 2024 &copy; TummyHub All rights are resubed </p></div>
        <div className='socal invert-0 flex justify-center'>
          <span className='p-3 '><a target='blank' href="https://www.instagram.com/theycall_mepi?igsh=dmFhYXJ0d3lsbzZp"><Instagram /></a></span>
          <span className='p-3 '><a target='blank' href="https://x.com/Ranbir129Seth?t=KrugsbW3wXJhDNo8JgcR8g&s=09"><Twitter /></a></span>
          <span className='p-3 '><a target='blank' href="https://www.linkedin.com/in/ranbir-seth-02a0471b3"><LinkedinIcon /></a></span>
        </div>
      </div>
    </footer>

  )
}

export default Foter





