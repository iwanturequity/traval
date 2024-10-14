

import React from 'react';
import { useState } from'react';
import data from './data';
import Tours from "./components/Tours";


const App = () => {
  const[tours , setTours] = useState(data);

  function removetour(id){
    const newTours = tours.filter(tour => tour.id!== id);
    setTours(newTours);
  }

  if(tours === 0){
    return (
      <div>
        <h4> no tours avilable</h4>
        <button onClick={() => setTours(data)}>
          refresh
        </button>
      </div>
      
    )
  }

  return (
    
      <div>
        <Tours tours={tours} removetour={removetour} ></Tours>
      </div>
    
  );
}

export default App;
