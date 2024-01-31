import ShowCard from '../components/ShowCard';

const Home = ({ data }) => {
  
  return (
    <>
      <h1 className="text-white fixed w-full top-0 bg-gray-900 text-3xl text-center py-4 mb-4 shadow-2xl shadow-gray-600">Popular Shows</h1>
      <div className='mx-4 mt-24 flex flex-wrap gap-4 justify-center items-center'>
      {data?.map(showDetail => (
          <ShowCard show={showDetail.show} key={showDetail.show.id} />  
        ))}
      </div>
    </>
  )
}

export default Home
