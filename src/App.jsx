import {useEffect} from 'react'
import './App.css'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import { fetchDataFromApi } from "./utils/api";
import { getApiConfiguration } from './store/homeSlice';
import { useSelector, useDispatch } from 'react-redux';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    apiTesting();
  }, []);

  const apiTesting = () => {
    fetchDataFromApi("/movie/popular").then((res) => {      // For API testing
      console.log(res); 
      dispatch(getApiConfiguration(res));
    });
  }
  return (
    <Router>
      <Routes>
        <Route/>
      </Routes>
    </Router>
  )
}

export default App
