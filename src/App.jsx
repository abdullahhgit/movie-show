import {useEffect} from 'react'
import './App.css'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import { fetchDataFromApi } from "./utils/api";
import { getApiConfiguration } from './store/homeSlice';
import { useSelector, useDispatch } from 'react-redux';
import Home from './pages/home/Home';
import Header from './components/header/Header';
import Details from './pages/details/Details';
import SearchResult from './pages/searchResult/SearchResult';
import Explore from './pages/explore/Explore';
import PagenotFound from './pages/404/PagenotFound';
import Footer from './components/footer/Footer';

function App() {
  const dispatch = useDispatch();
  const {url} = useSelector((state) => state.home);
 console.log(`Iam url console ${url?.total_pages}`);

  useEffect(() => {
    fetchApiConfig();
  }, []);

  const fetchApiConfig = () => {
    fetchDataFromApi("/configuration").then((res) => {      // For API testing
      console.log(res); 

   /*   const url = {
        backdrop: res.images.secure_base_url + "original",
        poster: res.images.secure_base_url + "original",
        profile: res.images.secure_base_url + "original",
      } */

      dispatch(getApiConfiguration(res));
    });
  }
  return (
    <Router>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/:mediaType/:id' element={<Details />} />
        <Route path='/search/:query' element={<SearchResult />} />
        <Route path='/explore/:mediaType' element={<Explore />} />
        <Route path='*' element={<PagenotFound />} />
      </Routes>
      <Footer />
    </Router>
  )
}

export default App
