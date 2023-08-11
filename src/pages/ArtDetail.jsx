import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

import { getArtByID, deleteArtWork } from "../api/art";
function ArtDetail() {
  const [art, setArt] = useState({});
  let { imageId } = useParams();

  console.log("Image ID:", imageId); // Log the imageId value
  let navigate = useNavigate();
  useEffect(() => {
    fetchArt();
  }, []);

  async function fetchArt() {
    const [oneArt] = await getArtByID(imageId);
    setArt(oneArt);
    console.log("Updated Art:", oneArt);
  }

  function handleDelete() {
    // Use the _id from the art state object
    deleteArtWork(art._id);
    navigate("/");
  }
  function handleEdit() {
    navigate(`/edit/${imageId}`);
  }

  return (
    <div className="mx-20 mt-10">
      <div className="mb-10 h-14  item">
        <button
          onClick={() => navigate("/")}
          className="bg-orange-500 hover:bg-gray-200 text-white font-bold py-2 px-4 rounded inline-flex items-center"
        >
          Return
        </button>
      </div>
      <div className="flex p-4 max-w-4xl mx-auto mb-10">
        <div className="flex-1 pr-4">
          {art.imageURL && (
            <img
              src={art.imageURL}
              alt={art.title}
              className="w-full h-auto object-cover"
            />
          )}
        </div>

        <div className="flex-1 text-center">
          <h1 className="text-5xl font-bold mb-10 font-mono">{art.title}</h1>
          <p className="mb-2 text-3xl">
            <span className="font-bold">Artist:</span> {art.artist}
          </p>
          <p className="mb-2 text-3xl">
            <span className="font-bold">Date:</span> {art.date}
          </p>
          <p className="mb-2 text-3xl">
            <span className="font-bold">Materials:</span> {art.medium}
          </p>
          <p className="mb-2 text-3xl">
            <span className="font-bold">Origin:</span> {art.origin}
          </p>
        </div>
      </div>
      <button
        onClick={handleEdit}
        className="bg-black hover:bg-gray-200 text-white font-bold py-2 px-4 rounded inline-flex items-center w-16 "
      >
        Edit
      </button>
      <button
        onClick={handleDelete}
        className="bg-red-500 hover:bg-gray-200 text-white font-bold py-2 px-4 rounded inline-flex items-center"
      >
        Delete
      </button>
    </div>
  );
}

export default ArtDetail;
