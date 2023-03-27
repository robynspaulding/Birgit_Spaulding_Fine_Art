import axios from "axios";
import { useState } from "react";

export function GalleriesNew() {
  const [image, setImage] = useState("");

  function handleImage(e) {
    console.log(e.target.files);
    setImage(e.target.files[0]);
  }
  const handleCreateGallery = (params) => {
    axios.post("http://localhost:3000/galleries.json", params).then((response) => {
      const newGallery = response.data;
      console.log("New Gallery item added", newGallery);
      window.location.href = "/galleries";
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const params = new FormData(event.target);
    params.append("image", image);
    handleCreateGallery(params);
    event.target.reset;
  };

  return (
    <div id="gallery-new">
      <form onSubmit={handleSubmit}>
        {/* <h2>Add an item to your Gallery:</h2>
        <div>
          <div>Title:</div>
          <input type="text" name="title" />
        </div>
        <div>
          <div>Image Upload:</div>
          <input type="file" name="image" onChange={handleImage} />
        </div>
        <div>
          <div>Materials used: </div>
          <input type="text" name="materials" />
        </div>
        <div>
          <div>Size:</div>
          <input type="text" name="size" />
        </div>
        <div>
          <div>Sale Price:</div>
          <input type="text" name="price" />
        </div>
        <div>
          <div>Description:</div>
          <input name="description" placeholder="Item Description"></input>
        </div>
        <br />
        <button className="button1" type="submit">
          Add Item to Gallery
        </button> */}
        <br />
        <div className="card" style={{ width: "18rem" }}>
          <div className="card-body">
            <h5 className="card-title text-center"> Add a Painting to the Gallery:</h5>
            <p className="card-text">
              <div>
                Title:
                <br /> <input type="text" name="title" />
              </div>
              <div>
                Image Updoad:
                <br />
                <input type="file" name="image" onChange={handleImage} />
              </div>
              <div>
                Medium:
                <br />
                <input type="text" name="materials" />
              </div>
              <div>
                Price:
                <br />
                <input type="text" name="price" />
              </div>
              <div>
                Description (optional):
                <br />
                <input type="text" name="description" />
              </div>
              <button className="button1" type="submit">
                Add Item to Gallery
              </button>
            </p>
          </div>
        </div>
      </form>
    </div>
  );
}
