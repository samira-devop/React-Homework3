import React from "react";
import "./App.css";

const App = () => {
  const animals = [
    { id: 0, name: "dog", emogi: "🐶" },
    { id: 1, name: "cat", emogi: "😺" },
    { id: 2, name: "chicken", emogi: "🐔" },
    { id: 3, name: "cow", emogi: "🐄" },
    { id: 4, name: "sheep", emogi: "🐑" },
    { id: 5, name: "horse", emogi: "🐎" },
  ];

  return (
    <div>
      {animals.map((p, i) => (
        <animals {...p} key={i} />
      ))}

      <table>
        <thead></thead>
        <tbody>
          {animals.map((p) => (
            <tr key={p.id}>
              <td>
                {p.emogi}
                {p.name}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default App;
