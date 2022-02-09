import React from "react";
import ToyCard from "./ToyCard";

function ToyContainer({allToys,deleteToy,addLike}) {
  return (
    <div id="toy-collection">
      {allToys.map(toy => <ToyCard key={toy.id} toy={toy} deleteToy={deleteToy} addLike={addLike}/>)}
      </div>
  );
}

export default ToyContainer;
