import "./Modal.css";

export function Modal(props) {
  if (props.show) {
    return (
      <div className="modal-background">
        <br />
        <section className="modal-main">
          <br />
          <br />
          {props.children}
          <button style={{ color: "#6e694e" }} className="close" type="button" onClick={props.onClose}>
            &#x2717;
          </button>
        </section>
      </div>
    );
  }
}
