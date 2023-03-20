import {useEffect} from 'react'
import './App.css'
import { fetchDataFromApi } from "./utils/api";

function App() {

  useEffect(() => {
    apiTesting();
  }, []);

  const apiTesting = () => {
    fetchDataFromApi("/movie/popular").then((res) => {      // For API testing
      console.log(res); 
    });
  }
  return (
    <div className="App">
      
    </div>
  )
}

export default App
