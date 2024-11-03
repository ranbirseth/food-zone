import React from 'react'
import './nav.css'

function Navbar() {


    const SearchFood = (e) => {

        let searchvalue = e.target.value
        console.log(searchvalue)

    }

    return (
        <nav className=' bg-gray-600 text-white md:h-[15vh] h-[20vh]'  >
            <div className='flex justify-between p-4'> <h1 className='text-2xl font-bold'>
                <span className='text-red-700 font-bold'>F</span>
                <span className=''>O</span>
                <span className=''>O</span>
                <span className=''>D</span>
                <span className='text-red-700'> Z</span>
                <span className='text-red-700'>O</span>
                <span className='text-red-700'>N</span>
                <span className='text-red-700'>E</span>
            </h1>
                <input onChange={SearchFood} className='h-7 w-64 rounded-lg p-2 bg-transparent border-white border-2' type="search" name="" id="" placeholder='search your need ' />

            </div>
            <div className='flex justify-center gap-6 md:p-0 p-7 '>
                <button className='btn rounded-md w-14'>All </button>
                <button className='btn rounded-md w-24'>brackFast</button>
                <button className='btn rounded-md w-20'>Lunch</button>
                <button className='btn rounded-md w-20'>Denar</button>
            </div>
        </nav>
    )
}

export default Navbar