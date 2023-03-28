export function BiosShow(props) {
  const handleSubmit = (event) => {
    event.preventDefault();
    const params = new FormData(event.target);
    props.onUpdateBio(props.bio.id, params);
    event.target.reset();
  };

  return (
    <div id="bio-show" className="row justify-content-center">
      <p className="row justify-content-center">{props.bio.summary}</p>

      {localStorage.jwt === undefined ? (
        <></>
      ) : (
        <>
          <h1>Edit Bio:</h1>
          <form onSubmit={handleSubmit}>
            <div>
              Summary: |<input type="text" name="materials" defaultValue={props.bio.summary} />
            </div>
            <button className="btn btn-success" type="submit">
              Update Bio
            </button>
          </form>
        </>
      )}
    </div>
  );
}
