import { Link, useParams } from 'react-router-dom'

const ShowDetails = ({ data }) => {
  const { id } = useParams();
  const showDetail = data.find(shows => shows.show.id == id);
  const { name, summary } = showDetail.show;

  return (
    <div className='m-4 mt-6'>
    <Link to='/' className='px-4 py-2 bg-black rounded-lg text-white'>BACK</Link>
      <div className='mt-6'>
        <h1 className='text-3xl text-blue-600 font-semibold mb-4'>{name}</h1> 
        <p dangerouslySetInnerHTML={{__html: summary}} className=' text-justify' />
      </div>
    </div>
  )
}

export default ShowDetails
