
import React, { useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import Swal from 'sweetalert2';

const ShowForm = ({ data }) => {
  const { id } = useParams();

  const showDetail = data.find(shows => shows.show.id == id);
  const { show } = showDetail;
  const name = show.name;

  const initialForm = {
    name: name,
    location: "",
    email: "",
  }
  const [ form, setForm ] = useState(initialForm);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({...form, [name]: value}) 
  }

  const HandleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem('storedForm', JSON.stringify(form));
    Swal.fire({
      title: "Good job!",
      text: "You clicked the button!",
      icon: "success"
    });
  }

  return (

    <div className='flex flex-col gap-4 sm:justify-center sm:items-center h-screen max-sm:mt-24 text-center mx-4'>

      <Link to={`/${id}`} className="absolute top-4 left-4 px-4 py-2 bg-black rounded-lg text-white hover:text-slate-200">BACK</Link>

      <h2 className=' text-blue-600 text-3xl'>Form for Ticket Reservation !</h2>

      <form 
        onSubmit={(e) => HandleSubmit(e)}
        className='flex flex-col gap-2 items-center my-6 sm:max-w-[350px] w-full'
        >
        <input 
          type="text" 
          name='name'
          value={form.name}
          onChange={(e) => handleChange(e)}
          placeholder='Show Name' 
          defaultValue={show.name} 
          className='w-full bg-slate-300 p-2 rounded-lg' 
          required
        />    
        <input 
          type='text' 
          name='location'
          value={form.location}
          placeholder='Location'
          onChange={(e) => handleChange(e)} 
          className='w-full bg-slate-300 p-2 rounded-lg' 
          required
        />
        <input 
          type='email' 
          name='email'
          value={form.email}
          placeholder='Email Address' 
          onChange={(e) => handleChange(e)}
          className='w-full bg-slate-300 p-2 rounded-lg' 
          required
        />
        <button 
          type='submit' 
          className='bg-black text-white w-full px-4 py-2 rounded-lg hover:text-slate-200'
        >
          Book Now
        </button>
      </form>
    </div>
  )
}

export default ShowForm
