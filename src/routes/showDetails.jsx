import { Link, useParams } from 'react-router-dom'

const ShowDetails = ({ data }) => {
  const { id } = useParams();
  const showDetail = data.find(shows => shows.show.id == id);
  const { name, summary } = showDetail.show;

  return (
    <>
      <Link to='/' className='absolute top-4 left-4 px-4 py-2 bg-black rounded-lg text-white'>BACK</Link>
      <div className='relative max-w-[600px] max-sm:mx-2 m-auto mt-16'>
        <div className='my-6'>
          <h1 className='text-3xl text-blue-600 font-semibold mb-4'>{name}</h1> 
          <p dangerouslySetInnerHTML={{__html: summary}} className=' text-justify' />
        </div>
        <Link to='tickets' className='absolute px-4 py-2 right-0 bg-blue-700 duration-800 hover:bg-blue-900 text-white rounded-lg'>Book Ticket</Link>
      </div>
    </>
  )
}

export default ShowDetails
