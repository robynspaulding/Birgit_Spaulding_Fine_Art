import axios from "axios";
import { useState } from "react";

export function GalleriesNew() {
  const [image, setImage] = useState("");

  function handleImage(e) {
    console.log(e.target.files);
    setImage(e.target.files[0]);
  }
  const handleCreateGallery = (params) => {
    axios.post("galleries.json", params).then((response) => {
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
        <br />
        <div className="card" style={{ width: "40rem" }}>
          <div className="card-body">
            <h5 className="card-title text-center"> Add a Painting to the Gallery:</h5>
            <p className="card-text">
              <div>
                Title:
                <br /> <textarea cols="25" type="text" name="title"></textarea>
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
                Size:
                <br />
                <input type="text" name="size" />
              </div>
              <div>
                Price:
                <br />
                <input type="text" name="price" />
              </div>
              <div>
                Description (optional):
                <br />
                <textarea cols="75" type="text" name="description"></textarea>
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
