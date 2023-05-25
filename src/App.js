import React from "react";
import "./App.css";

const App = () => {

  const animals = [
    {id:0,
     name:'dog'},
     {id: 1,
      name:'cat'},
    {id:2,
      name:'chicken'},
     {id:3,
      name:'cow'}, 
     {id:4,
      name:'sheep'},
      {id:5,
      name:'horse'}];



  return (
  <div> 
    {animals.map((p,i) => (<animals {...p} key = {i}/>))} 

    <table>
        <thead></thead>
        <tbody>
          {animals.map((p) => (
            <tr key={p.id}>
              <td className="smiley">{p.name}</td>
    
            </tr>
          ))}
        </tbody>
      </table>
  </div>
  )
};

export default App;
