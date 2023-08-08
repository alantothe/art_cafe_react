import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getArtByID, updateArt } from "../api/art";

function EditPage() {
  const [art, setArt] = useState([
    {
      title: "",
      artist: "",
      imageURL: "",
      medium: "",
      origin: "",
    },
  ]);
  let { imageId } = useParams();
  let navigate = useNavigate();
  //   console.log("Image ID:", imageId);

  useEffect(() => {
    fetchArt();
  }, []);

  async function fetchArt() {
    const oneArt = await getArtByID(imageId);
    setArt(oneArt);
    console.log("Updated Art:", oneArt);
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    await updateArt(art._id, art);
    navigate(`/id/${imageId}`);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setArt((prevArt) => [...prevArt, (prevArt[0][name] = value)]);
  };
  //   console.log("Art:", art);

  return (
    <div>
      <h1>Edit Art</h1>
      <form className="create-form" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Title"
          name="title"
          value={art[0]?.title || ""}
          onChange={handleChange}
        />
        <input
          type="text"
          placeholder="Artist"
          name="artist"
          value={art[0]?.artist || ""}
          onChange={handleChange}
        />
        <input
          type="text"
          placeholder="Image URL"
          name="imageURL"
          value={art[0]?.imageURL || ""}
          onChange={handleChange}
        />
        <input
          type="text"
          placeholder="Medium"
          name="medium"
          value={art[0]?.medium || ""}
          onChange={handleChange}
        />
        <input
          type="text"
          placeholder="Origin"
          name="origin"
          value={art[0]?.origin || ""}
          onChange={handleChange}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default EditPage;

// export default function CatEdit() {
//   const [cat, setCat] = useState({
//     name: "",
//     aka: "",
//     age: "",
//     gender: "",
//     species: "",
//     bio: "",
//     image: "",
//     likesCuddles: true,
//   })

//   let { id } = useParams()
//   let navigate = useNavigate()

//   useEffect(() => {
//     fetchCat()
//   }, [])

//   async function fetchCat() {
//     const oneCat = await getCat(id)
//     setCat(oneCat)
//   }

//   const handleSubmit = async (e) => {
//     e.preventDefault()
//     await updateCat(id, cat)
//     navigate(`/cats/${id}`)
//   }

//   const handleChange = (e) => {
//     const { name, value } = e.target

//     setCat((prevCat) => ({
//       ...prevCat,
//       [name]: value
//     }))
//   }

//   return (
//     <div>
//       <h1>Add a Cute Cat in our Database!</h1>
//       <form className="create-form" onSubmit={handleSubmit}>
//         <input
//           type="text"
//           placeholder="Please add your cat's name"
//           name="name"
//           value={cat.name}
//           onChange={handleChange}
//         />
//         <input
//           type="text"
//           placeholder="Nick name"
//           name="aka"
//           value={cat.aka}
//           onChange={handleChange}
//         />
//         <input
//           type="number"
//           name="age"
//           value={cat.age}
//           onChange={handleChange}
//         />
//         <input
//           type="text"
//           placeholder="Cat's gender"
//           name="gender"
//           value={cat.gender}
//           onChange={handleChange}
//         />
//         <input
//           type="text"
//           placeholder="Cat's bio"
//           name="bio"
//           value={cat.bio}
//           onChange={handleChange}
//         />
//         <input
//           type="text"
//           placeholder="Cat's Species"
//           name="species"
//           value={cat.species}
//           onChange={handleChange}
//         />
//         <input
//           type="text"
//           placeholder="Please add cat image url"
//           name="image"
//           value={cat.image}
//           onChange={handleChange}
//         />
//         <button type="submit">Edit Your Cat!</button>
//       </form>
//     </div>
//   )
// }
