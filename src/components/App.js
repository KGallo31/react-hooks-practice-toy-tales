import React, { useState,useEffect } from "react";

import Header from "./Header";
import ToyForm from "./ToyForm";
import ToyContainer from "./ToyContainer";

const API = 'http://localhost:3001/toys'

function App() {
  const [showForm, setShowForm] = useState(false);
  const [allToys,setAllToys] = useState([])

  const addNewToy = (newToy) => {
    const newToys = [...allToys,newToy]
    setAllToys(newToys)
  }

  useEffect(() => {
    fetch(API).then(r=>r.json()).then(setAllToys)
  },[])

  function handleClick() {
    setShowForm((showForm) => !showForm);
  }

  const deleteToy = (deletedToy) => {
    const newToys = allToys.filter(toy => {
      return toy.id !== deletedToy.id
    })
    fetch(API + `/${deletedToy.id}`,{method:'DELETE'})
    setAllToys(newToys)
  }

  const addLike = (toy) => {
    fetch(API+`/${toy.id}`,{method:"PATCH",body:{likes:++toy.likes}})
    const newArr = [...allToys]
    setAllToys(newArr)
  }

  return (
    <>
      <Header />
      {showForm ? <ToyForm addNewToy={addNewToy}/> : null}
      <div className="buttonContainer">
        <button onClick={handleClick}>Add a Toy</button>
      </div>
      <ToyContainer allToys={allToys} deleteToy={deleteToy} addLike={addLike}/>
    </>
  );
}

export default App;
