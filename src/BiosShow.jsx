export function BiosShow(props) {
  const handleSubmit = (event) => {
    event.preventDefault();
    const params = new FormData(event.target);
    props.onUpdateBio(props.bio.id, params);
    event.target.reset();
  };

  return (
    <div id="bio-show" className="row justify-content-center">
      {localStorage.jwt === undefined ? (
        <></>
      ) : (
        <>
          <h1>Edit Bio:</h1>
          <form onSubmit={handleSubmit}>
            <div>
              Summary: |
              <textarea rows="20" cols="75" type="text" name="summary" defaultValue={props.bio.summary}></textarea>
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
