import { React, useState, useEffect } from 'react';
import Main from './Components/Main';
import { Route, Routes } from 'react-router-dom';
import Learn from "./Components/Learn";
import Shop from "./Components/Shop";

function App() {
  //declaring state
  const [data, setData] = useState([]);

//Getting Data from api
  const getData = async () => {
    const response = await fetch("api/cars.json");
    const res = await response.json();
    setData(res);
  };

//Calling Fetch function inside useeffect
  useEffect(() => {
    getData();
  }, []);


  return (
    <>

      <Routes>

{/* Main Compnenet */}
        <Route path="/" element={<Main data={data} />} />


{/* Learn and Shop Compnent */}
        <Route path="/learn/:id" element={<Learn cars={data} />} />
        <Route path="/shop/:id" element={<Shop shop={data} />} />


      </Routes>
    
    
    </>

  );

}
export default App;
