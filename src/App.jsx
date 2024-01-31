import { useState , useEffect, Suspense, lazy } from "react";
import { Route, Routes } from "react-router-dom";

const Home = lazy(() => import('./routes/Home'));
const ShowDetails = lazy(() => import('./routes/showDetails'))
const ShowForm = lazy(() => import('./components/ShowForm'));

const Loader = () => {
  return (
    <div className="h-screen flex justify-center items-center">
     <p className="text-4xl">Loading...</p>
    </div>
  )
}

const App = () => {
  const [ data, setData ] = useState([]);
  const [ isLoading, setIsLoading ] = useState(false);

  const apiUrl = "https://api.tvmaze.com/search/shows?q=all";
  
  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      const res = await fetch(apiUrl);
      const response = await res.json();
      setData(response);
      setIsLoading(false);
    }
    fetchData();
  }, []);

  return (
    <Routes>
      
      <Route path="/" element={
        <Suspense fallback={<Loader />}>
          { isLoading 
            ? <Loader />
            : <Home data={data} />
          }
        </Suspense>
      }/>

      <Route path="/:id" element={
        <Suspense fallback={<Loader />}>
          <ShowDetails data={data} />
        </Suspense>
      }/>

      <Route path="/:id/tickets" element={
        <Suspense fallback={<Loader />}>
          <ShowForm data={data} />
        </Suspense>
      }/>

    </Routes>
  )
}
export default App;