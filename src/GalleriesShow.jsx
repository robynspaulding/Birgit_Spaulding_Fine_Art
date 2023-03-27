export function GalleriesShow(props) {
  const handleSubmit = (event) => {
    event.preventDefault();
    const params = new FormData(event.target);
    props.onUpdateGallery(props.gallery.id, params);
    event.target.reset();
  };

  const handleClick = () => {
    props.onDestroyGallery(props.gallery);
  };

  return (
    <div id="gallery-show" className="row justify-content-center">
      <h1 className="row justify-content-center">{props.gallery.title}</h1>
      <img className="modal_image" src={props.gallery.image} style={{ width: "18rem" }} />
      <p className="row justify-content-center">
        {props.gallery.size} | {props.gallery.materials} | {props.gallery.price} | {props.gallery.description}
      </p>

      {localStorage.jwt === undefined ? (
        <></>
      ) : (
        <>
          <h1>Edit Painting:</h1>
          <form onSubmit={handleSubmit}>
            <div>
              Title: |<input type="text" name="title" defaultValue={props.gallery.title} />
            </div>
            {/* __________________ Addin if asked ________________________ */}
            {/* <div>Image URL:
              <input type="text" name="image" defaultValue={props.gallery.image} />
            </div> */}
            <div>
              Materials: |<input type="text" name="materials" defaultValue={props.gallery.materials} />
            </div>
            <div>
              Size: |<input type="text" name="size" defaultValue={props.gallery.size} />
            </div>
            <div>
              Price: |<input type="text" name="price" defaultValue={props.gallery.price} />
            </div>
            <div>
              Description: |<input type="text" name="description" defaultValue={props.gallery.description} />
            </div>

            <button className="btn btn-success" type="submit">
              Update Painting
            </button>
          </form>
          <p> </p>
          <p> </p>
          <div>
            <button className="btn btn-danger" onClick={handleClick}>
              Delete Painting
            </button>
          </div>
        </>
      )}
    </div>
  );
}
