import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createArt } from "../api/art";
import { v4 as uuidv4 } from "uuid";

function Submit() {
  const [art, setArt] = useState({
    title: "",
    artist: "",
    date: "",
    imageURL: "",
    medium: "",
    origin: "",
    imageId: "",
  });

  let navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const updatedArt = {
      ...art,
      imageId: uuidv4(),
      date: new Date().toISOString(),
    };

    await createArt(updatedArt);
    navigate(`/id/${updatedArt.imageId}`);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setArt((prevArt) => ({
      ...prevArt,
      [name]: value,
    }));
  };

  return (
    <div>
      <h1>Submit Art</h1>
      <form className="create-form" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Title"
          name="title"
          value={art.title}
          onChange={handleChange}
        />
        <input
          type="text"
          placeholder="Artist"
          name="artist"
          value={art.artist}
          onChange={handleChange}
        />
        <input
          type="text"
          placeholder="Image URL"
          name="imageURL"
          value={art.imageURL}
          onChange={handleChange}
        />
        <input
          type="text"
          placeholder="Medium"
          name="medium"
          value={art.medium}
          onChange={handleChange}
        />
        <input
          type="text"
          placeholder="Origin"
          name="origin"
          value={art.origin}
          onChange={handleChange}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Submit;
