export function ImageZoom(props) {
  return (
    <div className="row justify-content-center" id="galleries-index">
      <img src={props.gallery.image} style={{ width: "750px" }} />
      <div>
        <h3 className="row justify-content-center">{props.gallery.title}</h3>
        <p className="row justify-content-center">
          {props.gallery.size} | {props.gallery.materials} | {props.gallery.price}
        </p>
        <p style={{ fontSize: "15px", textAlign: "right" }}>
          If you are interested in purchasing a painting, <br />
          please message Birgit via the Contact link
        </p>
      </div>
    </div>
  );
}
