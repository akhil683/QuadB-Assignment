import React from 'react'
import { Link } from 'react-router-dom'

const ShowCard = ({ show }) => {
  const { id, rating, name,language, image } = show;

  const imgURL = image?.medium;
  const defaultImg = "https://www.reelviews.net/resources/img/default_poster.jpg";

  return (
    <div className="bg-black text-white w-full sm:w-[260px] rounded-xl shadow-2xl duration-200 hover:shadow-slate-800 border-transparent hover:border-white">

      <div className='w-full h-[380px] sm:h-[270px] rounded-md overflow-hidden'>
        <img src={imgURL ? imgURL : defaultImg} alt={name} className='w-full h-full object-cover' />
      </div>

      <div className='m-4'>
        <p className='text-slate-300 text-sm'><span className='text-base text-white'>⭐{rating?.average ? rating.average : 'No Rating'}</span> ({language})</p>
        <div className='flex justify-between items-center'>
          <h1 className='text-xl inline-block text-green-400'>{name}</h1>
          <Link to={`/${id}`} className='bg-white hover:bg-slate-200 duration-100 text-black px-4 py-2 text-sm rounded-md'>Details</Link>
        </div>
      </div>
      
    </div>
  )
}

export default ShowCard
