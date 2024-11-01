import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <>
    <div className='h-[82vh] bg-[url(https://tse1.mm.bing.net/th?id=OIP.sW4EauvMuKQI6hST5LdCQAHaEK&pid=Api&P=0&h=220)] bg-center bg-cover bg-no-repeat'>
    <div className='flex flex-col justify-center items-center h-[80vh]'>
    <div className=''>
    <h1 className="text-8xl text-center text-black font-creepster">iNotebook</h1>
    <p className="text-1xl  text-center text-black font-creepster">Your Notebook on the cloud</p>
    </div>
    <Link to='/notebook' className="btn btn-outline text-black font-creepster text-2xl my-5  border-[2px]">
          Start here!
        </Link>
    </div>
    </div>
    </>
  )
}

export default Home
