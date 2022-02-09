import React from "react";

function ToyCard({toy,deleteToy,addLike}) {
  return (
    <div className="card">
      <h2>{toy.name}</h2>
      <img
        src={toy.image}
        alt={toy.name}
        className="toy-avatar"
      />
      <p>{toy.likes} Likes </p>
      <button onClick={() => addLike(toy)} className="like-btn">Like {"<3"}</button>
      <button onClick={() => deleteToy(toy)} className="del-btn">Donate to GoodWill</button>
    </div>
  );
}

export default ToyCard;
