export function ResumesShow(props) {
  const handleSubmit = (event) => {
    event.preventDefault();
    const params = new FormData(event.target);
    props.onUpdateResume(props.resume.id, params);
    event.target.reset();
  };

  const handleClick = () => {
    props.onDestroyResume(props.resume);
  };

  return (
    <div>
      {localStorage.jwt === undefined ? (
        <></>
      ) : (
        <>
          <h1>Edit Event Info:</h1>
          <form onSubmit={handleSubmit}>
            <div>Summary</div>
            <div>
              <textarea cols="75" type="text" name="summary" defaultValue={props.resume.summary}></textarea>
            </div>
            <div>Link to Event site:</div>
            <div>
              <textarea cols="75" type="text" name="url" defaultValue={props.resume.url}></textarea>
            </div>
            <div>Date:</div>
            <div>
              <input type="text" name="date" defaultValue={props.resume.date} />
            </div>
            <div className="text-center">
              <button className="btn btn-success btn-lg" type="submit">
                Update Event Info
              </button>
            </div>
          </form>
          <br />
          <div>
            <button className="btn btn-dark btn-sm" onClick={handleClick}>
              Delete
            </button>
          </div>
        </>
      )}
    </div>
  );
}
